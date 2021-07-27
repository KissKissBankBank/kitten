import React from 'react'
import { number, boolean } from '@storybook/addon-knobs'
import { PillNumberInput } from './index'

export const Default = (args) => (
  <PillNumberInput {...args} />
)

Default.decorators = [
  Story => (
    <div className="story-Container story-Grid story-Grid--large">
      <Story />
    </div>
  ),
]

Default.args = {
  value: 1,
  min: 0,
  max: 99,
  disableInput: false,
  disabled: false,
}

Default.argTypes = {
  value: {
    name: 'value',
    control: { type: 'number' },
  },
  min: {
    name: 'min',
    control: { type: 'number' },
  },
  max: {
    name: 'max',
    control: { type: 'number' },
  },
  step: {
    name: 'step',
    control: { type: 'number' },
  },
  disableInput: {
    name: 'disableInput',
    control: { type: 'boolean' },
  },
  disabled: {
    name: 'disabled',
    control: { type: 'boolean' },
  },
  inputProps: {
    name: 'inputProps',
    control: { type: 'object' },
  },
  minusButtonProps: {
    name: 'minusButtonProps',
    control: { type: 'object' },
  },
  plusButtonProps: {
    name: 'plusButtonProps',
    control: { type: 'object' },
  },
}
