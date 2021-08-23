import React from 'react'
import { Tag } from './index'

export default {
  title: 'Atoms/Tag',
  component: Tag,
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid">
        <div>{story()}</div>
      </div>
    ),
  ],
  args: {
    type: 'info',
    children: '5 contributors',
  },
  argTypes: {
    type: {
      name: 'type',
      options: ['info', 'warning', 'success', 'error', 'disabled'],
      control: { type: 'radio' },
    },
  },
}

export const Default = args => {
  return <Tag {...args} />
}
