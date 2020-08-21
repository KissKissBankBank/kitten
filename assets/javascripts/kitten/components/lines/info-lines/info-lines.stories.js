import React from 'react'
import { boolean, color } from '@storybook/addon-knobs'
import { InfoLines } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'

export const Default = () => (
  <Grid style={{ marginTop: '5em' }}>
    <GridCol offset="1" col="8">
      <InfoLines
        withBorderRadius={boolean('with border radius', false)}
        withLeftRightBorder={boolean('with left right border', false)}
        withoutTopBottomBorder={boolean('without top bottom border', false)}
        withoutResponsive={boolean('without responsive', false)}
        borderColor={color('custom border color', '#eee')}
        infos={[
          { key: 'Lorem', value: 'Ipsum', id: 'item-1' },
          { key: 'Dolor', value: 'Sit amet', id: 'item-2' },
        ]}
      />
    </GridCol>
  </Grid>
)
