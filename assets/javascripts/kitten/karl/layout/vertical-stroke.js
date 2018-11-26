import React from 'react'
import { VerticalStroke } from '../../components/layout/vertical-stroke'
import { Marger } from '../../components/layout/marger'

export const KarlVerticalStroke = () => (
  <Marger top="3" bottom="2">
    <VerticalStroke />
  </Marger>
)

export const KarlTinyVerticalStroke = () => (
  <Marger top="3" bottom="2">
    <VerticalStroke size="tiny" />
  </Marger>
)

export const KarlBigVerticalStroke = () => (
  <Marger top="3" bottom="2">
    <VerticalStroke size="big" />
  </Marger>
)

export const KarlHugeVerticalStroke = () => (
  <Marger top="3" bottom="2">
    <VerticalStroke size="huge" />
  </Marger>
)
