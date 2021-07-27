import React from 'react'
import { Autocomplete } from './index'
import { Field, LocationIcon } from '../../..'

const items = [
  'Abyssinian',
  'Aegean',
  'American Bobtail',
  'American Curl',
  'American Shorthair',
  'American Wirehair',
  'Aphrodite Giant',
  'Arabian Mau',
  'Asian Semi-longhair',
  'Asian',
  'Australian Mist',
  'Balinese',
  'Bambino',
  'Bengal',
  'Birman',
  'Bombay',
  'Brazilian Shorthair',
  'British Angora',
  'British Longhair',
  'British Semi-longhair',
  'British Shorthair',
  'Burmese',
  'Burmilla',
  'California Spangled',
  'Chantilly-Tiffany',
  'Chartreux',
  'Chausie',
  'Cheetoh',
  'Chinese Li Hua',
  'Classic Siamese',
  'Colorpoint Longhair',
  'Colorpoint Persian',
  'Colorpoint Shorthair',
  'Cornish Rex',
  'Cymric',
  'Cyprus',
  'Devon Rex',
  'Don Sphynx',
  'Donskoy',
  'Dragon Li',
  'Dwelf',
  'Egyptian Mau',
  'European Shorthair',
  'Exotic Shorthair',
  'Foldex',
  'Foreign Longhair',
  'German Rex',
  'Havana Brown',
  'Highlander',
  'Himalayan',
  'Japanese Bobtail',
  'Javanese',
  'Karelian Bobtail',
  'Khao Manee',
  'Korat',
  'Korean Bobtail',
  'Korn Ja',
  'Kuril Islands Bobtail',
  'Kurilian Bobtail',
  'LaPerm',
  'Liebling',
  'Longhaired Manx',
  'Lykoi',
  'Maine Coon',
  'Mandarin',
  'Manx Longhair',
  'Manx',
  'Mekong Bobtail',
  'Minskin',
  'Munchkin',
  'Napoleon',
  'Nebelung',
  'Neva Masquerade',
  'Norwegian Forest Cat',
  'Ocicat',
  'Ojos Azules',
  'Old-style Siamese',
  'Oregon Rex',
  'Oriental Bicolor',
  'Oriental Longhair',
  'Oriental Shorthair',
  'Persian',
  'Peterbald',
  'Pixie-bob',
  'Raas',
  'Ragamuffin',
  'Ragdoll',
  'Russian Black',
  'Russian Blue',
  'Russian Tabby',
  'Russian White',
  'Sam Sawet',
  'Savannah',
  'Scottish Fold',
  'Selkirk Rex',
  'Serengeti',
  'Serrade petit',
  'Siamese',
  'Siberian Forest Cat',
  'Siberian',
  'Singapura',
  'Snowshoe',
  'Sokoke',
  'Somali',
  'Sphynx',
  'Suphalak',
  'Thai Lilac',
  'Thai',
  'Tonkinese',
  'Toyger',
  'Traditional Siamese',
  'Turkish Angora',
  'Turkish Van',
  'Ukrainian Levkoy',
  'Wichien Maat',
  'Wila Krungthep',
  'York Chocolate',
]

export const Default = (args) => (
    <Field>
      <Field.Label labelProps={{ htmlFor: 'autocomplete' }}>
        Choose your kitten:
      </Field.Label>

      <Autocomplete
        id="autocomplete"
        placeholder="Search a kitten…"
        {...args}
      />

      <p>🐱 🐱 🐱 🐱 🐱</p>
    </Field>
)

export const WithIcon = (args) => (
    <Field>
      <Field.Label labelProps={{ htmlFor: 'autocomplete' }}>
        Choose your kitten:
      </Field.Label>

      <Autocomplete
        id="autocomplete"
        placeholder="Search a kitten…"
        {...args}
      />

      <p>🐱 🐱 🐱 🐱 🐱</p>
    </Field>
)

const storyDecorator = Story => (
  <div className="story-Container story-Grid story-Grid--large">
    <div>
      <Story />
    </div>
  </div>
)

const args = {
  name: 'autocomplete',
  items,
  error: false,
  icon: null,
  iconPosition: 'left',
  updateSuggestionsStrategy: null,
  noResultMessage: 'No result',
  shouldShowNoResultMessage: true,
  onChange: () => {},
  onBlur: () => {},
  onKeyDown: () => {},
  onSelect: () => {},
  isLoading: false,
}

const argTypes = {
  name: {
    name: 'name',
    control: { type: 'text'},
  },
  items: {
    name: 'items',
    control: { type: 'object' },
  },
  error: {
    name: 'error',
    control: { type: 'boolean' },
  },
  icon: {
    name: 'icon',
  },
  iconPosition: {
    name: 'iconPosition',
    options: ['left', 'right'],
    control: { type: 'inline-radio' }
  },
  updateSuggestionsStrategy: {
    name: 'updateSuggestionsStrategy',
  },
  noResultMessage: {
    name: 'noResultMessage',
    control: { type: 'text' },
  },
  shouldShowNoResultMessage:{
    name: 'shouldShowNoResultMessage',
    control: { type: 'boolean' },
  },
  onChange: {
    name: 'onChange',

  },
  onBlur: {
    name: 'onBlur',

  },
  onKeyDown: {
    name: 'onKeyDown',

  },
  onSelect: {
    name: 'onSelect',

  },
  isLoading: {
    name: 'isLoading',
    control: { type: 'boolean' },
  },
}

Default.decorators = [storyDecorator]
Default.argTypes = argTypes
Default.args = args

WithIcon.decorators = [storyDecorator]
WithIcon.argTypes = argTypes
WithIcon.args = {...args, icon: <LocationIcon />}
