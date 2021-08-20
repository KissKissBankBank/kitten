import React from 'react'
import { ToggleSwitch } from './index'
import { action } from '@storybook/addon-actions'

export default {
  component: ToggleSwitch,
  title: 'Form/ToggleSwitch',
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  args: {
    id: 'toggle-switch',
    disabled: false,
    big: false,
    label: 'ToggleSwitch label',
    isLabelVisible: true,
    reverseOrder: false,
    locked: false,
    onChange: action('onChange'),
  },
  argTypes: {
    id: {
      name: 'id',
      control: { type: 'text' },
    },
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
    },
    big: {
      name: 'big',
      control: { type: 'boolean' },
    },
    label: {
      name: 'label',
      control: { type: 'text' },
    },
    isLabelVisible: {
      name: 'isLabelVisible',
      control: { type: 'boolean' },
    },
    reverseOrder: {
      name: 'reverseOrder',
      control: { type: 'boolean' },
    },
    locked: {
      name: 'locked',
      control: { type: 'boolean' },
    },
    onChange: {
      name: 'onChange',
      control: { type: 'function' },
    },
  },
}

export const Default = args => {
  return <ToggleSwitch {...args} />
}
