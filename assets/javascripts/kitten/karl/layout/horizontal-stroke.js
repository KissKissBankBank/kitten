import React from 'react'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { Text } from 'kitten/components/typography/text'

export const KarlHorizontalStrokes = () => (
  <Grid>
    <GridCol col="6">
      <Text
        tag="p"
        weight="regular"
        size="default"
        style="italic"
        color="font2"
        lineHeight="normal"
      >
        Default
      </Text>
      <Marger
        top="2"
        bottom="3"
      >
        <HorizontalStroke />
      </Marger>

      <Text
        tag="p"
        weight="regular"
        size="default"
        style="italic"
        color="font2"
        lineHeight="normal"
      >
        Tiny
      </Text>
      <Marger
        top="2"
        bottom="3"
      >
        <HorizontalStroke
          size="tiny"
        />
      </Marger>
    </GridCol>

    <GridCol col="6">
      <Text
        tag="p"
        weight="regular"
        size="default"
        style="italic"
        color="font2"
        lineHeight="normal"
      >
        Big
      </Text>
      <Marger
        top="2"
        bottom="3"
      >
        <HorizontalStroke
          size="big"
        />
      </Marger>

      <Text
        tag="p"
        weight="regular"
        size="default"
        style="italic"
        color="font2"
        lineHeight="normal"
      >
        Huge
      </Text>
      <Marger
        top="2"
        bottom="3"
      >
        <HorizontalStroke
          size="huge"
        />
      </Marger>
    </GridCol>
  </Grid>
)
