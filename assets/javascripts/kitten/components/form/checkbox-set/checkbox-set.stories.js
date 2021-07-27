import React from 'react'
import { CheckboxSet } from './index'

export default {
  component: CheckboxSet,
  title: 'Form/CheckboxSet',
  parameters: {
    component: CheckboxSet,
  },
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid--large">
        <Story />
      </div>
    ),
  ],
  args: {
    name: 'checkbox-set',
    error: false,
    label: 'Checkbox Set Label',
    items: [
      {
        label: 'Option A',
        id: 'option-a',
        defaultChecked: true,
      },
      {
        label: 'Option B',
        id: 'option-b',
      },
      {
        label: 'Option C',
        id: 'option-c',
      },
    ],
    disabled: false,
    variant: 'andromeda',
  },
  argTypes: {
    name: {
      name: 'name',
      control: { type: 'text' },
    },
    label: {
      name: 'label',
      control: { type: 'text' },
    },
    items: {
      name: 'items',
      control: { type: 'object' },
    },
    error: {
      name: 'error',
      control: { type: 'boolean' },
    },
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
    },
    variant: {
      name: 'variant',
      options: ['andromeda', 'orion'],
      control: { type: 'inline-radio' },
    },
  },
}

export const Default = args => <CheckboxSet {...args} />
