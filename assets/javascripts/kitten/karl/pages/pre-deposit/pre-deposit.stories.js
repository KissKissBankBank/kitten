import React from 'react'
import PreDeposit from './components/pre-deposit'

export default {
  component: PreDeposit,
  title: 'pages/Pre-deposit',
  parameters: {
    component: PreDeposit,
  },
}

export const FullPage = args => <PreDeposit {...args} />
