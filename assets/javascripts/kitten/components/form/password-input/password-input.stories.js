import React from 'react'
import { text } from '@storybook/addon-knobs'
import { PasswordInput } from './index'

export const Default = () => (
  <PasswordInput
    iconLabel={text('Icon label', 'Show password')}
    hiddenIconLabel={text('Hidden icon label', 'Hide password')}
    placeholder={text('Placeholder', 'Enter your code')}
  />
)
