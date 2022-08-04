import React from 'react'
import { action } from '@storybook/addon-actions'
import { Radio } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: Radio,
  title: 'Form/Radio',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Radio" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
}

export const Default = args => (
  <div>
    <Radio name="test" {...args} id="test_1" />
    <Radio name="test" {...args} id="test_2" checked />
    <Radio name="test" {...args} id="test_3" />
  </div>
)

Default.args = {
  onChange: action('change'),
  error: false,
  disabled: false,
  text: 'Radio label',
  design: 'disc',
  children: null,
  weight: '500',
}

Default.argTypes = {
  error: {
    name: 'error',
    control: 'boolean',
  },
  disabled: {
    name: 'disabled',
    control: 'boolean',
  },
  text: {
    name: 'text',
    control: 'text',
  },
  design: {
    name: 'design',
    options: ['disc', 'check'],
    control: 'inline-radio',
  },
  children: {
    name: 'children',
    control: 'text',
  },
  weight: {
    name: 'weight',
    options: ['400', '500', '700'],
    control: 'inline-radio',
  },
}
