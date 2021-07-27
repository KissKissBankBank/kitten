import React from 'react'
import { PasswordInput } from './index'

export const Default = args => <PasswordInput {...args} />

Default.storyName = 'Password input'

Default.decorators = [
  Story => (
    <div className="story-Container story-Grid story-Grid--large">
      <Story />
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
