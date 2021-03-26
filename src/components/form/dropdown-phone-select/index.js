"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownPhoneSelect = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dropdownSelectWithInput = require("../../../components/form/dropdown-select-with-input");

var _CountryData2 = _interopRequireDefault(require("./data/CountryData.js"));

var _memoize = _interopRequireDefault(require("lodash/memoize"));

var _reduce = _interopRequireDefault(require("lodash/reduce"));

var _startsWith = _interopRequireDefault(require("lodash/startsWith"));

var _usePreviousHook = require("../../../helpers/utils/use-previous-hook");

var _fr = _interopRequireDefault(require("./data/lang/fr"));

var _flagIcon = require("../../../components/icons/flag-icon");

var _this = void 0;

var removeCountryCodeFromFormat = function removeCountryCodeFromFormat(format) {
  return format.replace(/\+[.]+\s/gi, '');
};

var processCountries = function processCountries(_ref) {
  var countries = _ref.countries,
      prefix = _ref.prefix,
      locale = _ref.locale,
      flagsUrl = _ref.flagsUrl;
  return countries.map(function (country) {
    var localizedName = locale === 'fr' ? _fr.default[country.iso2] : country.name;
    return {
      value: country.iso2,
      label: localizedName,
      labelInList: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, localizedName, /*#__PURE__*/_react.default.createElement("span", {
        className: "k-u-color-font2 k-u-margin-left-noneHalf"
      }, prefix, country.countryCode)),
      labelSelected: "".concat(prefix).concat(country.countryCode),
      icon: /*#__PURE__*/_react.default.createElement(_flagIcon.FlagIcon, {
        country: country.iso2,
        countryName: localizedName,
        flagsUrl: flagsUrl
      })
    };
  });
};

var formatNumber = function formatNumber(text, country) {
  if (!country) return text;
  var format = country.format;
  if (!format) return text;
  var pattern = removeCountryCodeFromFormat(format);

  if (!text || text.length === 0) {
    return '';
  }

  if ((text === null || text === void 0 ? void 0 : text.length) < 2 || pattern == '') {
    return text;
  }

  var formattedObject = (0, _reduce.default)(pattern, function (acc, character) {
    if (acc.remainingText.length === 0) {
      return acc;
    }

    if (character !== '.') {
      return {
        formattedText: acc.formattedText + character,
        remainingText: acc.remainingText
      };
    }

    var _acc$remainingText = (0, _toArray2.default)(acc.remainingText),
        head = _acc$remainingText[0],
        tail = _acc$remainingText.slice(1);

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

var getOptions = function getOptions(_ref2) {
  var onlyCountries = _ref2.onlyCountries,
      preferredCountries = _ref2.preferredCountries,
      prefix = _ref2.prefix,
      locale = _ref2.locale,
      flagsUrl = _ref2.flagsUrl;
  var options = [];

  if (preferredCountries) {
    options.push.apply(options, (0, _toConsumableArray2.default)(processCountries({
      countries: preferredCountries,
      prefix: prefix,
      locale: locale,
      flagsUrl: flagsUrl
    })));
    options.push({
      separator: true,
      disabled: true
    });
  }

  onlyCountries && options.push.apply(options, (0, _toConsumableArray2.default)(processCountries({
    countries: onlyCountries,
    prefix: prefix,
    locale: locale,
    flagsUrl: flagsUrl
  })));
  return options;
};

var guessSelectedCountry = (0, _memoize.default)(function (inputNumber, country, onlyCountries) {
  var secondBestGuess = onlyCountries.find(function (o) {
    return o.iso2 == country;
  });
  if (inputNumber.trim() === '') return secondBestGuess;
  var bestGuess = onlyCountries.reduce(function (selectedCountry, country) {
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
  }, _this);
  if (!bestGuess.name) return secondBestGuess;
  return bestGuess;
});

var getCountryObjectFromIso = function getCountryObjectFromIso(country, onlyCountries) {
  var newSelectedCountry;

  if (country.indexOf(0) >= '0' && country.indexOf(0) <= '9') {
    // "country" is a digit
    newSelectedCountry = onlyCountries.find(function (o) {
      return o.dialCode == +country;
    });
  } else {
    // "country" is an iso string
    newSelectedCountry = onlyCountries.find(function (o) {
      return o.iso2 == country;
    });
  }

  return newSelectedCountry;
};

var DropdownPhoneSelect = function DropdownPhoneSelect(_ref3) {
  var id = _ref3.id,
      value = _ref3.value,
      defaultCountry = _ref3.defaultCountry,
      locale = _ref3.locale,
      placeholder = _ref3.placeholder,
      onChange = _ref3.onChange,
      flagsUrl = _ref3.flagsUrl,
      assumeCountry = _ref3.assumeCountry,
      inputProps = _ref3.inputProps,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["id", "value", "defaultCountry", "locale", "placeholder", "onChange", "flagsUrl", "assumeCountry", "inputProps"]);

  // Consts
  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      getCountry = _useState2[0],
      setCountry = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      getFormattedNumber = _useState4[0],
      setFormattedNumber = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      getCaretPosition = _useState6[0],
      setCaretPosition = _useState6[1];

  var _useState7 = (0, _react.useState)(placeholder),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      getInputPlaceholder = _useState8[0],
      setInputPlaceholder = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      getDefaultSelectedValue = _useState10[0],
      setDefaultSelectedValue = _useState10[1];

  var _useState11 = (0, _react.useState)(''),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      getInputNumber = _useState12[0],
      setInputNumber = _useState12[1];

  var getPreviousFormattedNumber = (0, _usePreviousHook.usePrevious)(getFormattedNumber);
  var phoneProps = (0, _extends2.default)({}, DropdownPhoneSelect.defaultProps.phoneProps, props.phoneProps);
  var localization = locale === 'fr' ? _fr.default : [];

  var _CountryData = new _CountryData2.default(phoneProps.enableAreaCodes, phoneProps.enableTerritories, phoneProps.regions, phoneProps.onlyCountries, phoneProps.preferredCountries, phoneProps.excludeCountries, phoneProps.preserveOrder, phoneProps.masks, phoneProps.priority, phoneProps.areaCodes, localization, phoneProps.prefix, phoneProps.defaultMask, phoneProps.alwaysDefaultMask),
      onlyCountries = _CountryData.onlyCountries,
      preferredCountries = _CountryData.preferredCountries;

  var options = getOptions({
    onlyCountries: onlyCountries,
    preferredCountries: preferredCountries,
    prefix: phoneProps.prefix,
    locale: locale,
    flagsUrl: flagsUrl
  }); // Handlers

  var handleInput = function handleInput(event) {
    var currentCountry = getCountryObjectFromIso(getCountry, onlyCountries);
    var value = event.target.value;
    var innerValue = value.replace(/\D/g, '');
    setInputNumber(innerValue);
    if (innerValue.length > 15) return;
    if (innerValue === getFormattedNumber) return;
    var innerFormattedNumber = '';

    if (innerValue.length > 0) {
      innerFormattedNumber = formatNumber(innerValue, currentCountry);
    }

    var caretPosition = event.target.selectionStart;
    var format = currentCountry.format,
        countryCode = currentCountry.countryCode;
    var pattern = removeCountryCodeFromFormat(format);
    var limit = pattern.length > 0 ? pattern.length : 15;

    if (getFormattedNumber.length === limit && innerFormattedNumber.length >= getFormattedNumber.length) {
      return;
    }

    setCaretPosition(caretPosition);
    setFormattedNumber(innerFormattedNumber);
    if (!onChange) return;
    var numberToExport = "".concat(phoneProps.prefix).concat(countryCode, " ").concat(innerFormattedNumber);
    onChange(numberToExport.replace(/[^0-9]+/g, ''), currentCountry, event, numberToExport);
  };

  var handleSelect = function handleSelect(country) {
    if (!country) {
      return setCountry(null);
    }

    var newCountry = getCountryObjectFromIso(country.value, onlyCountries);
    setCountry(newCountry.iso2);
    var placeholderFormat = removeCountryCodeFromFormat(newCountry.format);

    if (placeholderFormat === '') {
      setInputPlaceholder(placeholder);
    } else {
      setInputPlaceholder(placeholderFormat.replace(/\./g, '0'));
    }
  }; // Effects


  (0, _react.useEffect)(function () {
    // Populate form on new props
    var inputNumber = value ? value.replace(/\D/g, '') : '';
    var countryGuess;

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
    } else if (defaultCountry != '') {
      // Default country
      countryGuess = onlyCountries.find(function (o) {
        return o.iso2 == defaultCountry;
      }) || 0;
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
  (0, _react.useEffect)(function () {
    // Adjust input number on country change
    if (getCountry) {
      handleInput({
        target: {
          value: getInputNumber
        }
      });
    }
  }, [getCountry, getInputNumber]);
  (0, _react.useEffect)(function () {
    // Adjust caret position depending on the edit
    if (!getFormattedNumber || !getPreviousFormattedNumber) return;
    var inputElement = document.getElementById("".concat(id, "_element-input"));
    var diff = getFormattedNumber.length - getPreviousFormattedNumber.length;

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
    inputProps: (0, _extends2.default)({
      onChange: handleInput,
      value: getFormattedNumber,
      type: 'tel'
    }, inputProps)
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
  onChange: function onChange() {}
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
  onChange: _propTypes.default.func
};