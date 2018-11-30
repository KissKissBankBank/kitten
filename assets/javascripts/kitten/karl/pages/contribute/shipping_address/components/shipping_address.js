import React, { Component } from 'react'
import { Container } from '../../../../../components/grid/container'
import { Grid, GridCol } from '../../../../../components/grid/grid'
import { Marger } from '../../../../../components/layout/marger'
import { Title } from '../../../../../components/typography/title'
import { parseHtml } from '../../../../../helpers/utils/parser'
import { HorizontalStroke } from '../../../../../components/layout/horizontal-stroke'
import Form from './form'
import Cart from './cart'

class ShippingAddress extends Component {
  render() {
    const { title, ...others } = this.props

    return (
      <Container>
        <Grid>
          <GridCol col-l="6" offset-l="1">
            <Marger bottom="2">
              <Title modifier="secondary" margin={false}>
                {parseHtml(title)}
              </Title>
            </Marger>

            <Marger top="2" bottom="4">
              <HorizontalStroke size="big" />
            </Marger>

            <Form {...others} />
          </GridCol>

          <GridCol col="3" offset="2" className="k-u-hidden@m-down">
            <Cart />
          </GridCol>
        </Grid>
      </Container>
    )
  }
}

export default ShippingAddress
