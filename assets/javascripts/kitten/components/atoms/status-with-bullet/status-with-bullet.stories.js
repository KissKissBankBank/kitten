import React from 'react'
import { StatusWithBullet } from './index'

export const Default = args => <StatusWithBullet {...args} />

Default.decorators = [
  story => (
    <div className="story-Container story-Grid story-Grid--large">
      <div>{story()}</div>
    </div>
  ),
]

Default.args = {
  statusMessage: 'Message',
  statusType: 'success',
  size: 'tiny',
  weight: 'regular',
  bulletProps: {},
}

Default.argTypes = {
  statusMessage: {
    name: 'statusMessage',
    control: { type: 'text' },
  },
  statusType: {
    name: 'statusType',
    options: ['danger', 'success', 'warning', 'neutral', 'none'],
    control: { type: 'select' },
  },
  size: {
    name: 'size',
    options: ['normal', 'tiny', 'micro'],
    control: { type: 'select' },
  },
  weight: {
    name: 'weight',
    options: ['light', 'regular', 'bold'],
    control: { type: 'select' },
  },
  bulletProps: {
    name: 'bulletProps',
    control: { type: 'object' },
  },
}
