import React from 'react'
import Radium, { StyleRoot } from 'radium'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { VerticalCardWithAction } from 'kitten/components/cards/vertical-card-with-action'
import { Container } from 'kitten/components/grid/container'
import { Marger } from 'kitten/components/layout/marger'
import { KarlExampleTitle } from 'kitten/karl/examples/title'

export const KarlVerticalCardWithAction = () => (
  <StyleRoot>
    <Grid>
      <GridCol col-s="4">
        <KarlExampleTitle>Vertical card with action</KarlExampleTitle>
        <Container>
          <Marger bottom="2">
            <VerticalCardWithAction
              imageProps={{
                src: 'http://via.placeholder.com/500x500/caf4fe/caf4fe',
                alt: '',
              }}
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              button="Lorem ipsum"
              buttonModifier="helium"
            />
          </Marger>
        </Container>
      </GridCol>

      <GridCol col-s="4">
        <KarlExampleTitle>Vertical card with action and text</KarlExampleTitle>
        <Container>
          <Marger bottom="2">
            <VerticalCardWithAction
              imageProps={{
                src: 'http://via.placeholder.com/500x500/caf4fe/caf4fe',
                alt: '',
              }}
              title="Lorem ipsum dolor sit amet, consectetur adipiscing"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"
              button="Lorem ipsum"
              buttonModifier="helium"
            />
          </Marger>
        </Container>
      </GridCol>
    </Grid>
  </StyleRoot>
)
