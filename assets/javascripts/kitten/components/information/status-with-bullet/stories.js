import React from 'react'
import { StatusWithBullet } from './index'

export default {
  component: StatusWithBullet,
  title: 'Information/StatusWithBullet',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="StatusWithBullet" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],


  args: {
    statusMessage: 'Message',
    statusType: 'success',
    size: 'tiny',
    weight: 'regular',
    bulletProps: {},
  },

  argTypes: {
    statusMessage: {
      name: 'statusMessage',
      control: 'text',
    },
    statusType: {
      name: 'statusType',
      options: ['danger', 'success', 'warning', 'neutral', 'none'],
      control: 'select',
    },
    size: {
      name: 'size',
      options: ['normal', 'tiny', 'micro'],
      control: 'select',
    },
    weight: {
      name: 'weight',
      options: ['light', 'regular', 'bold'],
      control: 'select',
    },
    bulletProps: {
      name: 'bulletProps',
      control: 'object',
    },
  },
}

export const Default = args => <StatusWithBullet {...args} />
