import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import PaymentChoices from './components/payment-choices'
import { Marger } from '../../../../components/layout/marger'

export default {
  title: 'pages/Contribute/PaymentChoices',
  component: PaymentChoices,
}

export const Default = () => {
  return (
    <Marger top="10" bottom="10">
      <PaymentChoices
        onlyPayPal={boolean('onlyPayPal?', false)}
        error={boolean('Error?', false)}
      />
    </Marger>
  )
}
