import React from 'react'
import { PillNumberInput } from './index'

export const Default = args => <PillNumberInput {...args} />

Default.decorators = [
  story => (
    <div className="story-Container story-Grid story-Grid--large">
      {story()}
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
    control: 'number',
  },
  min: {
    name: 'min',
    control: 'number',
  },
  max: {
    name: 'max',
    control: 'number',
  },
  step: {
    name: 'step',
    control: 'number',
  },
  disableInput: {
    name: 'disableInput',
    control: 'boolean',
  },
  disabled: {
    name: 'disabled',
    control: 'boolean',
  },
  inputProps: {
    name: 'inputProps',
    control: 'object',
  },
  minusButtonProps: {
    name: 'minusButtonProps',
    control: 'object',
  },
  plusButtonProps: {
    name: 'plusButtonProps',
    control: 'object',
  },
}
