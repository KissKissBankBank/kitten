import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { KissbankersBoard } from './components/kissbankers-board'
import { Marger } from '../../../components/layout/marger'
import { Grid, GridCol } from '../../../components/grid/grid'

storiesOf('Pages/Kissbankers-board', module)
  .addDecorator(withKnobs)
  .add('KissbankersBoard', () => {
    return (
      <Grid>
        <GridCol>
          <Marger top="10" bottom="10">
            <KissbankersBoard />
          </Marger>
        </GridCol>
      </Grid>
    )
  })
