import React from 'react'
import PaymentChoices from './components/payment-choices'
import { Marger } from '../../../..'

export default {
  title: 'pages/Contribute/PaymentChoices',
  component: PaymentChoices,
  args: {
    onlyPayPal: false,
    error: false,
  },
  argTypes: {
    onlyPayPal: { control: 'boolean' },
    error: { control: 'boolean' },
  }
}

export const Default = (args) => {
  return (
    <Marger top="10" bottom="10">
      <PaymentChoices {...args}/>
    </Marger>
  )
}
