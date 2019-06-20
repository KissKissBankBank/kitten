import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'
import {
  FieldInputExample,
  FieldPasswordExample,
  FieldRadioButtonSetExample,
  FieldSelectExample,
} from './field.examples'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'

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

storiesOf('Form/Field', module)
  .addDecorator(withKnobs)
  .add('with input', () => {
    return (
      <StoryGrid>
        <FieldInputExample
          id={text('ID', 'input')}
          label={text('Label', 'Label')}
          tooltip={text('Tooltip', null)}
          tooltipId={text('Tooltip ID', 'tooltip')}
          placeholder={text('Placeholder', 'Placeholder…')}
          error={boolean('Error?', false)}
          errorMessage={text('Error', 'Error message…')}
          limit={number('Limit', undefined)}
          unit={text('Unit', undefined)}
        />
      </StoryGrid>
    )
  })
  .add('with password', () => {
    return (
      <StoryGrid>
        <FieldPasswordExample
          id={text('ID', 'input')}
          label={text('Label', 'Label')}
          tooltip={text('Tooltip', null)}
          tooltipId={text('Tooltip ID', 'tooltip')}
          placeholder={text('Placeholder', 'Placeholder…')}
          error={boolean('Error?', false)}
          errorMessage={text('Error', 'Error message…')}
        />
      </StoryGrid>
    )
  })
  .add('with radio buttons', () => {
    return (
      <StoryGrid>
        <FieldRadioButtonSetExample
          id={text('ID', 'option-a')}
          label={text('Label', 'Label')}
          tooltip={text('Tooltip', null)}
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
  })
  .add('with select', () => {
    return (
      <StoryGrid>
        <FieldSelectExample
          id={text('ID', 'select')}
          label={text('Label', 'Label')}
          tooltip={text('Tooltip', null)}
          tooltipId={text('Tooltip ID', 'tooltip')}
          placeholder={text('Placeholder', 'Select…')}
          options={[
            { value: 'a', label: text('Option A', 'Option A') },
            { value: 'b', label: text('Option B', 'Option B') },
            { value: 'c', label: text('Option C', 'Option C') },
          ]}
          error={boolean('Error?', false)}
          errorMessage={text('Error', 'Error message…')}
        />
      </StoryGrid>
    )
  })
