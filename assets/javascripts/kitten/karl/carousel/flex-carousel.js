import React from 'react'
import Radium, { StyleRoot } from 'radium'
import { FlexCarousel } from 'kitten/components/carousel/flex-carousel'
import { Container } from 'kitten/components/grid/container'
import { Marger } from 'kitten/components/layout/marger'
import { KarlExampleTitle } from 'kitten/karl/examples/title'

export const KarlFlexCarousel = () => (
  <StyleRoot>
    <KarlExampleTitle>Flex Carousel</KarlExampleTitle>
    <Container>
      <FlexCarousel
        title="Profitez de nos conseils en investissement"
        titleLineBreak="grâce au Mode Complet"
        paragraph="Nous vous conseillons de façon personnalisée en fonction de votre situation"
        paragraphLineBreak="et de vos préférences d'investissements"
        button="En savoir plus"
      />
    </Container>
  </StyleRoot>
)
