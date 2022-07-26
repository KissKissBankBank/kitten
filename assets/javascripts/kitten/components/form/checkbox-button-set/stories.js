import React from 'react'
import { CheckboxButtonSet } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: CheckboxButtonSet,
  title: 'Form/CheckboxButtonSet',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="CheckboxButtonSet" />
      ),
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
  },
}

export const Default = args => <CheckboxButtonSet {...args} />
