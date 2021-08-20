import React from 'react'
import { PasswordInput } from './index'

export const Default = args => <PasswordInput {...args} />

Default.storyName = 'Password input'

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
    control: { type: 'text' },
  },
  hiddenIconLabel: {
    name: 'hiddenIconLabel',
    control: { type: 'text' },
  },
  name: {
    name: 'name',
    control: { type: 'text' },
  },
}
