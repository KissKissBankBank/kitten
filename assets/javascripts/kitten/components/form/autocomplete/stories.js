import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, optionsKnob, text, boolean } from '@storybook/addon-knobs'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { Autocomplete } from './index'
import { Field } from '../../form/field'
import { LocationIcon } from '../../icons/location-icon'

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

const StoryGrid = ({ children }) => (
  <Container>
    <Grid>
      <GridCol col-l="3">
        <Marger top="5" bottom="5">
          {children}
        </Marger>
      </GridCol>
    </Grid>
  </Container>
)

const info = {
  text: `
    # Autocomplete
    &nbsp;

    ## Import
    ~~~js
    import { Autocomplete } from '@kisskissbankbank/kitten/src/components/form/autocomplete'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <Autocomplete
      id=""
      name=""
      placeholder=""
      …
      items={ ['foo', 'bar'] }
    />
    ~~~
    &nbsp;
    
    ## Props
    
     - **updateSuggestionsStrategy**: define custom filter strategy of items
        ~~~js
          updateStrategy={({ items, value }) =>
            items.filter(item => item.startsWith(value))
          }
        ~~~
         
  `,
  header: false,
  propTables: false,
}

storiesOf('Form/Autocomplete', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add(
    'by default',
    () => {
      return (
        <StoryGrid>
          <Field>
            <Field.Label labelProps={{ htmlFor: 'autocomplete' }}>
              Choose your kitten:
            </Field.Label>

            <Autocomplete
              id="autocomplete"
              name="autocomplete"
              placeholder="Search a kitten…"
              isLoading={boolean('isLoading', false)}
              noResultMessage={text('noResultMessage', undefined)}
              shouldShowNoResultMessage={boolean(
                'shouldShowNoResultMessage',
                true,
              )}
              items={items}
            />

            <p>🐱 🐱 🐱 🐱 🐱</p>
          </Field>
        </StoryGrid>
      )
    },
    { info },
  )
  .add(
    'with icon',
    () => {
      return (
        <StoryGrid>
          <Field>
            <Field.Label labelProps={{ htmlFor: 'autocomplete' }}>
              Choose your kitten:
            </Field.Label>

            <Autocomplete
              id="autocomplete"
              name="autocomplete"
              placeholder="Search a kitten…"
              isLoading={boolean('isLoading', false)}
              icon={<LocationIcon />}
              noResultMessage={text('noResultMessage', undefined)}
              shouldShowNoResultMessage={boolean(
                'shouldShowNoResultMessage',
                true,
              )}
              iconPosition={optionsKnob(
                'iconPosition',
                {
                  left: 'left',
                  right: 'right',
                },
                'left',
                { display: 'inline-radio' },
              )}
              items={items}
            />

            <p>🐱 🐱 🐱 🐱 🐱</p>
          </Field>
        </StoryGrid>
      )
    },
    { info },
  )
