import React from 'react'
import { CheckboxSet } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: CheckboxSet,
  title: 'Form/CheckboxSet',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="CheckboxSet" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
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
    variant: 'orion',
  },
  argTypes: {
    name: {
      name: 'name',
      control: 'text',
    },
    label: {
      name: 'label',
      control: 'text',
    },
    items: {
      name: 'items',
      control: 'object',
    },
    error: {
      name: 'error',
      control: 'boolean',
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
    },
    variant: {
      name: 'variant',
      options: ['andromeda', 'orion'],
      control: 'inline-radio',
    },
  },
}

export const Default = args => <CheckboxSet {...args} />
