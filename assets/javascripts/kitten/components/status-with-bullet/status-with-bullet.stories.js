import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { StatusWithBullet } from './index'

export const Default = () => (
  <StatusWithBullet
    statusMessage={text('Status message', 'Message')}
    statusType={select('Status type', ['success', 'danger'])}
  />
)

Default.decorators = [
  Story => (
    <div className="story-Container story-Grid">
      <Story />
    </div>
  ),
]
