import React from 'react'
import { RadioSet } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: RadioSet,
  title: 'Form/RadioSet',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="RadioSet" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  args: defaultArgs,
  argTypes: {
    id: {
      name: 'id',
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
    design: {
      name: 'design',
      options: ['disc', 'check'],
      control: 'inline-radio',
    },
    weight: {
      name: 'weight',
      options: ['400', '500', '600'],
      control: 'inline-radio',
    },
  },
}

const defaultArgs = {
  id: 'story-radio-set',
  error: false,
  disabled: false,
  design: 'disc',
  weight: '500',
}

export const Default = args => <RadioSet {...args} />

Default.args = {
  ...defaultArgs,
  items: [
    {
      text: 'Option A',
      id: 'option-a',
      defaultChecked: true,
    },
    {
      text: 'Option B',
      id: 'option-b',
    },
  ],
}
