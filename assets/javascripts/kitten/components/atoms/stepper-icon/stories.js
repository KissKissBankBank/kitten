import React from 'react'
import { StepperIcon } from './index'

export default {
  title: 'Atoms/StepperIcon',
  component: StepperIcon,
  decorators: [story => <div className="story-Container">{story()}</div>],
  args: {
    state: 'default',
  },
  argTypes: {
    state: {
      name: 'state',
      options: ['default', 'progress', 'inProgress', 'validated', 'valid'],
      control: { type: 'radio' },
    },
  },
}

export const Default = args => <StepperIcon {...args} />
