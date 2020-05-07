import React from 'react'
import { TitleWithStroke } from '../../../../components/typography/title-with-stroke'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { ExportButton } from '../common/components/export-button'
import { Table } from './table'

const ReferersTable = () => (
  <>
    <TitleWithStroke modifier="tertiary" align="center">
      Provenance des visites et des contributions
    </TitleWithStroke>

    <Grid>
      <GridCol col-m="10" offset-m="1">
        <Table />
      </GridCol>
      <GridCol col-m="10" offset-m="1" col-l="4" offset-l="4">
        <ExportButton />
      </GridCol>
    </Grid>
  </>
)

export default ReferersTable
