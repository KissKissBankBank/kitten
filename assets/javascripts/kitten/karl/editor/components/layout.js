import React from 'react'
import {
  Container,
  Grid,
  GridCol,
  Marger,
} from 'kitten'

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
