import React from 'react'
import { text, number, boolean, select } from '@storybook/addon-knobs'
import {
  FieldInputExample,
  FieldPasswordExample,
  FieldRadioButtonSetExample,
  FieldAutocompleteExample,
} from './field.examples'
import { Marger } from '../../layout/marger'
import { Container } from '../../layout/container'
import { Grid, GridCol } from '../../layout/grid'
import { DocsPage } from 'storybook/docs-page'

const StoryGrid = ({ children }) => (
  <Container>
    <Grid>
      <GridCol col="6">
        <Marger top="5" bottom="5">
          {children}
        </Marger>
      </GridCol>
    </Grid>
  </Container>
)

export default {
  title: 'Form/Field',
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={[
            'index.js',
            'components/autocomplete.js',
            'components/checkbox.js',
            'components/error.js',
            'components/input.js',
            'components/label.js',
            'components/password.js',
            'components/radio-button-set.js',
          ]}
          importString="Field"
        />
      ),
    },
  },
}

export const WithInput = () => {
  return (
    <StoryGrid>
      <FieldInputExample
        id={text('ID', 'input')}
        size={select(
          'Size',
          ['tiny', 'regular', 'big', 'huge', 'giant'],
          'regular',
        )}
        label={text('Label', 'Label')}
        tooltip={text('Tooltip', null)}
        tooltipProps={{ actionLabel: 'Learn more' }}
        tooltipId={text('Tooltip ID', 'tooltip')}
        placeholder={text('Placeholder', 'Placeholder…')}
        error={boolean('Error?', false)}
        errorMessage={text('Error', 'Error message…')}
        limit={number('Limit', undefined)}
        unit={text('Unit', undefined)}
        noMargin={boolean('No margin only on Input', false)}
        variant={select('Variant', ['andromeda', 'orion'], 'andromeda')}
      />
    </StoryGrid>
  )
}

export const WithPassword = () => {
  return (
    <StoryGrid>
      <FieldPasswordExample
        id={text('ID', 'input')}
        size={boolean('Tiny', false) ? 'tiny' : null}
        label={text('Label', 'Label')}
        tooltip={text('Tooltip', null)}
        tooltipProps={{ actionLabel: 'Learn more' }}
        tooltipId={text('Tooltip ID', 'tooltip')}
        placeholder={text('Placeholder', 'Placeholder…')}
        error={boolean('Error?', false)}
        errorMessage={text('Error', 'Error message…')}
        variant={select('Variant', ['andromeda', 'orion'], 'andromeda')}
      />
    </StoryGrid>
  )
}

export const WithRadioButtons = () => {
  return (
    <StoryGrid>
      <FieldRadioButtonSetExample
        id={text('ID', 'option-a')}
        size={boolean('Tiny', false) ? 'tiny' : null}
        label={text('Label', 'Label')}
        tooltip={text('Tooltip', null)}
        tooltipProps={{ actionLabel: 'Learn more' }}
        tooltipId={text('Tooltip ID', 'tooltip')}
        items={[
          {
            text: text('Option A', 'Option A'),
            id: 'option-a',
            defaultChecked: true,
          },
          {
            text: text('Option B', 'Option B'),
            id: 'option-b',
          },
          {
            text: text('Option C', 'Option C'),
            id: 'option-c',
          },
        ]}
        error={boolean('Error?', false)}
        errorMessage={text('Error', 'Error message…')}
        variant={select('Variant', ['andromeda', 'orion'], 'andromeda')}
      />
    </StoryGrid>
  )
}

export const WithAutocomplete = () => {
  return (
    <StoryGrid>
      <FieldAutocompleteExample
        id={text('ID', 'select')}
        size={boolean('Tiny', false) ? 'tiny' : null}
        label={text('Label', 'Label')}
        tooltip={text('Tooltip', null)}
        tooltipProps={{ actionLabel: 'Learn more' }}
        tooltipId={text('Tooltip ID', 'tooltip')}
        placeholder={text('Placeholder', 'Select…')}
        items={[
          'Abyssin',
          'Anatoli',
          'Angora turc',
          'Asian',
          'Chartreux',
          'Cymric',
          'Mandarin',
          'Oriental shorthair',
          'Persan',
          'Sibérien',
        ]}
        error={boolean('Error?', false)}
        errorMessage={text('Error', 'Error message…')}
        variant={select('Variant', ['andromeda', 'orion'], 'andromeda')}
      />
    </StoryGrid>
  )
}
