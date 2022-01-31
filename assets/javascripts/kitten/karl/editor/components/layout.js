import React from 'react'
import { Container } from '../../../layout/container'
import { Grid, GridCol } from '../../../layout/grid'
import { Marger } from '../../../layout/marger'

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
