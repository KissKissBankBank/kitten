import React from 'react'
import { ModalFooterInput } from './index'

export default {
  title: 'Form/ModalFooterInput',
  component: ModalFooterInput,
  decorators: [story => <div className="story-Container story-Grid story-Grid--large">{story()}</div>],
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          importString="ModalFooterInput"
        />
      ),
    },
  },
  args: {
    tag: 'input',
    variant: 'orion',
    valid: false,
    error: false,
    disabled: false,
    size: 'regular',
    center: false,
    rounded: false,
    placeholder: 'Les props sont transmises',
    digits: null,
    name: 'text-input',
  },
  argTypes: {
    tag: {
      name: 'tag',
      options: ['input', 'textarea'],
      control: 'inline-radio',
    },
    variant: {
      name: 'variant',
      options: ['andromeda', 'orion'],
      control: 'inline-radio',
    },
    valid: {
      name: 'valid',
      control: 'boolean',
    },
    error: {
      name: 'error',
      control: 'boolean',
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
    },
    size: {
      name: 'size',
      options: ['tiny', 'regular', 'big', 'huge', 'giant'],
      control: 'select',
    },
    center: {
      name: 'center',
      control: 'boolean',
    },
    rounded: {
      name: 'rounded',
      control: 'boolean',
    },
    placeholder: {
      name: 'placeholder',
      control: 'text',
    },
    digits: {
      name: 'digits',
      control: 'number',
    },
    name: {
      name: 'name',
      control: 'text',
    },
  },
}

export const Default = args => <TextInput {...args} />

