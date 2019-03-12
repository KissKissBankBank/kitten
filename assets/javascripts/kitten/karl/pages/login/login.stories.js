import React from 'react'
import { storiesOf } from '@storybook/react'
import Login from './components/login'

storiesOf('Pages/Login', module).add('Login', () => {
  return <Login />
})
