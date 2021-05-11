import React, { Component } from 'react'
import { Container } from '../../../../../components/structure/container'
import { Grid, GridCol } from '../../../../../components/structure/grid'
import { Marger } from '../../../../../components/structure/marger'
import { Title } from '../../../../../components/atoms/typography/title'
import { HorizontalStroke } from '../../../../../components/atoms/horizontal-stroke'
import Form from './form'
import Cart from '../../common/cart/cart'

class ShippingAddress extends Component {
  render() {
    const { error } = this.props

    return (
      <Container>
        <Grid>
          <GridCol col-xs="10" offset-xs="1" col-l="5" offset-l="1">
            <Marger bottom="2">
              <Title modifier="secondary" margin={false}>
                Vos informations <br />
                de livraison
              </Title>
            </Marger>

            <Marger top="2" bottom="4">
              <HorizontalStroke size="big" />
            </Marger>

            <Form error={error} />
          </GridCol>

          <GridCol
            col-l="4"
            offset-l="2"
            col-xl="3"
            offset-xl="3"
            className="k-u-hidden@m-down"
          >
            <Cart />
          </GridCol>
        </Grid>
      </Container>
    )
  }
}

export default ShippingAddress
