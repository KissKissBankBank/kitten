import React, { useState, useEffect } from 'react'
import { DropdownSelectWithInput } from '../../../components/form/dropdown-select-with-input'
import CountryData from './data/CountryData.js'
import { reduce, startsWith, memoize } from 'lodash'
import { usePrevious } from '../../../helpers/utils/use-previous-hook'
import locale_fr from './data/lang/fr'
import { FlagIcon } from '../../../components/icons/flag-icon'

const removeCountryCodeFromFormat = format => {
  const patternArray = format.split(' ')
  patternArray.shift()
  return patternArray.join(' ')
}

const processCountries = ({ countries, prefix, locale, flagsUrl }) => {
  return countries.map(country => {
    const localizedName =
      locale === 'fr' ? locale_fr[country.iso2] : country.name

    return {
      value: country.iso2,
      label: localizedName,
      labelInList: (
        <>
          {localizedName}
          <span className="k-u-color-font2 k-u-margin-left-noneHalf">
            {prefix}
            {country.countryCode}
          </span>
        </>
      ),
      labelSelected: `${prefix}${country.countryCode}`,
      icon: (
        <FlagIcon
          country={country.iso2}
          countryName={localizedName}
          flagsUrl={flagsUrl}
        />
      ),
    }
  })
}

const formatNumber = (text, country) => {
  if (!country) return text

  const { format } = country

  if (!format) return text

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

const getOptions = ({
  onlyCountries,
  preferredCountries,
  prefix,
  locale,
  flagsUrl,
}) => {
  const options = []
  if (preferredCountries) {
    options.push(
      ...processCountries({
        countries: preferredCountries,
        prefix,
        locale,
        flagsUrl,
      }),
    )
    options.push({
      separator: true,
      disabled: true,
    })
  }

  onlyCountries &&
    options.push(
      ...processCountries({
        countries: onlyCountries,
        prefix,
        locale,
        flagsUrl,
      }),
    )

  return options
}

const guessSelectedCountry = memoize((inputNumber, country, onlyCountries) => {
  const secondBestGuess = onlyCountries.find(o => o.iso2 == country)
  if (inputNumber.trim() === '') return secondBestGuess

  const bestGuess = onlyCountries.reduce(
    (selectedCountry, country) => {
      if (startsWith(inputNumber, country.dialCode)) {
        if (country.dialCode.length > selectedCountry.dialCode.length) {
          return country
        }
        if (
          country.dialCode.length === selectedCountry.dialCode.length &&
          country.priority < selectedCountry.priority
        ) {
          return country
        }
      }
      return selectedCountry
    },
    { dialCode: '', priority: 10001 },
    this,
  )

  if (!bestGuess.name) return secondBestGuess
  return bestGuess
})

const getCountryObjectFromIso = (country, onlyCountries) => {
  let newSelectedCountry
  if (country.indexOf(0) >= '0' && country.indexOf(0) <= '9') {
    // digit
    newSelectedCountry = onlyCountries.find(o => o.dialCode == +country)
  } else {
    newSelectedCountry = onlyCountries.find(o => o.iso2 == country)
  }
  return newSelectedCountry
}

export const DropdownPhoneSelect = ({
  id,
  value,
  country,
  locale,
  placeholder,
  onChange,
  flagsUrl,
  assumeCountry,
  ...props
}) => {
  // Consts

  const [getCountry, setCountry] = useState(null)
  const [getFormattedNumber, setFormattedNumber] = useState('')
  const [getCaretPosition, setCaretPosition] = useState(0)
  const [getInputPlaceholder, setInputPlaceholder] = useState(placeholder)
  const [getDefaultSelectedValue, setDefaultSelectedValue] = useState(null)
  const [getInputNumber, setInputNumber] = useState(null)
  const getPreviousFormattedNumber = usePrevious(getFormattedNumber)

  const phoneProps = {
    ...DropdownPhoneSelect.defaultProps.phoneProps,
    ...props.phoneProps,
  }

  const localization = locale === 'fr' ? locale_fr : []

  const { onlyCountries, preferredCountries } = new CountryData(
    phoneProps.enableAreaCodes,
    phoneProps.enableTerritories,
    phoneProps.regions,
    phoneProps.onlyCountries,
    phoneProps.preferredCountries,
    phoneProps.excludeCountries,
    phoneProps.preserveOrder,
    phoneProps.masks,
    phoneProps.priority,
    phoneProps.areaCodes,
    localization,
    phoneProps.prefix,
    phoneProps.defaultMask,
    phoneProps.alwaysDefaultMask,
  )

  const options = getOptions({
    onlyCountries,
    preferredCountries,
    prefix: phoneProps.prefix,
    locale,
    flagsUrl,
  })

  // Handlers

  const handleInput = event => {
    const currentCountry = getCountryObjectFromIso(getCountry, onlyCountries)
    const { value } = event.target
    const innerValue = value.replace(/\D/g, '')

    setInputNumber(innerValue)

    if (value.replace(/\D/g, '').length > 15) return
    if (innerValue === getFormattedNumber) return

    let innerFormattedNumber = ''
    if (innerValue.length > 0) {
      innerFormattedNumber = formatNumber(innerValue, currentCountry)
    }

    const caretPosition = event.target.selectionStart

    const { format, countryCode } = currentCountry
    const pattern = removeCountryCodeFromFormat(format)
    const limit = pattern.length

    if (
      getFormattedNumber.length === limit &&
      innerFormattedNumber.length >= getFormattedNumber.length
    ) {
      return
    }

    setCaretPosition(caretPosition)
    setFormattedNumber(innerFormattedNumber)

    const numberToExport = `${phoneProps.prefix}${countryCode} ${innerFormattedNumber}`

    if (!!onChange) {
      onChange(
        numberToExport.replace(/[^0-9]+/g, ''),
        currentCountry,
        event,
        numberToExport,
      )
    }
  }

  const handleSelect = country => {
    if (!country) {
      return setCountry(null)
    }
    const newCountry = getCountryObjectFromIso(country.value, onlyCountries)

    setCountry(newCountry.iso2)

    const placeholderFormat = removeCountryCodeFromFormat(newCountry.format)
    setInputPlaceholder(placeholderFormat.replace(/\./g, '0'))
  }

  // Effects
  useEffect(() => {
    if (country) {
      const newCountry = getCountryObjectFromIso(country, onlyCountries)

      if (newCountry && newCountry.iso2) {
        setCountry(newCountry.iso2)
        setDefaultSelectedValue(newCountry.iso2)
      }
    }

    if (value) {
      const inputNumber = value ? value.replace(/\D/g, '') : ''

      let countryGuess
      if (inputNumber.length > 1) {
        // Country detect by phone
        countryGuess = guessSelectedCountry(
          inputNumber.substring(0, 6),
          country,
          onlyCountries,
        )
        if (!countryGuess) {
          countryGuess = getCountryObjectFromIso(assumeCountry, onlyCountries)
        } else {
          countryGuess = 0
        }
      } else if (country != '') {
        // Default country
        countryGuess = onlyCountries.find(o => o.iso2 == country) || 0
      } else {
        // Empty params
        countryGuess = 0
      }

      if (countryGuess !== 0) {
        setCountry(countryGuess.iso2)
        setDefaultSelectedValue(countryGuess.iso2)
        setInputNumber(inputNumber)
      }
    }
  }, [])

  useEffect(() => {
    if (getCountry) {
      handleInput({ target: { value: getInputNumber } })
    }
  }, [getCountry, getInputNumber])

  useEffect(() => {
    // Adjust caret position depending on the edit
    if (!getFormattedNumber || !getPreviousFormattedNumber) return

    const inputElement = document.getElementById(`${id}_element-input`)

    const diff = getFormattedNumber.length - getPreviousFormattedNumber.length

    if (diff < 0 || getCaretPosition < getFormattedNumber.length - 1) {
      inputElement.setSelectionRange(getCaretPosition, getCaretPosition)
    }
  }, [getFormattedNumber])

  return (
    <DropdownSelectWithInput
      {...props}
      id={id}
      resetOnBackspace
      highlightOptionBox={false}
      placeholder={placeholder}
      options={options}
      inputPlaceholder={getInputPlaceholder}
      onChange={handleSelect}
      defaultSelectedValue={getDefaultSelectedValue}
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
    defaultMask: '. .. .. .. ..',
    alwaysDefaultMask: false,
    prefix: '+',
  },

  id: 'dropdown-phone-select',
  inputProps: {},
  locale: 'en',
  placeholder: 'Telephone',
  flagsUrl: './flags.png',
  assumeCountry: 'fr',

  onChange: () => {},
}
