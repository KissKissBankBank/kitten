import defaultProps from 'kitten/hoc/default-props'
import React from 'react'
import Select from 'react-select'

// Simple select
const simpleSelectProps = {
  name: 'locale',
  options: [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
    { value: 'es', label: 'Español' },
  ],
  clearable: false,
  searchable: false,
  placeholder: false,
  multi: false,
  value: 'fr',
}

const KarlSimpleSelect = defaultProps(Select, simpleSelectProps)

// Select with placeholder
const placeholderSelectProps = {
  name: 'locale',
  options: [
    { value: 'de', label: 'Deutsch' },
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'it', label: 'Italiano' },
    { value: 'nl', label: 'Nederlands' },
    { value: 'sv', label: 'Svenska' },
    { value: 'no', label: 'Norsk' },
    { value: 'is', label: 'Íslenska' },
    { value: 'ca', label: 'Català' },
    { value: 'ki', label: 'Gĩkũyũ' },
    { value: 'se', label: 'Davvisámegiella' },
    { value: 'av', label: 'авар мацӀ' },
    { value: 'yi', label: 'ייִדיש' },
    { value: 'bh', label: 'भोजपुरी' },
    { value: 'hi', label: 'हिन्दी' },
    { value: 'cr', label: 'ᓀᐦᐃᔭᐍᐏᐣ' },
  ],
  clearable: false,
  searchable: false,
  multi: false,
  placeholder: 'Language…',
  value: null,
}

const KarlPlaceholderSelect = defaultProps(Select, placeholderSelectProps)

export { KarlSimpleSelect, KarlPlaceholderSelect }
