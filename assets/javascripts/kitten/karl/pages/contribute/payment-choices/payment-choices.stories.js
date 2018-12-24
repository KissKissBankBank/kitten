import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'
import PaymentChoices from './components/payment-choices'
import { Marger } from '../../../../components/layout/marger'

storiesOf('Pages/Contribute', module)
  .addDecorator(withKnobs)
  .add('PaymentChoices', () => {
    return (
      <Marger top="10" bottom="10">
        <PaymentChoices
          onlyPayPal={boolean('onlyPayPal?', false)}
          error={boolean('Error?', false)}
        />
      </Marger>
    )
  })
