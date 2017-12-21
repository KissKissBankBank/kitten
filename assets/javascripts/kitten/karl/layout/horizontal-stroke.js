import React from 'react'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { KarlExampleTitle } from 'kitten/karl/examples/title'

export const KarlHorizontalStrokes = () => (
  <Grid>
    <GridCol col="6">
      <KarlExampleTitle />
      <Marger
        top="2"
        bottom="3"
      >
        <HorizontalStroke />
      </Marger>

      <KarlExampleTitle title="Tiny" />
      <Marger
        top="2"
        bottom="3"
      >
        <HorizontalStroke size="tiny" />
      </Marger>
    </GridCol>

    <GridCol col="6">
      <KarlExampleTitle title="Big" />
      <Marger
        top="2"
        bottom="3"
      >
        <HorizontalStroke size="big" />
      </Marger>

      <KarlExampleTitle title="Huge" />
      <Marger
        top="2"
        bottom="3"
      >
        <HorizontalStroke size="huge" />
      </Marger>
    </GridCol>
  </Grid>
)
