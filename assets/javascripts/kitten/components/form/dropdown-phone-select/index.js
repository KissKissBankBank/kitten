import React, { useState, useEffect } from 'react'
import { DropdownSelectWithInput } from '../../../components/form/dropdown-select-with-input'
import CountryData from './data/CountryData.js'
import reduce from 'lodash/reduce'
import { usePrevious } from '../../../helpers/utils/use-previous-hook'

const FlagIcon = ({ country }) => {
  return <span>{country}</span>
}

const removeCountryCodeFromFormat = format => {
  const patternArray = format.split(' ')
  patternArray.shift()
  return patternArray.join(' ')
}

const processCountries = (countries, prefix) => {
  return countries.map(country => {
    return {
      value: country,
      label: country.name,
      labelInList: `${country.name} ${prefix}${country.countryCode}`,
      labelSelected: `${prefix}${country.countryCode}`,
      icon: <FlagIcon country={country.iso2} />,
    }
  })
}

export const DropdownPhoneSelect = ({ onChange, ...props }) => {
  const [getCountry, setCountry] = useState(null)
  const [getFormattedNumber, setFormattedNumber] = useState('')
  const [getCaretPosition, setCaretPosition] = useState(0)
  const getPreviousFormattedNumber = usePrevious(getFormattedNumber)

  const { onlyCountries, preferredCountries } = new CountryData(
    props.enableAreaCodes,
    props.enableTerritories,
    props.regions,
    props.onlyCountries,
    props.preferredCountries,
    props.excludeCountries,
    props.preserveOrder,
    props.masks,
    props.priority,
    props.areaCodes,
    props.localization,
    props.prefix,
    props.defaultMask,
    props.alwaysDefaultMask,
  )

  const formatNumber = (text, country) => {
    if (!country) return text

    const { format } = country

    const pattern = removeCountryCodeFromFormat(format)

    if (!text || text.length === 0) {
      return ''
    }

    if ((text && text.length < 2) || !pattern) {
      return text
    }

    const formattedObject = reduce(
      pattern,
      (acc, character) => {
        if (acc.remainingText.length === 0) {
          return acc
        }

        if (character !== '.') {
          return {
            formattedText: acc.formattedText + character,
            remainingText: acc.remainingText,
          }
        }

        const [head, ...tail] = acc.remainingText

        return {
          formattedText: acc.formattedText + head,
          remainingText: tail,
        }
      },
      {
        formattedText: '',
        remainingText: text.split(''),
      },
    )

    const formattedNumber = formattedObject.formattedText

    return formattedNumber
  }

  const handleInput = event => {
    const { value } = event.target
    const innerValue = value.replace(/\D/g, '')

    if (value.replace(/\D/g, '').length > 15) return
    if (innerValue === getFormattedNumber) return

    let innerFormattedNumber = ''
    if (innerValue.length > 0) {
      innerFormattedNumber = formatNumber(innerValue, getCountry)
    }

    const caretPosition = event.target.selectionStart

    const { format } = getCountry
    const pattern = removeCountryCodeFromFormat(format)
    const limit = pattern.length

    if (
      getFormattedNumber.length === limit &&
      innerFormattedNumber.length >= getFormattedNumber.length
    )
      return

    setCaretPosition(caretPosition)
    setFormattedNumber(innerFormattedNumber)

    if (!!onChange) {
      onChange(
        innerFormattedNumber.replace(/[^0-9]+/g, ''),
        getCountry,
        event,
        innerFormattedNumber,
      )
    }
  }

  useEffect(() => {
    if (!getFormattedNumber || !getPreviousFormattedNumber) return

    const inputElement = document.getElementById(`${props.id}_element-input`)

    const diff = getFormattedNumber.length - getPreviousFormattedNumber.length

    if (diff < 0 || getCaretPosition < getFormattedNumber.length - 1) {
      inputElement.setSelectionRange(getCaretPosition, getCaretPosition)
    }
  }, [getFormattedNumber])

  const handleSelect = country => {
    setCountry(country ? country.value : null)
  }

  const options = []

  preferredCountries &&
    options.push(...processCountries(preferredCountries, props.prefix))
  options.push({
    separator: true,
    disabled: true,
  })
  onlyCountries &&
    options.push(...processCountries(onlyCountries, props.prefix))

  return (
    <DropdownSelectWithInput
      {...props}
      resetOnBackspace
      highlightOptionBox={false}
      inputPlaceholder={props.placeholder}
      options={options}
      onChange={handleSelect}
      inputProps={{
        onChange: handleInput,
        value: getFormattedNumber,
      }}
    />
  )
}

DropdownPhoneSelect.defaultProps = {
  country: '',
  value: '',

  onlyCountries: [],
  preferredCountries: [],
  excludeCountries: [],

  placeholder: '01 23 45 67 89',
  flagsImagePath: './flags.png',
  disabled: false,

  autoFormat: true,
  enableAreaCodes: false,
  enableTerritories: false,
  disableCountryCode: false,
  disableDropdown: false,
  enableLongNumbers: false,
  countryCodeEditable: true,
  enableSearch: false,
  disableSearchIcon: false,
  disableInitialCountryGuess: false,
  disableCountryGuess: false,

  regions: '',

  inputProps: {},
  localization: {},

  masks: null,
  priority: null,
  areaCodes: null,

  preserveOrder: [],

  defaultMask: '... ... ... ... ..', // prefix+dialCode+' '+defaultMask
  alwaysDefaultMask: false,
  prefix: '+',
  copyNumbersOnly: true,
  renderStringAsFlag: '',
  autocompleteSearch: false,
  jumpCursorToEnd: true,
  enableAreaCodeStretch: false,
  enableClickOutside: true,
  showDropdown: false,

  isValid: true, // (value, selectedCountry, onlyCountries, hiddenAreaCodes) => true | false | 'Message'
  defaultErrorMessage: '',
  specialLabel: 'Phone',

  onEnterKeyPress: null, // null or function

  // OWN FUNCIONS

  id: 'dropdown-phone-select',
}
