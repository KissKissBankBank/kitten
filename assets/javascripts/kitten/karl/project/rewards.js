import React from 'react'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'

export const ProjectRewards = () => (
  <Container>
    <Grid>
      <GridCol col-l="10" offset-l="1">
        <Marger top="10" bottom="10">
          RewardCard
        </Marger>
      </GridCol>
    </Grid>
  </Container>
)
