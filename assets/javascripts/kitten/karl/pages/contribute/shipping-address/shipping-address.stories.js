import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import ShippingAddress from './components/shipping-address'
import { Marger } from '../../../../components/structure/marger'

export default {
  title: 'pages/Contribute/ShippingAddress',
  component: ShippingAddress,
}

export const Default = () => (
  <Marger top="10" bottom="10">
    <ShippingAddress error={boolean('Show errors?', false)} />
  </Marger>
)
