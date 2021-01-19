import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _toArray from "@babel/runtime/helpers/esm/toArray";

var _this = this;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DropdownSelectWithInput } from '../../../components/form/dropdown-select-with-input';
import CountryData from './data/CountryData.js';
import { reduce, startsWith, memoize } from 'lodash';
import { usePrevious } from '../../../helpers/utils/use-previous-hook';
import locale_fr from './data/lang/fr';
import { FlagIcon } from '../../../components/icons/flag-icon';

var removeCountryCodeFromFormat = function removeCountryCodeFromFormat(format) {
  return format.replace(/\+[.]+\s/gi, '');
};

var processCountries = function processCountries(_ref) {
  var countries = _ref.countries,
      prefix = _ref.prefix,
      locale = _ref.locale,
      flagsUrl = _ref.flagsUrl;
  return countries.map(function (country) {
    var localizedName = locale === 'fr' ? locale_fr[country.iso2] : country.name;
    return {
      value: country.iso2,
      label: localizedName,
      labelInList: /*#__PURE__*/React.createElement(React.Fragment, null, localizedName, /*#__PURE__*/React.createElement("span", {
        className: "k-u-color-font2 k-u-margin-left-noneHalf"
      }, prefix, country.countryCode)),
      labelSelected: "".concat(prefix).concat(country.countryCode),
      icon: /*#__PURE__*/React.createElement(FlagIcon, {
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

  var formattedObject = reduce(pattern, function (acc, character) {
    if (acc.remainingText.length === 0) {
      return acc;
    }

    if (character !== '.') {
      return {
        formattedText: acc.formattedText + character,
        remainingText: acc.remainingText
      };
    }

    var _acc$remainingText = _toArray(acc.remainingText),
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
    options.push.apply(options, _toConsumableArray(processCountries({
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

  onlyCountries && options.push.apply(options, _toConsumableArray(processCountries({
    countries: onlyCountries,
    prefix: prefix,
    locale: locale,
    flagsUrl: flagsUrl
  })));
  return options;
};

var guessSelectedCountry = memoize(function (inputNumber, country, onlyCountries) {
  var secondBestGuess = onlyCountries.find(function (o) {
    return o.iso2 == country;
  });
  if (inputNumber.trim() === '') return secondBestGuess;
  var bestGuess = onlyCountries.reduce(function (selectedCountry, country) {
    if (startsWith(inputNumber, country.dialCode)) {
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

export var DropdownPhoneSelect = function DropdownPhoneSelect(_ref3) {
  var id = _ref3.id,
      value = _ref3.value,
      defaultCountry = _ref3.defaultCountry,
      locale = _ref3.locale,
      placeholder = _ref3.placeholder,
      onChange = _ref3.onChange,
      flagsUrl = _ref3.flagsUrl,
      assumeCountry = _ref3.assumeCountry,
      inputProps = _ref3.inputProps,
      props = _objectWithoutProperties(_ref3, ["id", "value", "defaultCountry", "locale", "placeholder", "onChange", "flagsUrl", "assumeCountry", "inputProps"]);

  // Consts
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      getCountry = _useState2[0],
      setCountry = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      getFormattedNumber = _useState4[0],
      setFormattedNumber = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      getCaretPosition = _useState6[0],
      setCaretPosition = _useState6[1];

  var _useState7 = useState(placeholder),
      _useState8 = _slicedToArray(_useState7, 2),
      getInputPlaceholder = _useState8[0],
      setInputPlaceholder = _useState8[1];

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      getDefaultSelectedValue = _useState10[0],
      setDefaultSelectedValue = _useState10[1];

  var _useState11 = useState(''),
      _useState12 = _slicedToArray(_useState11, 2),
      getInputNumber = _useState12[0],
      setInputNumber = _useState12[1];

  var getPreviousFormattedNumber = usePrevious(getFormattedNumber);

  var phoneProps = _extends({}, DropdownPhoneSelect.defaultProps.phoneProps, props.phoneProps);

  var localization = locale === 'fr' ? locale_fr : [];

  var _CountryData = new CountryData(phoneProps.enableAreaCodes, phoneProps.enableTerritories, phoneProps.regions, phoneProps.onlyCountries, phoneProps.preferredCountries, phoneProps.excludeCountries, phoneProps.preserveOrder, phoneProps.masks, phoneProps.priority, phoneProps.areaCodes, localization, phoneProps.prefix, phoneProps.defaultMask, phoneProps.alwaysDefaultMask),
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


  useEffect(function () {
    // Populate form on new props
    var inputNumber = value ? value.replace(/\D/g, '') : '';
    var countryGuess;

    if (inputNumber.length > 1) {
      if (startsWith(inputNumber, '0') && !startsWith(inputNumber, '00')) {
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
  useEffect(function () {
    // Adjust input number on country change
    if (getCountry) {
      handleInput({
        target: {
          value: getInputNumber
        }
      });
    }
  }, [getCountry, getInputNumber]);
  useEffect(function () {
    // Adjust caret position depending on the edit
    if (!getFormattedNumber || !getPreviousFormattedNumber) return;
    var inputElement = document.getElementById("".concat(id, "_element-input"));
    var diff = getFormattedNumber.length - getPreviousFormattedNumber.length;

    if (diff < 0 || getCaretPosition < getFormattedNumber.length - 1) {
      inputElement.setSelectionRange(getCaretPosition, getCaretPosition);
    }
  }, [getFormattedNumber]);
  return /*#__PURE__*/React.createElement(DropdownSelectWithInput, _extends({}, props, {
    id: id,
    resetOnBackspace: true,
    highlightOptionBox: false,
    placeholder: placeholder,
    options: options,
    inputPlaceholder: getInputPlaceholder,
    onChange: handleSelect,
    defaultSelectedValue: getDefaultSelectedValue,
    inputProps: _extends({
      onChange: handleInput,
      value: getFormattedNumber,
      type: 'tel'
    }, inputProps)
  }));
};
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
  phoneProps: PropTypes.shape({
    onlyCountries: PropTypes.array,
    preferredCountries: PropTypes.array,
    excludeCountries: PropTypes.array,
    disabled: PropTypes.bool,
    enableAreaCodes: PropTypes.bool,
    enableTerritories: PropTypes.bool,
    regions: PropTypes.string,
    masks: PropTypes.string,
    priority: PropTypes.string,
    areaCodes: PropTypes.string,
    preserveOrder: PropTypes.array,
    defaultMask: PropTypes.string,
    alwaysDefaultMask: PropTypes.bool,
    prefix: PropTypes.string
  }),
  id: PropTypes.string.isRequired,
  defaultCountry: PropTypes.string,
  value: PropTypes.string,
  inputProps: PropTypes.object,
  locale: PropTypes.string,
  placeholder: PropTypes.string,
  flagsUrl: PropTypes.string.isRequired,
  assumeCountry: PropTypes.string,
  onChange: PropTypes.func
};