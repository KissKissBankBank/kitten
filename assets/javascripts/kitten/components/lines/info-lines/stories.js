import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs'
import { InfoLines } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'

storiesOf('Lines/Info Lines', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('InfoLines', () => {
    return (
      <Grid style={{ marginTop: '5em' }}>
        <GridCol offset="1" col="8">
          <InfoLines
            withBorderRadius={boolean('with border radius', false)}
            withLeftRightBorder={boolean('with left right border', false)}
            withoutResponsive={boolean('without responsive', false)}
            withoutTopBottomBorder={boolean('without top bottom border', false)}
          />
        </GridCol>
      </Grid>
    )
  })
