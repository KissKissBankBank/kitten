import React from 'react'
import { Grid, GridCol } from '../../components/grid/grid'
import { VerticalCard } from '../../components/cards/vertical-card'
import { Marger } from '../../components/layout/marger'
import { KarlExampleTitle } from '../../karl/examples/title'

export const KarlVerticalCard = () => (
  <Grid>
    <GridCol col-s="4">
      <KarlExampleTitle>Vertical card</KarlExampleTitle>
      <Marger bottom="2">
        <VerticalCard
          imageProps={{
            src: 'http://via.placeholder.com/500x500/caf4fe/caf4fe',
            alt: '',
          }}
          title="Lorem ipsum dolor sit amet"
        />
      </Marger>
    </GridCol>

    <GridCol col-s="4">
      <KarlExampleTitle>Vertical card and text</KarlExampleTitle>
      <Marger bottom="2">
        <VerticalCard
          imageProps={{
            src: 'http://via.placeholder.com/500x500/caf4fe/caf4fe',
            alt: '',
          }}
          title="Consectetur adipiscing elit, sed do eiusmod tempor"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"
        />
      </Marger>
    </GridCol>
  </Grid>
)
