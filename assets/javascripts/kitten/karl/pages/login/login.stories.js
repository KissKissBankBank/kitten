import React from 'react'
import Login from './components/login'

export default {
  title: 'pages/Login',
  component: Login,
  args: {
    inputError: false,
    passwordError: false,
  },
  argTypes: {
    inputError: { control: 'boolean' },
    passwordError: { control: 'boolean' },
  },
}

export const Default = ({ args }) => <Login {...args} />
