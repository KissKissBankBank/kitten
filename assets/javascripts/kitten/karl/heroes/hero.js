import React, { Component } from 'react'
import { Hero } from 'kitten/components/heroes/hero'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Marger } from 'kitten/components/layout/marger'
import { Button } from 'kitten/components/buttons/button'
import { StyleRoot } from 'radium'
import { Grid, GridCol } from 'kitten/components/grid/grid'

const lorem =
  'Lorem ipsum dolor sit amet.'

const loremIpsum =
  `${lorem} Consectetuer adipiscing elit. `
  + 'Aenean commodo ligula eget dolor. Aenean massa.'

const loremIpsumSitAmet =
  `${loremIpsum} Cum sociis natoque penatibus`
  + 'et magnis dis parturient montes, nascetur ridiculus '
  + 'mus. Donec quam  felis, ultricies nec, pellentesque '
  + 'eu, pretium quis, sem. Nulla consequat massa quis enim.'
  + ' Donec pede justo, fringilla vel, aliquet nec, '
  + 'vulputate eget, arcu enim justo, rhoncus ut.'

export const KarlHeroExamples = props => (
  <StyleRoot>
    <Grid>
      <GridCol>
        <div className="karl-Example">
          <p className="karl-Example__title">Hero left</p>
        </div>
        <Hero direction="left">
          <Marger bottom="5">
            <Title modifier="secondary" margin={ false }>
              { lorem }
            </Title>
          </Marger>

          <Marger top="5" bottom={ 4 }>
            <Paragraph modifier="primary" margin={ false }>
              { loremIpsumSitAmet }
            </Paragraph>
          </Marger>

          <Marger top="4">
            <Button modifier="helium">Button</Button>
          </Marger>
        </Hero>

        <div className="karl-Example">
          <p className="karl-Example__title">Hero right</p>
        </div>
        <Hero direction="right">
          <Marger bottom="5">
            <Title modifier="secondary" margin={ false }>
              { lorem }
            </Title>
          </Marger>

          <Marger top="5" bottom={ 4 }>
            <Paragraph modifier="primary" margin={ false }>
              { loremIpsumSitAmet }
            </Paragraph>
          </Marger>

          <Marger top="4">
            <Button modifier="helium">Button</Button>
          </Marger>
        </Hero>

        <div className="karl-Example">
          <p className="karl-Example__title">Hero with small text</p>
        </div>
        <Hero direction="left" tiny>
          <Marger bottom="5">
            <Title modifier="secondary" margin={ false }>
              { lorem }
            </Title>
          </Marger>

          <Marger top="5">
            <Paragraph modifier="primary" margin={ false }>
              { loremIpsum }
            </Paragraph>
          </Marger>
        </Hero>
      </GridCol>
    </Grid>
  </StyleRoot>
)
