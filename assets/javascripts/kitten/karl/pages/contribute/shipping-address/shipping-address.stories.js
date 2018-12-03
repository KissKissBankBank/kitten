import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'
import ShippingAddress from './components/shipping-address'
import { Marger } from '../../../../components/layout/marger'

storiesOf('Pages/Contribute', module)
  .addDecorator(withKnobs)
  .add('ShippingAddress', () => {
    return (
      <Marger top="10" bottom="10">
        <ShippingAddress error={boolean('Show errors?', false)} />
      </Marger>
    )
  })
