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
        <ArrowIcon version="solid" direction="top" />
      </div>
      <div>
        <ArrowIcon version="solid" direction="right" />
      </div>
      <div>
        <ArrowIcon version="solid" direction="bottom" />
      </div>
      <div>
        <ArrowIcon version="solid" direction="left" />
      </div>
      <div>
        <ArrowIcon version="solid" direction="top" disabled />
      </div>
    </GridCol>
  </Grid>
)
