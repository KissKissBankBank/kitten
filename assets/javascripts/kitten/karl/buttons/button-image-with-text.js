import React from 'react'
import { Grid, GridCol } from '../../components/grid/grid'
import { ButtonImageWithText } from '../../components/buttons/button-image-with-text'
import { KarlExampleTitle } from '../../karl/examples/title'

export const KarlButtonImageWithText = () => (
  <Grid>
    <GridCol col-m="3">
      <KarlExampleTitle>With paragraph - micro</KarlExampleTitle>
      <ButtonImageWithText
        tag="div"
        micro
        titleRegular
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
        titleRegular
      />
    </GridCol>

    <GridCol col-m="3">
      <KarlExampleTitle>With paragraph - large gutter</KarlExampleTitle>
      <ButtonImageWithText
        tag="div"
        largeGutter
        titleRegular
        title="Title"
        description="Description"
      />
    </GridCol>
  </Grid>
)
