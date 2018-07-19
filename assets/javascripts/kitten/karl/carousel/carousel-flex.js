import React from 'react'
import Radium, { StyleRoot } from 'radium'
import { CarouselFlex } from 'kitten/components/carousel/carousel-flex'
import { Container } from 'kitten/components/grid/container'
import { Marger } from 'kitten/components/layout/marger'
import { KarlExampleTitle } from 'kitten/karl/examples/title'

export const KarlCarouselFlex = () => (
  <StyleRoot>
    <KarlExampleTitle>Carousel flex</KarlExampleTitle>
    <Container>
      <CarouselFlex />
    </Container>
  </StyleRoot>
)
