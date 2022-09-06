import React from 'react'
import PricingTable from './components'
import { Container } from 'kitten'

export default {
  component: PricingTable,
  title: 'pages/PricingTable',
  parameters: {
    component: PricingTable,
  },
  decorators: [
    story => (
      <div
        className="has-overrides color-background"
        style={{ '--bgcolor': 'var(--color-grey-100)' }}
      >
        {story()}
      </div>
    ),
  ],
}

export const Default = args => (
  <Container className="k-u-padding-top-single k-u-padding-bottom-decuple">
    <PricingTable {...args} />
  </Container>
)
