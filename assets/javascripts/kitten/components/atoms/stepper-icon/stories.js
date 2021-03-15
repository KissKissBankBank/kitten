import React from 'react'
import { StepperIcon } from './index'

export default {
  title: 'Atoms/StepperIcon',
  component: StepperIcon,
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
