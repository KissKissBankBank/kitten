import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { Autocomplete } from './index'
import { Field } from '../../form/field'

const StoryGrid = ({ children }) => (
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

storiesOf('Form/Autocomplete', module)
  .addDecorator(withKnobs)
  .add('by default', () => {
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
          />

          <p>🐱 🐱 🐱 🐱 🐱</p>
        </Field>
      </StoryGrid>
    )
  })
