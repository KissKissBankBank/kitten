import React, { Component } from 'react'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import HeaderWithBackground from './header-with-background'
import KeySection from './key-section'

class PreDeposit extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <GridCol>
            <KeySection />
          </GridCol>
        </Grid>
      </Container>
    )
  }
}

export default PreDeposit
