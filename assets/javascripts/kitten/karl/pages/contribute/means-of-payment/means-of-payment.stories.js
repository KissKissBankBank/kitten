import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'
import MeansOfPayment from './components/means-of-payment'
import { Marger } from '../../../../components/layout/marger'

storiesOf('Pages/Contribute', module)
  .addDecorator(withKnobs)
  .add('MeansOfPayment', () => {
    return (
      <Marger top="10" bottom="10">
        <MeansOfPayment onlyPayPal={boolean('Only PayPal?', false)} />
      </Marger>
    )
  })
