import React from 'react'
import ShippingAddress from './components/shipping-address'
import { Marger } from '../../../../components/layout/marger'

export default {
  title: 'pages/Contribute/ShippingAddress',
  component: ShippingAddress,
  args: {
    error: false,
  },
  argTypes: {
    error: { control: 'boolean' },
  },
}

export const Default = args => (
  <Marger top="10" bottom="10">
    <ShippingAddress {...args} />
  </Marger>
)
