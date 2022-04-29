import React, { useState } from 'react'
import { TagInputAutocomplete } from './index'
import { DocsPage } from 'storybook/docs-page'

const suggestions = [
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

export default {
  title: 'Form/Input/TagInputAutocomplete',
  component: TagInputAutocomplete,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="TagInputAutocomplete" />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  args: {
    id: 'TagInputAutocomplete',
    initialItemsList: ['European Shorthair', 'Manx', 'Siamese'],
    placeholder: 'Placeholder…',
    disabled: false,
    helpMessage: 'Pressez Entrée ou virgule pour valider l’ajout d’une valeur.',
    size: 'medium',
    addEventKeys: ['Enter', ','],
    removeEventKeys: ['Backspace'],
    suggestions,
    suggestionsNumberA11yMessage: valeur =>
      `Il y a ${valeur} suggestions. Flèches haut/bas pour les dérouler.`,
  },
  argTypes: {
    id: {
      name: 'id',
      control: 'text',
    },
    initialItemsList: {
      name: 'initialItemsList',
      control: 'object',
    },
    placeholder: {
      name: 'placeholder',
      control: 'text',
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
    },
    helpMessage: {
      name: 'helpMessage',
      control: 'text',
    },
    size: {
      name: 'size',
      options: ['small', 'medium', 'large', 'huge', 'giant'],
      control: 'select',
    },
    addEventKeys: {
      name: 'addEventKeys',
      control: 'object',
    },
    removeEventKeys: {
      name: 'removeEventKeys',
      control: 'object',
    },
    suggestions: {
      name: 'suggestions',
      control: 'object',
    },
    suggestionsNumberA11yMessage: {
      name: 'suggestionsNumberA11yMessage',
      control: 'function',
    },
  },
}

export const Default = args => {
  const [tagList, setTagList] = useState([])

  return (
    <div>
      <TagInputAutocomplete
        {...args}
        onChange={list => setTagList(list)}
        helpMessage={
          args.disabled
            ? 'This input is disabled.'
            : 'Press Enter or comma to add an item to the list.'
        }
      />
      <p className="k-u-weight-light">List: {tagList.join(', ')}</p>
    </div>
  )
}
