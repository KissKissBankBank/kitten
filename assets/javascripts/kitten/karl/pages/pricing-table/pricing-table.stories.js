import React from 'react'
import PricingTable from './components'
import { Container } from 'kitten'

export default {
  component: PricingTable,
  title: 'pages/PricingTable',
  parameters: {
    component: PricingTable,
  },
}

export const Default = args => (
  <Container className="k-u-background-color-background2 k-u-padding-vertical-triple">
    <PricingTable {...args} />
  </Container>
)
