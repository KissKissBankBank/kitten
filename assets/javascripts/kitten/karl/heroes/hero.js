import React from 'react'
import { Hero } from '../../components/heroes/hero'
import { Title } from '../../components/typography/title'
import { Paragraph } from '../../components/typography/paragraph'
import { Marger } from '../../components/layout/marger'
import { Button } from '../../components/buttons/button'
import { Grid, GridCol } from '../../components/grid/grid'

const lorem = 'Lorem ipsum dolor sit amet.'

const loremIpsum =
  `${lorem} Consectetuer adipiscing elit. ` +
  'Aenean commodo ligula eget dolor. Aenean massa.'

const loremIpsumSitAmet =
  `${loremIpsum} Cum sociis natoque penatibus` +
  'et magnis dis parturient montes, nascetur ridiculus ' +
  'mus. Donec quam  felis, ultricies nec, pellentesque ' +
  'eu, pretium quis, sem. Nulla consequat massa quis enim.' +
  ' Donec pede justo, fringilla vel, aliquet nec, ' +
  'vulputate eget, arcu enim justo, rhoncus ut.'

const imageSrc = 'https://placehold.it/40x40/caf4fe/caf4fe'

export const KarlHeroExamples = () => (
  <Grid>
    <GridCol>
      <div className="karl-Example">
        <p className="karl-Example__title">Hero left</p>
      </div>
      <Hero imageSrc={imageSrc} direction="left">
        <Marger bottom="5">
          <Title modifier="secondary" margin={false}>
            {lorem}
          </Title>
        </Marger>

        <Marger top="5" bottom={4}>
          <Paragraph modifier="primary" margin={false}>
            {loremIpsumSitAmet}
          </Paragraph>
        </Marger>

        <Marger top="4">
          <Button modifier="helium">Button</Button>
        </Marger>
      </Hero>

      <div className="karl-Example">
        <p className="karl-Example__title">Hero right</p>
      </div>
      <Hero imageSrc={imageSrc} direction="right">
        <Marger bottom="5">
          <Title modifier="secondary" margin={false}>
            {lorem}
          </Title>
        </Marger>

        <Marger top="5" bottom={4}>
          <Paragraph modifier="primary" margin={false}>
            {loremIpsumSitAmet}
          </Paragraph>
        </Marger>

        <Marger top="4">
          <Button modifier="helium">Button</Button>
        </Marger>
      </Hero>

      <div className="karl-Example">
        <p className="karl-Example__title">Hero with small text</p>
      </div>
      <Hero imageSrc={imageSrc} direction="left" tiny>
        <Marger bottom="5">
          <Title modifier="secondary" margin={false}>
            {lorem}
          </Title>
        </Marger>

        <Marger top="5">
          <Paragraph modifier="primary" margin={false}>
            {loremIpsum}
          </Paragraph>
        </Marger>
      </Hero>
    </GridCol>
  </Grid>
)
