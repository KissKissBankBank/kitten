import React from 'react'
import { PasswordInput } from './index'

export const Default = args => <PasswordInput {...args} />

Default.decorators = [
  story => (
    <div className="story-Container story-Grid story-Grid--large">
      {story()}
    </div>
  ),
]

Default.args = {
  iconLabel: 'Show password',
  hiddenIconLabel: 'Hide password',
  name: 'Password',
}

Default.argTypes = {
  iconLabel: {
    name: 'iconLabel',
    control: 'text',
  },
  hiddenIconLabel: {
    name: 'hiddenIconLabel',
    control: 'text',
  },
  name: {
    name: 'name',
    control: 'text',
  },
}
