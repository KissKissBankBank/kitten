import React from 'react'
import { TitleWithStroke } from '../../../../components/typography/title-with-stroke'
import styled from 'styled-components'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { pxToRem } from '../../../../helpers/utils/typography'
import { LineGraph } from './line-graph'
import { ExportButton } from '../common/components/export-button'

const StyledDatavizLine = styled.div`
  height: ${pxToRem(500)};
  margin-left: ${pxToRem(-60)};
`

const EvolutionLineGraph = () => (
  <>
    <TitleWithStroke modifier="tertiary" align="center">
      Évolution de la collecte
    </TitleWithStroke>

    <Grid>
      <GridCol col-m="10" offset-m="1">
        <StyledDatavizLine>
          <LineGraph />
        </StyledDatavizLine>
      </GridCol>
      <GridCol col-m="10" offset-m="1" col-l="4" offset-l="4">
        <ExportButton />
      </GridCol>
    </Grid>
  </>
)

export default EvolutionLineGraph
