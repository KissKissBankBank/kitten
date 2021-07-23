import React from 'react'
import { Container } from '../../../components/layout/container'
import { Grid, GridCol } from '../../../components/layout/grid'
import { Marger } from '../../../components/layout/marger'

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
