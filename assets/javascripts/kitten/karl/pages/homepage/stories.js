import React from 'react'
import { storiesOf } from '@storybook/react'
import HomePage from './index'

storiesOf('Pages/HomePage', module).add('homepage', () => {
  return <HomePage />
})
