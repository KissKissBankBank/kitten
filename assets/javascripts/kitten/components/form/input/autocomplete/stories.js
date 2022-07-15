import React from 'react'
import { Autocomplete } from './index'
import { Field, LocationIcon } from 'kitten'
import { DocsPage } from 'storybook/docs-page'
import { Default as TextInputStory } from '../text-input/stories.js'

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

const objectItems = [
  {
    name: 'item1',
    value: 0,
  },
  {
    name: 'item2',
    value: 1,
  },
  {
    name: 'item3',
    value: 2,
  },
  {
    name: 'item4',
    value: 3,
  },
]

export default {
  component: Autocomplete,
  title: 'Form/Input/Autocomplete',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="Autocomplete" />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        <div>{story()}</div>
      </div>
    ),
  ],

  args: {
    ...TextInputStory.args,
    name: 'autocomplete',
    label: 'name',
    disabled: false,
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
  },

  argTypes: {
    ...TextInputStory.argTypes,
    name: {
      name: 'name',
      control: 'text',
    },
    items: {
      name: 'items',
      control: 'object',
    },
    label: {
      name: 'label',
      control: 'string',
    },
    error: {
      name: 'error',
      control: 'boolean',
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
    },
    icon: {
      name: 'icon',
    },
    iconPosition: {
      name: 'iconPosition',
      options: ['left', 'right'],
      control: 'inline-radio',
    },
    updateSuggestionsStrategy: {
      name: 'updateSuggestionsStrategy',
    },
    noResultMessage: {
      name: 'noResultMessage',
      control: 'text',
    },
    shouldShowNoResultMessage: {
      name: 'shouldShowNoResultMessage',
      control: 'boolean',
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
      control: 'boolean',
    },
  },
}

export const Default = args => (
  <Field>
    <Field.Label labelProps={{ htmlFor: 'autocomplete' }}>
      Choose your kitten:
    </Field.Label>

    <Autocomplete
      id="autocomplete"
      placeholder="Search a kitten…"
      items={items}
      {...args}
    />

    <p>🐱 🐱 🐱 🐱 🐱</p>
  </Field>
)

export const WithObjectList = args => (
  <Field>
    <Field.Label labelProps={{ htmlFor: 'autocomplete' }}>
      Choose your kitten:
    </Field.Label>

    <Autocomplete
      id="autocomplete"
      placeholder="Search a kitten…"
      items={objectItems}
      {...args}
    />

    <p>🐱 🐱 🐱 🐱 🐱</p>
  </Field>
)

export const WithIcon = args => (
  <Field>
    <Field.Label labelProps={{ htmlFor: 'autocomplete' }}>
      Choose your kitten:
    </Field.Label>

    <Autocomplete
      id="autocomplete"
      placeholder="Search a kitten…"
      items={items}
      {...args}
    />

    <p>🐱 🐱 🐱 🐱 🐱</p>
  </Field>
)

WithIcon.decorators = Default.decorator
WithIcon.argTypes = Default.argTypes
WithIcon.args = { ...Default.args, icon: <LocationIcon /> }
