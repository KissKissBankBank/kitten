import React from 'react'
import { Grid, GridCol } from '../../../components/grid/grid'
import { ArrowIcon } from './index'

export default {
  title: 'ArrowIcon',
  component: ArrowIcon,
}

export const Default = () => (
  <Grid>
    <GridCol offset="1" col="10">
      <div>
        <ArrowIcon direction="top" />
      </div>
      <div>
        <ArrowIcon direction="right" />
      </div>
      <div>
        <ArrowIcon direction="bottom" />
      </div>
      <div>
        <ArrowIcon direction="left" />
      </div>
      <div>
        <ArrowIcon direction="top" disabled />
      </div>
    </GridCol>
  </Grid>
)
