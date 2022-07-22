"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DropdownPhoneSelect = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _memoize = _interopRequireDefault(require("lodash/memoize"));

var _reduce = _interopRequireDefault(require("lodash/reduce"));

var _startsWith = _interopRequireDefault(require("lodash/startsWith"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _usePrevious = require("../../../../helpers/hooks/use-previous");

var _flagIcon = require("../../../graphics/icons/flag-icon");

var _dropdownSelectWithInput = require("../dropdown-select-with-input");

var _CountryData = _interopRequireDefault(require("./data/CountryData.js"));

var _fr = _interopRequireDefault(require("./data/lang/fr"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const removeCountryCodeFromFormat = format => {
  return format.replace(/\+[.]+\s/gi, '');
};

const processCountries = _ref => {
  let {
    countries,
    prefix,
    locale,
    flagsUrl
  } = _ref;
  return countries.map(country => {
    const localizedName = locale === 'fr' ? _fr.default[country.iso2] : country.name;
    return {
      value: country.iso2,
      label: localizedName,
      labelInList: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, localizedName, /*#__PURE__*/_react.default.createElement("span", {
        className: "k-u-color-font2 k-u-margin-left-noneHalf"
      }, prefix, country.countryCode)),
      labelSelected: "" + prefix + country.countryCode,
      icon: /*#__PURE__*/_react.default.createElement(_flagIcon.FlagIcon, {
        country: country.iso2,
        countryName: localizedName,
        flagsUrl: flagsUrl
      })
    };
  });
};

const formatNumber = (text, country, normalizer) => {
  var _text;

  if (!country) return text;
  const {
    format
  } = country;
  if (!format) return text;
  text = normalizer(text, country);
  const pattern = removeCountryCodeFromFormat(format);

  if (!text || text.length === 0) {
    return '';
  }

  if (((_text = text) == null ? void 0 : _text.length) < 2 || pattern === '') {
    return text;
  }

  const formattedObject = (0, _reduce.default)(pattern, (acc, character) => {
    if (acc.remainingText.length === 0) {
      return acc;
    }

    if (character !== '.') {
      return {
        formattedText: acc.formattedText + character,
        remainingText: acc.remainingText
      };
    }

    const [head, ...tail] = acc.remainingText;
    return {
      formattedText: acc.formattedText + head,
      remainingText: tail
    };
  }, {
    formattedText: '',
    remainingText: text.split('')
  });
  return formattedObject.formattedText;
};

const getOptions = _ref2 => {
  let {
    onlyCountries,
    preferredCountries,
    prefix,
    locale,
    flagsUrl
  } = _ref2;
  const options = [];

  if (preferredCountries) {
    options.push(...processCountries({
      countries: preferredCountries,
      prefix,
      locale,
      flagsUrl
    }));
    options.push({
      separator: true,
      disabled: true
    });
  }

  onlyCountries && options.push(...processCountries({
    countries: onlyCountries,
    prefix,
    locale,
    flagsUrl
  }));
  return options;
};

const guessSelectedCountry = (0, _memoize.default)((inputNumber, country, onlyCountries) => {
  const secondBestGuess = onlyCountries.find(o => o.iso2 === country);
  if (inputNumber.trim() === '') return secondBestGuess;
  const bestGuess = onlyCountries.reduce((selectedCountry, country) => {
    if ((0, _startsWith.default)(inputNumber, country.dialCode)) {
      if (country.dialCode.length > selectedCountry.dialCode.length) {
        return country;
      }

      if (country.dialCode.length === selectedCountry.dialCode.length && country.priority < selectedCountry.priority) {
        return country;
      }
    }

    return selectedCountry;
  }, {
    dialCode: '',
    priority: 10001
  }, void 0);
  if (!bestGuess.name) return secondBestGuess;
  return bestGuess;
});

const getCountryObjectFromIso = (country, onlyCountries) => {
  let newSelectedCountry;

  if (country.indexOf(0) >= '0' && country.indexOf(0) <= '9') {
    // "country" is a digit
    newSelectedCountry = onlyCountries.find(o => o.dialCode === +country);
  } else {
    // "country" is an iso string
    newSelectedCountry = onlyCountries.find(o => o.iso2 === country);
  }

  return newSelectedCountry;
};

const DropdownPhoneSelect = _ref3 => {
  let {
    id,
    value,
    defaultCountry,
    locale,
    placeholder,
    onChange,
    flagsUrl,
    assumeCountry,
    inputProps,
    normalizer,
    ...props
  } = _ref3;
  // Consts
  const [getCountry, setCountry] = (0, _react.useState)(null);
  const [getFormattedNumber, setFormattedNumber] = (0, _react.useState)('');
  const [getCaretPosition, setCaretPosition] = (0, _react.useState)(0);
  const [getInputPlaceholder, setInputPlaceholder] = (0, _react.useState)(placeholder);
  const [getDefaultSelectedValue, setDefaultSelectedValue] = (0, _react.useState)(null);
  const [getInputNumber, setInputNumber] = (0, _react.useState)('');
  const getPreviousFormattedNumber = (0, _usePrevious.usePrevious)(getFormattedNumber);
  const phoneProps = { ...DropdownPhoneSelect.defaultProps.phoneProps,
    ...props.phoneProps
  };
  const localization = locale === 'fr' ? _fr.default : [];
  const {
    onlyCountries,
    preferredCountries
  } = new _CountryData.default(phoneProps.enableAreaCodes, phoneProps.enableTerritories, phoneProps.regions, phoneProps.onlyCountries, phoneProps.preferredCountries, phoneProps.excludeCountries, phoneProps.preserveOrder, phoneProps.masks, phoneProps.priority, phoneProps.areaCodes, localization, phoneProps.prefix, phoneProps.defaultMask, phoneProps.alwaysDefaultMask);
  const options = getOptions({
    onlyCountries,
    preferredCountries,
    prefix: phoneProps.prefix,
    locale,
    flagsUrl
  }); // Handlers

  const handleInput = event => {
    const currentCountry = getCountryObjectFromIso(getCountry, onlyCountries);
    const {
      value
    } = event.target;
    const innerValue = value.replace(/\D/g, '');
    setInputNumber(innerValue);
    if (innerValue.length > 15) return;
    if (innerValue === getFormattedNumber) return;
    let innerFormattedNumber = '';

    if (innerValue.length > 0) {
      innerFormattedNumber = formatNumber(innerValue, currentCountry, normalizer);
    }

    const caretPosition = event.target.selectionStart;
    const {
      format,
      countryCode
    } = currentCountry;
    const pattern = removeCountryCodeFromFormat(format);
    const limit = pattern.length > 0 ? pattern.length : 15;

    if (getFormattedNumber.length === limit && innerFormattedNumber.length >= getFormattedNumber.length) {
      return;
    }

    setCaretPosition(caretPosition);
    setFormattedNumber(innerFormattedNumber);
    if (!onChange) return;
    const numberToExport = "" + phoneProps.prefix + countryCode + " " + innerFormattedNumber;
    onChange(numberToExport.replace(/[^0-9]+/g, ''), currentCountry, event, numberToExport);
  };

  const handleSelect = country => {
    if (!country) {
      return setCountry(null);
    }

    const newCountry = getCountryObjectFromIso(country.value, onlyCountries);
    setCountry(newCountry.iso2);
    const placeholderFormat = removeCountryCodeFromFormat(newCountry.format);

    if (placeholderFormat === '') {
      setInputPlaceholder(placeholder);
    } else {
      setInputPlaceholder(placeholderFormat.replace(/\./g, '0'));
    }
  }; // Effects


  (0, _react.useEffect)(() => {
    // Populate form on new props
    let inputNumber = value ? value.replace(/\D/g, '') : '';
    let countryGuess;

    if (inputNumber.length > 1) {
      if ((0, _startsWith.default)(inputNumber, '0') && !(0, _startsWith.default)(inputNumber, '00')) {
        // French mobile phone number
        countryGuess = getCountryObjectFromIso(assumeCountry, onlyCountries);
        inputNumber = inputNumber.slice(1);
      } else {
        // Country detect by phone
        countryGuess = guessSelectedCountry(inputNumber.substring(0, 6), defaultCountry, onlyCountries) || 0;

        if (countryGuess !== 0) {
          inputNumber = inputNumber.slice(countryGuess.countryCode.length);
        }
      }
    } else if (defaultCountry !== '') {
      // Default country
      countryGuess = onlyCountries.find(o => o.iso2 === defaultCountry) || 0;
    } else {
      // Empty params
      countryGuess = 0;
    }

    if (countryGuess !== 0) {
      setCountry(countryGuess.iso2);
      setDefaultSelectedValue(countryGuess.iso2);
      setInputNumber(inputNumber);
    }
  }, [value, defaultCountry]);
  (0, _react.useEffect)(() => {
    // Adjust input number on country change
    if (getCountry) {
      handleInput({
        target: {
          value: getInputNumber
        }
      });
    }
  }, [getCountry, getInputNumber]);
  (0, _react.useEffect)(() => {
    // Adjust caret position depending on the edit
    if (!getFormattedNumber || !getPreviousFormattedNumber) return;
    const inputElement = document.getElementById(id + "_element-input");
    const diff = getFormattedNumber.length - getPreviousFormattedNumber.length;

    if (diff < 0 || getCaretPosition < getFormattedNumber.length - 1) {
      inputElement.setSelectionRange(getCaretPosition, getCaretPosition);
    }
  }, [getFormattedNumber]);
  return /*#__PURE__*/_react.default.createElement(_dropdownSelectWithInput.DropdownSelectWithInput, (0, _extends2.default)({}, props, {
    id: id,
    resetOnBackspace: true,
    highlightOptionBox: false,
    placeholder: placeholder,
    options: options,
    inputPlaceholder: getInputPlaceholder,
    onChange: handleSelect,
    defaultSelectedValue: getDefaultSelectedValue,
    inputProps: {
      onChange: handleInput,
      value: getFormattedNumber,
      type: 'tel',
      ...inputProps
    }
  }));
};

exports.DropdownPhoneSelect = DropdownPhoneSelect;
DropdownPhoneSelect.defaultProps = {
  defaultCountry: '',
  value: '',
  phoneProps: {
    onlyCountries: [],
    preferredCountries: [],
    excludeCountries: [],
    disabled: false,
    enableAreaCodes: false,
    enableTerritories: true,
    regions: '',
    masks: null,
    priority: null,
    areaCodes: null,
    preserveOrder: ['preferredCountries'],
    defaultMask: '',
    alwaysDefaultMask: false,
    prefix: '+'
  },
  id: 'dropdown-phone-select',
  inputProps: {},
  locale: 'en',
  placeholder: 'Telephone',
  flagsUrl: './flags.png',
  assumeCountry: 'fr',
  onChange: () => {},
  normalizer: value => value
};
DropdownPhoneSelect.propTypes = {
  phoneProps: _propTypes.default.shape({
    onlyCountries: _propTypes.default.array,
    preferredCountries: _propTypes.default.array,
    excludeCountries: _propTypes.default.array,
    disabled: _propTypes.default.bool,
    enableAreaCodes: _propTypes.default.bool,
    enableTerritories: _propTypes.default.bool,
    regions: _propTypes.default.string,
    masks: _propTypes.default.string,
    priority: _propTypes.default.string,
    areaCodes: _propTypes.default.string,
    preserveOrder: _propTypes.default.array,
    defaultMask: _propTypes.default.string,
    alwaysDefaultMask: _propTypes.default.bool,
    prefix: _propTypes.default.string
  }),
  id: _propTypes.default.string.isRequired,
  defaultCountry: _propTypes.default.string,
  value: _propTypes.default.string,
  inputProps: _propTypes.default.object,
  locale: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  flagsUrl: _propTypes.default.string.isRequired,
  assumeCountry: _propTypes.default.string,
  onChange: _propTypes.default.func,
  normalizer: _propTypes.default.func
};