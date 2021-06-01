import React from 'react'
import Summary from './index'
import { Container } from '../../../components/grid/container'
import { Grid, GridCol } from '../../../components/grid/grid'

export const Default = () => (
  <Container>
    <Grid>
      <GridCol col="7">
        <Summary />
      </GridCol>
    </Grid>
  </Container>
)

export default {
  title: 'pages/Contribution-card',
  component: Summary,
}
