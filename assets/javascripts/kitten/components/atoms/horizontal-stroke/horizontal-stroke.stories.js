import React from 'react'
import { COLORS } from '../../..'
import { HorizontalStroke } from './index'

export const Default = args => <HorizontalStroke {...args} />

Default.decorators = [
  story => (
    <div className="story-Container">
      <div>{story()}</div>
    </div>
  ),
]

Default.args = {
  size: 'default',
  modifier: null,
  customSize: null,
  color: COLORS.font1,
}

Default.argTypes = {
  size: {
    name: 'size',
    options: ['micro', 'tiny', 'default', 'big', 'huge'],
    control: { type: 'select' },
  },
  modifier: {
    name: 'modifier',
    options: {
      null: null,
      primary: 'primary',
      secondary: 'secondary',
      tertiary: 'tertiary',
      quaternary: 'quaternary',
      quinary: 'quinary',
      senary: 'senary',
      septenary: 'septenary',
    },
    control: { type: 'select' },
  },
  customSize: {
    name: 'customSize',
    control: { type: 'object' },
  },
  color: {
    name: 'color',
    control: { type: 'color' },
  },
}
