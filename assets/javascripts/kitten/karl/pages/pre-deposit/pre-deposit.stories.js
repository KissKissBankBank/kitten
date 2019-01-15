import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'
import PreDeposit from './components/pre-deposit'

storiesOf('Pages/Pre-deposit', module).add('Pre-deposit', () => {
  return <PreDeposit />
})
