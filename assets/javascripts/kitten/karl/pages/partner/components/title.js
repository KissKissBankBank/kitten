import React, { Component } from 'react'
import { Marger } from '../../../../components/layout/marger'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Title as KittenTitle } from '../../../../components/typography/title'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'

class Title extends Component {
  render() {
    return (
      <Marger top="10" bottom="4">
        <Container>
          <Grid>
            <GridCol col-l="10" offset-l="1">
              <Marger bottom="2">
                <KittenTitle tag="h2" modifier="secondary" margin={false}>
                  Nous créons avec vous <br />
                  des partenariats sur-mesure
                </KittenTitle>
              </Marger>

              <HorizontalStroke size="big" style={{ height: 6 }} />
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )
  }
}

export default Title
