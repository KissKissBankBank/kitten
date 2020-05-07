import React from 'react'
import { TitleWithStroke } from '../../../../components/typography/title-with-stroke'
import styled from 'styled-components'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { pxToRem } from '../../../../helpers/utils/typography'
import { BarGraph } from './bar-graph'
import { ExportButton } from '../common/components/export-button'

const StyledBarGraphContainer = styled.div`
  height: ${pxToRem(500)};
  margin-left: ${pxToRem(-60)};
  margin-right: ${pxToRem(-60)};
`

const AnalysisBarGraph = () => (
  <>
    <TitleWithStroke modifier="tertiary" align="center">
      Analyse détaillée
    </TitleWithStroke>

    <Grid>
      <GridCol col-m="10" offset-m="1">
        <StyledBarGraphContainer>
          <BarGraph />
        </StyledBarGraphContainer>
      </GridCol>
      <GridCol
        className="k-u-margin-top-double"
        col-m="10"
        offset-m="1"
        col-l="4"
        offset-l="4"
      >
        <ExportButton />
      </GridCol>
    </Grid>
  </>
)

export default AnalysisBarGraph
