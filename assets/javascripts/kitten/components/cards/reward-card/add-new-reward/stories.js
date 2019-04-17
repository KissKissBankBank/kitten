import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import { Marger } from '../../../layout/marger'
import { Container } from '../../../grid/container'
import { Grid, GridCol } from '../../../grid/grid'
import { AddNewReward } from './index'

storiesOf('Cards/AddNewReward', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <Marger top="4" bottom="4">
        <Container>
          <Grid>
            <GridCol col="6">
              <AddNewReward />
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )
  })
