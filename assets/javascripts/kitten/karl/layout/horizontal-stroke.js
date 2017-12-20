import React from 'react'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { Marger } from 'kitten/components/layout/marger'

export const KarlHorizontalStroke = () => (
  <Marger
    top="2"
    bottom="3"
  >
    <HorizontalStroke />
  </Marger>
)

export const KarlTinyHorizontalStroke = () => (
  <Marger
    top="2"
    bottom="3"
  >
    <HorizontalStroke size="tiny" />
  </Marger>
)

export const KarlBigHorizontalStroke = () => (
  <Marger
    top="2"
    bottom="3"
  >
    <HorizontalStroke size="big" />
  </Marger>
)

export const KarlHugeHorizontalStroke = () => (
  <Marger
    top="2"
    bottom="3"
  >
    <HorizontalStroke size="huge" />
  </Marger>
)
