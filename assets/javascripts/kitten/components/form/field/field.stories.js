import React from 'react'
import { text, number, boolean } from '@storybook/addon-knobs'
import {
  FieldInputExample,
  FieldPasswordExample,
  FieldRadioButtonSetExample,
  FieldAutocompleteExample,
} from './field.examples'
import { Marger } from '../../structure/marger'
import { Container } from '../../structure/container'
import { Grid, GridCol } from '../../structure/grid'

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
}

export const WithInput = () => {
  return (
    <StoryGrid>
      <FieldInputExample
        id={text('ID', 'input')}
        tiny={boolean('Tiny', false)}
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
      />
    </StoryGrid>
  )
}

export const WithPassword = () => {
  return (
    <StoryGrid>
      <FieldPasswordExample
        id={text('ID', 'input')}
        tiny={boolean('Tiny', false)}
        label={text('Label', 'Label')}
        tooltip={text('Tooltip', null)}
        tooltipProps={{ actionLabel: 'Learn more' }}
        tooltipId={text('Tooltip ID', 'tooltip')}
        placeholder={text('Placeholder', 'Placeholder…')}
        error={boolean('Error?', false)}
        errorMessage={text('Error', 'Error message…')}
      />
    </StoryGrid>
  )
}

export const WithRadioButtons = () => {
  return (
    <StoryGrid>
      <FieldRadioButtonSetExample
        id={text('ID', 'option-a')}
        tiny={boolean('Tiny', false)}
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
      />
    </StoryGrid>
  )
}

export const WithAutocomplete = () => {
  return (
    <StoryGrid>
      <FieldAutocompleteExample
        id={text('ID', 'select')}
        tiny={boolean('Tiny', false)}
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
      />
    </StoryGrid>
  )
}
