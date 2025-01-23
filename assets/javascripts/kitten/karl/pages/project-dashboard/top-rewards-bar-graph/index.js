import React from 'react'
import { TitleWithStroke } from '../../../../components/typography/title-with-stroke'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { BarGraph } from './bar-graph'
import { ExportButton } from '../common/components/export-button'

const TopRewardsBarGraph = () => (
  <>
    <TitleWithStroke modifier="tertiary" align="center">
      Top contreparties
    </TitleWithStroke>

    <Grid>
      <GridCol col-m="10" offset-m="1">
        <BarGraph />
      </GridCol>
      <GridCol col-m="10" offset-m="1" col-l="4" offset-l="4">
        <ExportButton />
      </GridCol>
    </Grid>
  </>
)

export default TopRewardsBarGraph
