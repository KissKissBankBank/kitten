import _extends from "@babel/runtime/helpers/extends";
import memoize from 'lodash/memoize';
import reduce from 'lodash/reduce';
import startsWith from 'lodash/startsWith';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { usePrevious } from '../../../../helpers/hooks/use-previous';
import { FlagIcon } from '../../../graphics/icons/flag-icon';
import { DropdownSelectWithInput } from '../dropdown-select-with-input';
import CountryData from './data/CountryData.js';
import locale_fr from './data/lang/fr';

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
    const localizedName = locale === 'fr' ? locale_fr[country.iso2] : country.name;
    return {
      value: country.iso2,
      label: localizedName,
      labelInList: /*#__PURE__*/React.createElement(React.Fragment, null, localizedName, /*#__PURE__*/React.createElement("span", {
        className: "k-u-color-font2 k-u-margin-left-noneHalf"
      }, prefix, country.countryCode)),
      labelSelected: "" + prefix + country.countryCode,
      icon: /*#__PURE__*/React.createElement(FlagIcon, {
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

  const formattedObject = reduce(pattern, (acc, character) => {
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

const guessSelectedCountry = memoize((inputNumber, country, onlyCountries) => {
  const secondBestGuess = onlyCountries.find(o => o.iso2 === country);
  if (inputNumber.trim() === '') return secondBestGuess;
  const bestGuess = onlyCountries.reduce((selectedCountry, country) => {
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
  }, this);
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

export const DropdownPhoneSelect = _ref3 => {
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
  const [getCountry, setCountry] = useState(null);
  const [getFormattedNumber, setFormattedNumber] = useState('');
  const [getCaretPosition, setCaretPosition] = useState(0);
  const [getInputPlaceholder, setInputPlaceholder] = useState(placeholder);
  const [getDefaultSelectedValue, setDefaultSelectedValue] = useState(null);
  const [getInputNumber, setInputNumber] = useState('');
  const getPreviousFormattedNumber = usePrevious(getFormattedNumber);
  const phoneProps = { ...DropdownPhoneSelect.defaultProps.phoneProps,
    ...props.phoneProps
  };
  const localization = locale === 'fr' ? locale_fr : [];
  const {
    onlyCountries,
    preferredCountries
  } = new CountryData(phoneProps.enableAreaCodes, phoneProps.enableTerritories, phoneProps.regions, phoneProps.onlyCountries, phoneProps.preferredCountries, phoneProps.excludeCountries, phoneProps.preserveOrder, phoneProps.masks, phoneProps.priority, phoneProps.areaCodes, localization, phoneProps.prefix, phoneProps.defaultMask, phoneProps.alwaysDefaultMask);
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


  useEffect(() => {
    // Populate form on new props
    let inputNumber = value ? value.replace(/\D/g, '') : '';
    let countryGuess;

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
  useEffect(() => {
    // Adjust input number on country change
    if (getCountry) {
      handleInput({
        target: {
          value: getInputNumber
        }
      });
    }
  }, [getCountry, getInputNumber]);
  useEffect(() => {
    // Adjust caret position depending on the edit
    if (!getFormattedNumber || !getPreviousFormattedNumber) return;
    const inputElement = document.getElementById(id + "_element-input");
    const diff = getFormattedNumber.length - getPreviousFormattedNumber.length;

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
    inputProps: {
      onChange: handleInput,
      value: getFormattedNumber,
      type: 'tel',
      ...inputProps
    }
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
  onChange: () => {},
  normalizer: value => value
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
  onChange: PropTypes.func,
  normalizer: PropTypes.func
};