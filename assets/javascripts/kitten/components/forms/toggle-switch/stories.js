import React from 'react'
import { ToggleSwitch } from './index'
import { action } from '@storybook/addon-actions'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: ToggleSwitch,
  title: 'Forms/ToggleSwitch',
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
      control: 'text',
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
    },
    big: {
      name: 'big',
      control: 'boolean',
    },
    label: {
      name: 'label',
      control: 'text',
    },
    isLabelVisible: {
      name: 'isLabelVisible',
      control: 'boolean',
    },
    reverseOrder: {
      name: 'reverseOrder',
      control: 'boolean',
    },
    locked: {
      name: 'locked',
      control: 'boolean',
    },
    onChange: {
      name: 'onChange',
      control: null,
    },
  },
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="ToggleSwitch" />
      ),
    },
  },
}

export const Default = args => {
  return <ToggleSwitch {...args} />
}
