import React from 'react'
import { Grid, GridCol } from '../../components/grid/grid'
import { Marger } from '../../components/layout/marger'
import { HorizontalStroke } from '../../components/layout/horizontal-stroke'
import { Text } from '../../components/typography/text'
import { KarlExampleTitle } from '../../karl/examples/title'
import styled from 'styled-components'

const StyledFlexContainer = styled.div`
  display: flex;
  align-items: center;
`

export const KarlHorizontalStrokesWithContent = () => (
  <StyledFlexContainer>
    <HorizontalStroke size="tiny" />
    <Text
      size="tiny"
      weight="regular"
      className="k-u-margin-left-single"
      color="font1"
    >
      Lorem
    </Text>
  </StyledFlexContainer>
)

export const KarlHorizontalStrokes = () => (
  <Grid>
    <GridCol col="4">
      <KarlExampleTitle>Default</KarlExampleTitle>
      <Marger top="2" bottom="3">
        <HorizontalStroke />
      </Marger>

      <KarlExampleTitle>Tiny</KarlExampleTitle>
      <Marger top="2" bottom="3">
        <HorizontalStroke size="tiny" />
      </Marger>
    </GridCol>

    <GridCol col="4">
      <KarlExampleTitle>Big</KarlExampleTitle>
      <Marger top="2" bottom="3">
        <HorizontalStroke size="big" />
      </Marger>

      <KarlExampleTitle>Huge</KarlExampleTitle>
      <Marger top="2" bottom="3">
        <HorizontalStroke size="huge" />
      </Marger>
    </GridCol>

    <GridCol col="4">
      <KarlExampleTitle>With content</KarlExampleTitle>
      <Marger top="2" bottom="3">
        <KarlHorizontalStrokesWithContent />
      </Marger>
    </GridCol>
  </Grid>
)
