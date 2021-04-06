import React from 'react'
import { Grid, GridCol } from '../../../components/grid/grid'
import { LongArrowIcon } from './index'

export default {
  title: 'Icons/LongArrowIcon',
  component: LongArrowIcon,
}

export const Default = () => (
  <Grid>
    <GridCol offset="1" col="10">
      <div>
        <LongArrowIcon direction="top" />
      </div>
      <div>
        <LongArrowIcon direction="right" />
      </div>
      <div>
        <LongArrowIcon direction="bottom" />
      </div>
      <div>
        <LongArrowIcon direction="left" />
      </div>
      <div>
        <LongArrowIcon direction="top" disabled />
      </div>
    </GridCol>
  </Grid>
)
