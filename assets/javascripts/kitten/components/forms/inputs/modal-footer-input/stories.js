import React from 'react'
import { ModalFooterInput } from './index'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Form/ModalFooterInput',
  component: ModalFooterInput,
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="ModalFooterInput" />
      ),
    },
  },
  args: {
    disabled: false,
    placeholder: 'Les props sont transmises',
    'aria-label': 'Input label',
    id: 'Id',
  },
  argTypes: {
    disabled: {
      name: 'disabled',
      control: 'boolean',
    },
    placeholder: {
      name: 'placeholder',
      control: 'text',
    },
  },
}

export const Default = args => (
  <ModalFooterInput
    {...args}
    onChange={action('onChange')}
    onSubmit={action('onSubmit')}
  />
)

export const WithDefaultValue = args => (
  <ModalFooterInput
    {...args}
    defaultValue="Hello, world"
    onChange={action('onChange')}
    onSubmit={action('onSubmit')}
  />
)
