import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'
import { Field } from './field'
import { Marger } from '../layout/marger'
import { Container } from '../grid/container'
import { Grid, GridCol } from '../grid/grid'

const FieldBase = ({ children }) => (
  <Container>
    <Grid>
      <GridCol col="3">
        <Marger top="5" bottom="5">
          <Field>
            <Field.Label
              labelProps={{ htmlFor: 'label' }}
              tooltip={text('Tooltip', null)}
              tooltipId={text('Tooltip ID', 'tooltip')}
            >
              {text('Label', 'Label')}
            </Field.Label>

            {children}

            {boolean('Error?', false) && (
              <Field.Error>{text('Error', 'Error message…')}</Field.Error>
            )}
          </Field>
        </Marger>
      </GridCol>
    </Grid>
  </Container>
)

storiesOf('Form/Field', module)
  .addDecorator(withKnobs)
  .add('with input', () => {
    return (
      <FieldBase>
        <Field.Input
          id="label"
          name="label"
          placeholder={text('Placeholder', 'Placeholder…')}
          error={boolean('Error?', false)}
        />
      </FieldBase>
    )
  })
  .add('with radio buttons', () => {
    return (
      <FieldBase>
        <Field.RadioButtonSet
          name="option"
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
        />
      </FieldBase>
    )
  })
  .add('with select', () => {
    return (
      <FieldBase>
        <Field.Select
          id="select"
          name="option"
          placeholder={text('Placeholder', 'Select…')}
          options={[
            { value: 'a', label: text('Option A', 'Option A') },
            { value: 'b', label: text('Option B', 'Option B') },
            { value: 'c', label: text('Option C', 'Option C') },
          ]}
          error={boolean('Error?', false)}
        />
      </FieldBase>
    )
  })
