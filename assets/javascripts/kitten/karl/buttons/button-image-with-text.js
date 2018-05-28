import React from 'react'
import Radium, { StyleRoot } from 'radium'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { ButtonImageWithText } from 'kitten/components/buttons/button-image-with-text'
import { KarlExampleTitle } from 'kitten/karl/examples/title'

export const KarlButtonImageWithText = () => (
  <Grid>
    <GridCol col-m="3">
      <KarlExampleTitle>With paragraph - micro</KarlExampleTitle>
      <ButtonImageWithText
        tag="div"
        micro
        regularTitle
        title="Title"
        description="Description"
      />
    </GridCol>

    <GridCol col-m="3">
      <KarlExampleTitle>With paragraph - tiny</KarlExampleTitle>
      <ButtonImageWithText
        tag="p"
        title="Title"
        description="Description"
        regularTitle
      />
    </GridCol>

    <GridCol col-m="3">
      <KarlExampleTitle>With paragraph - large gutter</KarlExampleTitle>
      <ButtonImageWithText
        tag="div"
        largeGutter
        regularTitle
        title="Title"
        description="Description"
      />
    </GridCol>
  </Grid>
)
