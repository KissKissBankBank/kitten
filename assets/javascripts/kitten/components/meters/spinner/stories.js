import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number, color } from '@storybook/addon-knobs'
import { SpinnerLoader } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import COLORS from '../../../constants/colors-config'

storiesOf('Meters/Spinner', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('default', () => (
    <Marger top="4" bottom="4">
      <Container>
        <Grid>
          <GridCol col={4}>
            <SpinnerLoader />
          </GridCol>
        </Grid>
      </Container>
    </Marger>
  ))
