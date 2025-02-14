import React from 'react'
import { StepperIcon } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Interaction/StepperIcon',
  component: StepperIcon,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="StepperIcon" />,
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
  args: {
    state: 'default',
  },
  argTypes: {
    state: {
      name: 'state',
      options: ['default', 'progress', 'inProgress', 'validated', 'valid'],
      control: 'radio',
    },
  },
}

export const Default = args => <StepperIcon {...args} />
