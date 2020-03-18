import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number, color } from '@storybook/addon-knobs'
import { Spinner } from './index'
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
            <Spinner
              value={number('Value', 50)}
              color={color('Color', COLORS.primary1)}
              rampProps={{ style: { height: 50, width: 50 } }}
            />
          </GridCol>
        </Grid>
      </Container>
    </Marger>
  ))
