import React from 'react'
import Radium, { StyleRoot } from 'radium'
import { FlexCarousel } from 'kitten/components/carousel/carousel-flex'
import { Container } from 'kitten/components/grid/container'
import { Marger } from 'kitten/components/layout/marger'
import { KarlExampleTitle } from 'kitten/karl/examples/title'

export const KarlFlexCarousel = () => (
  <StyleRoot>
    <KarlExampleTitle>Flex Carousel</KarlExampleTitle>
    <Container>
      <FlexCarousel />
    </Container>
  </StyleRoot>
)
