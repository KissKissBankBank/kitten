import React from 'react'
import { Grid, GridCol } from '../../components/grid/grid'
import { VerticalCardWithAction } from '../../components/cards/vertical-card-with-action'
import { Marger } from '../../components/layout/marger'
import { KarlExampleTitle } from '../../karl/examples/title'

export const KarlVerticalCardWithAction = () => (
  <Grid>
    <GridCol col-s="4">
      <KarlExampleTitle>Vertical card with action</KarlExampleTitle>
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
    </GridCol>

    <GridCol col-s="4">
      <KarlExampleTitle>Vertical card with action and text</KarlExampleTitle>
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
    </GridCol>
  </Grid>
)
