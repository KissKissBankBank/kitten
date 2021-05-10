import React from 'react'
import { Container } from '../../../components/structure/container'
import { Grid, GridCol } from '../../../components/structure/grid'
import { Marger } from '../../../components/structure/marger'

const Layout = ({ children }) => {
  return (
    <Container>
      <Grid>
        <GridCol>
          <Marger top="4" bottom="4">
            {children}
          </Marger>
        </GridCol>
      </Grid>
    </Container>
  )
}

export default Layout
