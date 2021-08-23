import React from 'react'
import { VerticalStroke } from './'

export default {
  title: 'Atoms/VerticalStroke',
  component: VerticalStroke,
  decorators: [
    story => (
      <div className="story-Container story-Grid">
        <div>{story()}</div>
      </div>
    ),
  ],
  args: {
    size: 'default',
  },
  argTypes: {
    size: {
      name: 'size',
      options: ['tiny', 'default', 'big', 'huge'],
      control: { type: 'radio' },
    },
  },
}

export const Default = args => <VerticalStroke {...args} />
