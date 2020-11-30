import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import Login from './components/login'

export default {
  title: 'pages/Login',
  component: Login,
}

export const Default = () => (
  <Login
    inputError={boolean('Show input errors', false)}
    passwordError={boolean('Show password errors', false)}
  />
)
