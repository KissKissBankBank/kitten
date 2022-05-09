import React, { useState } from 'react'
import { TagInputAutocomplete } from './index'
import { DocsPage } from 'storybook/docs-page'

const suggestions = [
  'Chat de gouttière',
  {
    searchableString: 'Abyssinian',
    displayNode: 'Abyssinian (16)',
  },
  {
    searchableString: 'Aegean',
    displayNode: 'Aegean (13)',
  },
  {
    searchableString: 'American Bobtail',
    displayNode: 'American Bobtail (2)',
  },
  {
    searchableString: 'American Curl',
    displayNode: 'American Curl (20)',
  },
  {
    searchableString: 'American Shorthair',
    displayNode: 'American Shorthair (13)',
  },
  {
    searchableString: 'American Wirehair',
    displayNode: 'American Wirehair (5)',
  },
  {
    searchableString: 'Aphrodite Giant',
    displayNode: 'Aphrodite Giant (13)',
  },
  {
    searchableString: 'Arabian Mau',
    displayNode: 'Arabian Mau (10)',
  },
  {
    searchableString: 'Asian Semi-longhair',
    displayNode: 'Asian Semi-longhair (2)',
  },
  {
    searchableString: 'Asian',
    displayNode: 'Asian (9)',
  },
  {
    searchableString: 'Australian Mist',
    displayNode: 'Australian Mist (9)',
  },
  {
    searchableString: 'Balinese',
    displayNode: 'Balinese (13)',
  },
  {
    searchableString: 'Bambino',
    displayNode: 'Bambino (2)',
  },
  {
    searchableString: 'Bengal',
    displayNode: 'Bengal (9)',
  },
  {
    searchableString: 'Birman',
    displayNode: 'Birman (17)',
  },
  {
    searchableString: 'Bombay',
    displayNode: 'Bombay (12)',
  },
  {
    searchableString: 'Brazilian Shorthair',
    displayNode: 'Brazilian Shorthair (15)',
  },
  {
    searchableString: 'British Angora',
    displayNode: 'British Angora (15)',
  },
  {
    searchableString: 'British Longhair',
    displayNode: 'British Longhair (3)',
  },
  {
    searchableString: 'British Semi-longhair',
    displayNode: 'British Semi-longhair (7)',
  },
  {
    searchableString: 'British Shorthair',
    displayNode: 'British Shorthair (13)',
  },
  {
    searchableString: 'Burmese',
    displayNode: 'Burmese (7)',
  },
  {
    searchableString: 'Burmilla',
    displayNode: 'Burmilla (5)',
  },
  {
    searchableString: 'California Spangled',
    displayNode: 'California Spangled (7)',
  },
  {
    searchableString: 'Chantilly-Tiffany',
    displayNode: 'Chantilly-Tiffany (13)',
  },
  {
    searchableString: 'Chartreux',
    displayNode: 'Chartreux (19)',
  },
  {
    searchableString: 'Chausie',
    displayNode: 'Chausie (5)',
  },
  {
    searchableString: 'Cheetoh',
    displayNode: 'Cheetoh (15)',
  },
  {
    searchableString: 'Chinese Li Hua',
    displayNode: 'Chinese Li Hua (14)',
  },
  {
    searchableString: 'Classic Siamese',
    displayNode: 'Classic Siamese (2)',
  },
  {
    searchableString: 'Colorpoint Longhair',
    displayNode: 'Colorpoint Longhair (2)',
  },
  {
    searchableString: 'Colorpoint Persian',
    displayNode: 'Colorpoint Persian (20)',
  },
  {
    searchableString: 'Colorpoint Shorthair',
    displayNode: 'Colorpoint Shorthair (2)',
  },
  {
    searchableString: 'Cornish Rex',
    displayNode: 'Cornish Rex (10)',
  },
  {
    searchableString: 'Cymric',
    displayNode: 'Cymric (3)',
  },
  {
    searchableString: 'Cyprus',
    displayNode: 'Cyprus (6)',
  },
  {
    searchableString: 'Devon Rex',
    displayNode: 'Devon Rex (0)',
  },
  {
    searchableString: 'Don Sphynx',
    displayNode: 'Don Sphynx (12)',
  },
  {
    searchableString: 'Donskoy',
    displayNode: 'Donskoy (12)',
  },
  {
    searchableString: 'Dragon Li',
    displayNode: 'Dragon Li (8)',
  },
  {
    searchableString: 'Dwelf',
    displayNode: 'Dwelf (2)',
  },
  {
    searchableString: 'Egyptian Mau',
    displayNode: 'Egyptian Mau (4)',
  },
  {
    searchableString: 'European Shorthair',
    displayNode: 'European Shorthair (5)',
  },
  {
    searchableString: 'Exotic Shorthair',
    displayNode: 'Exotic Shorthair (2)',
  },
  {
    searchableString: 'Foldex',
    displayNode: 'Foldex (6)',
  },
  {
    searchableString: 'Foreign Longhair',
    displayNode: 'Foreign Longhair (11)',
  },
  {
    searchableString: 'German Rex',
    displayNode: 'German Rex (15)',
  },
  {
    searchableString: 'Havana Brown',
    displayNode: 'Havana Brown (20)',
  },
  {
    searchableString: 'Highlander',
    displayNode: 'Highlander (2)',
  },
  {
    searchableString: 'Himalayan',
    displayNode: 'Himalayan (6)',
  },
  {
    searchableString: 'Japanese Bobtail',
    displayNode: 'Japanese Bobtail (12)',
  },
  {
    searchableString: 'Javanese',
    displayNode: 'Javanese (14)',
  },
  {
    searchableString: 'Karelian Bobtail',
    displayNode: 'Karelian Bobtail (15)',
  },
  {
    searchableString: 'Khao Manee',
    displayNode: 'Khao Manee (10)',
  },
  {
    searchableString: 'Korat',
    displayNode: 'Korat (8)',
  },
  {
    searchableString: 'Korean Bobtail',
    displayNode: 'Korean Bobtail (14)',
  },
  {
    searchableString: 'Korn Ja',
    displayNode: 'Korn Ja (4)',
  },
  {
    searchableString: 'Kuril Islands Bobtail',
    displayNode: 'Kuril Islands Bobtail (10)',
  },
  {
    searchableString: 'Kurilian Bobtail',
    displayNode: 'Kurilian Bobtail (12)',
  },
  {
    searchableString: 'LaPerm',
    displayNode: 'LaPerm (3)',
  },
  {
    searchableString: 'Liebling',
    displayNode: 'Liebling (16)',
  },
  {
    searchableString: 'Longhaired Manx',
    displayNode: 'Longhaired Manx (19)',
  },
  {
    searchableString: 'Lykoi',
    displayNode: 'Lykoi (6)',
  },
  {
    searchableString: 'Maine Coon',
    displayNode: 'Maine Coon (9)',
  },
  {
    searchableString: 'Mandarin',
    displayNode: 'Mandarin (16)',
  },
  {
    searchableString: 'Manx Longhair',
    displayNode: 'Manx Longhair (6)',
  },
  {
    searchableString: 'Manx',
    displayNode: 'Manx (19)',
  },
  {
    searchableString: 'Mekong Bobtail',
    displayNode: 'Mekong Bobtail (4)',
  },
  {
    searchableString: 'Minskin',
    displayNode: 'Minskin (6)',
  },
  {
    searchableString: 'Munchkin',
    displayNode: 'Munchkin (5)',
  },
  {
    searchableString: 'Napoleon',
    displayNode: 'Napoleon (1)',
  },
  {
    searchableString: 'Nebelung',
    displayNode: 'Nebelung (0)',
  },
  {
    searchableString: 'Neva Masquerade',
    displayNode: 'Neva Masquerade (19)',
  },
  {
    searchableString: 'Norwegian Forest Cat',
    displayNode: 'Norwegian Forest Cat (5)',
  },
  {
    searchableString: 'Ocicat',
    displayNode: 'Ocicat (9)',
  },
  {
    searchableString: 'Ojos Azules',
    displayNode: 'Ojos Azules (19)',
  },
  {
    searchableString: 'Old-style Siamese',
    displayNode: 'Old-style Siamese (10)',
  },
  {
    searchableString: 'Oregon Rex',
    displayNode: 'Oregon Rex (5)',
  },
  {
    searchableString: 'Oriental Bicolor',
    displayNode: 'Oriental Bicolor (3)',
  },
  {
    searchableString: 'Oriental Longhair',
    displayNode: 'Oriental Longhair (4)',
  },
  {
    searchableString: 'Oriental Shorthair',
    displayNode: 'Oriental Shorthair (12)',
  },
  {
    searchableString: 'Persian',
    displayNode: 'Persian (5)',
  },
  {
    searchableString: 'Peterbald',
    displayNode: 'Peterbald (19)',
  },
  {
    searchableString: 'Pixie-bob',
    displayNode: 'Pixie-bob (19)',
  },
  {
    searchableString: 'Raas',
    displayNode: 'Raas (8)',
  },
  {
    searchableString: 'Ragamuffin',
    displayNode: 'Ragamuffin (18)',
  },
  {
    searchableString: 'Ragdoll',
    displayNode: 'Ragdoll (13)',
  },
  {
    searchableString: 'Russian Black',
    displayNode: 'Russian Black (14)',
  },
  {
    searchableString: 'Russian Blue',
    displayNode: 'Russian Blue (12)',
  },
  {
    searchableString: 'Russian Tabby',
    displayNode: 'Russian Tabby (16)',
  },
  {
    searchableString: 'Russian White',
    displayNode: 'Russian White (3)',
  },
  {
    searchableString: 'Sam Sawet',
    displayNode: 'Sam Sawet (8)',
  },
  {
    searchableString: 'Savannah',
    displayNode: 'Savannah (2)',
  },
  {
    searchableString: 'Scottish Fold',
    displayNode: 'Scottish Fold (17)',
  },
  {
    searchableString: 'Selkirk Rex',
    displayNode: 'Selkirk Rex (14)',
  },
  {
    searchableString: 'Serengeti',
    displayNode: 'Serengeti (6)',
  },
  {
    searchableString: 'Serrade petit',
    displayNode: 'Serrade petit (5)',
  },
  {
    searchableString: 'Siamese',
    displayNode: 'Siamese (19)',
  },
  {
    searchableString: 'Siberian Forest Cat',
    displayNode: 'Siberian Forest Cat (7)',
  },
  {
    searchableString: 'Siberian',
    displayNode: 'Siberian (9)',
  },
  {
    searchableString: 'Singapura',
    displayNode: 'Singapura (13)',
  },
  {
    searchableString: 'Snowshoe',
    displayNode: 'Snowshoe (5)',
  },
  {
    searchableString: 'Sokoke',
    displayNode: 'Sokoke (9)',
  },
  {
    searchableString: 'Somali',
    displayNode: 'Somali (5)',
  },
  {
    searchableString: 'Sphynx',
    displayNode: 'Sphynx (5)',
  },
  {
    searchableString: 'Suphalak',
    displayNode: 'Suphalak (9)',
  },
  {
    searchableString: 'Thai Lilac',
    displayNode: 'Thai Lilac (4)',
  },
  {
    searchableString: 'Thai',
    displayNode: 'Thai (17)',
  },
  {
    searchableString: 'Tonkinese',
    displayNode: 'Tonkinese (12)',
  },
  {
    searchableString: 'Toyger',
    displayNode: 'Toyger (0)',
  },
  {
    searchableString: 'Traditional Siamese',
    displayNode: 'Traditional Siamese (5)',
  },
  {
    searchableString: 'Turkish Angora',
    displayNode: 'Turkish Angora (18)',
  },
  {
    searchableString: 'Turkish Van',
    displayNode: 'Turkish Van (0)',
  },
  {
    searchableString: 'Ukrainian Levkoy',
    displayNode: 'Ukrainian Levkoy (10)',
  },
  {
    searchableString: 'Wichien Maat',
    displayNode: 'Wichien Maat (7)',
  },
  {
    searchableString: 'Wila Krungthep',
    displayNode: 'Wila Krungthep (19)',
  },
  {
    searchableString: 'York Chocolate',
    displayNode: 'York Chocolate (15)',
  },
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
