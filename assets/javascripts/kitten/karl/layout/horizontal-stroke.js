import React from 'react'
import { Grid, GridCol } from '../../components/grid/grid'
import Radium from 'radium'
import { Marger } from '../../components/layout/marger'
import { HorizontalStroke } from '../../components/layout/horizontal-stroke'
import { Text as TextBase } from '../../components/typography/text'
import { KarlExampleTitle } from '../../karl/examples/title'

const Text = Radium(TextBase)

const KarlHorizontalStrokesWithContentBase = () => (
  <div style={styles.content}>
    <HorizontalStroke size="tiny" />
    <Text
      size="tiny"
      weight="regular"
      style={styles.content.text}
      color="font1"
    >
      Lorem
    </Text>
  </div>
)

const styles = {
  content: {
    display: 'flex',
    alignItems: 'center',

    text: {
      marginLeft: '10px',
    },
  },
}

export const KarlHorizontalStrokesWithContent = Radium(
  KarlHorizontalStrokesWithContentBase,
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
