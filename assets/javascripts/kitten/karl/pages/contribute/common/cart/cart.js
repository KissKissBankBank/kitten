import React, { Component } from 'react'
import { Marger } from '../../../../../components/layout/marger'
import { Title } from '../../../../../components/atoms/typography/title'
import { HorizontalStroke } from '../../../../../components/atoms/horizontal-stroke'
import { pxToRem } from '../../../../../helpers/utils/typography'
import CartItem from './cart-item'

class Cart extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: '#222',
          marginRight: -40,
          padding: `${pxToRem(80)} ${pxToRem(40)} ${pxToRem(60)}`,
          color: '#FFF',
        }}
      >
        <Marger bottom="2">
          <Title tag="p" modifier="senary" margin={false}>
            Votre sélection
          </Title>
        </Marger>

        <Marger top="2" bottom="3">
          <HorizontalStroke style={{ background: '#FFF' }} />
        </Marger>

        <CartItem />
        <CartItem />
      </div>
    )
  }
}

export default Cart
