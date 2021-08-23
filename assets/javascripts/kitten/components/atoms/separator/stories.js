import React from 'react'
import { Separator } from './'

export default {
  title: 'Atoms/Separator',
  component: Separator,
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
  args: {
    darker: false,
  },
  argTypes: {
    darker: {
      name: 'darker',
      control: { type: 'boolean' },
    },
  },
}

export const Default = args => <Separator {...args} />
