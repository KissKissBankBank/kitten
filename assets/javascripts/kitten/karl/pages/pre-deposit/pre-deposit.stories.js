import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'
import { Marger } from '../../../../components/layout/marger'

storiesOf('Pages/Pre-deposit', module)
  .addDecorator(withKnobs)
  .add('Pre-deposit', () => {
    return <PreDeposit />
  })
