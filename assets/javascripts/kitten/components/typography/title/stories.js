import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs'
import { Title } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'


const modifierOptions = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
  Quaternary: 'quaternary',
  Quinary: 'quinary',
  Senary: 'senary',
}

storiesOf('Typography/Title', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'default',
    () => {
      return (
        <Marger top="4">
          <Container>
            <Grid>
              <GridCol col="10">
                <Title
                  modifier={select('Modifier', modifierOptions, 'primary')}
                  margin={boolean('Margin', false)}
                  italic={boolean('Italic', false)}
                >
                  {text('Title', 'MyTitle')}
                </Title>
              </GridCol>
            </Grid>
          </Container>
        </Marger>
      )
    })
