import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'
import Login from './components/login'

storiesOf('Pages/Login', module)
  .addDecorator(withKnobs)
  .add('Login', () => {
    return (
      <Login
        inputError={boolean('Show input errors', false)}
        passwordError={boolean('Show password errors', false)}
      />
    )
  })
