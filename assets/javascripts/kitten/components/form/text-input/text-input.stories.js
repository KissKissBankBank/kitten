import React from 'react'
import { TextInput } from './index'

export const Default = (args) => (
  <TextInput
    {...args}
  />
)

Default.decorators = [
  story => (
    <div className="story-Container story-Grid story-Grid--large">
      {story()}
    </div>
  ),
]

Default.args = {
  tag: 'input',
  variant: 'andromeda',
  valid: false,
  error: false,
  disabled: false,
  size: 'regular',
  center: false,
  rounded: false,
  placeholder: 'Les props sont transmises',
  digits: null,
  name: 'text-input',
}

Default.argTypes = {
  tag: {
    name: 'tag',
    options: ['input', 'textarea'],
    control: { type: 'inline-radio' },
  },
  variant: {
    name: 'variant',
    options: ['andromeda', 'orion'],
    control: { type: 'inline-radio' },
  },
  valid: {
    name: 'valid',
    control: { type: 'boolean' },
  },
  error: {
    name: 'error',
    control: { type: 'boolean' },
  },
  disabled: {
    name: 'disabled',
    control: { type: 'boolean' },
  },
  size: {
    name: 'size',
    options: ['tiny', 'regular', 'big', 'huge','giant'],
    control: { type: 'select' },
  },
  center: {
    name: 'center',
    control: { type: 'boolean' },
  },
  rounded: {
    name: 'rounded',
    control: { type: 'boolean' },
  },
  placeholder: {
    name: 'placeholder',
    control: { type: 'text' },
  },
  digits: {
    name: 'digits',
    control: { type: 'number' },
  },
  name: {
    name: 'name',
    control: { type: 'text' },
  },
}
