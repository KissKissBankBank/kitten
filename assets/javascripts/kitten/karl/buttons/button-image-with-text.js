import React from 'react'
import Radium, { StyleRoot } from 'radium'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { ButtonImageWithText } from 'kitten/components/buttons/button-image-with-text'
import { KarlExampleTitle } from 'kitten/karl/examples/title'

export const KarlButtonImageWithText = () => (
  <Grid>
    <GridCol col="3">
      <KarlExampleTitle>Button image with text - small</KarlExampleTitle>
      <ButtonImageWithText
        titleProps={{
          size: 'micro',
          weight: 'regular',
        }}
        descriptionProps={{
          size: 'micro',
          weight: 'light',
        }}
        title="Owner title"
        description="Owner description"
      />
    </GridCol>

    <GridCol col="3">
      <KarlExampleTitle>Button image with text</KarlExampleTitle>
      <ButtonImageWithText
        titleProps={{
          weight: 'regular',
        }}
        title="Owner title"
        description="Owner description"
      />
    </GridCol>
  </Grid>
)
