import React from 'react'
import { StepperIcon } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Atoms/StepperIcon',
  component: StepperIcon,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="StepperIcon" />,
    },
  },
}

export const Default = () => (
  <ul>
    <li>
      <StepperIcon state="inProgress" /> <code>inProgress</code>
    </li>
    <li>
      <StepperIcon state="validated" /> <code>validated</code>
    </li>
    <li>
      <StepperIcon state="default" /> <code>default</code>
    </li>
  </ul>
)
