import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'
import { Field } from 'kitten/components/form/field'
import { Marger } from 'kitten/components/layout/marger'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'

const FormGrid = ({ children }) => (
  <Container>
    <Grid>
      <GridCol col="3">
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
      <FormGrid>
        <Field error={boolean('Error?', false)}>
          <Field.Label htmlFor="label">{text('Label', 'Label')}</Field.Label>

          <Field.Input
            id="label"
            name="label"
            placeholder={text('Placeholder', 'Placeholder…')}
          />

          <Field.Error>{text('Error', 'Error message…')}</Field.Error>
        </Field>
      </FormGrid>
    )
  })
