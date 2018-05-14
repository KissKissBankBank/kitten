import React from 'react'
import Radium, { StyleRoot } from 'radium'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { ButtonImageWithText } from 'kitten/components/buttons/button-image-with-text'
import { KarlExampleTitle } from 'kitten/karl/examples/title'

export const KarlButtonImageWithText = () => (
  <Grid>
    <GridCol col="3">
      <KarlExampleTitle>With paragraph - small</KarlExampleTitle>
      <ButtonImageWithText title="Title" description="Description" />
    </GridCol>

    <GridCol col="3">
      <KarlExampleTitle>With paragraph - normal</KarlExampleTitle>
      <ButtonImageWithText isNormal title="Title" description="Description" />
    </GridCol>
  </Grid>
)
