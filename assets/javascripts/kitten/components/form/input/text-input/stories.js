import React from 'react'
import { TextInput } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Form/Input/TextInput',
  component: TextInput,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="TextInput" />,
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

export const Default = args => <TextInput {...args} />

Default.args = {
  tag: 'input',
  valid: false,
  error: false,
  disabled: false,
  size: 'medium',
  center: false,
  rounded: false,
  placeholder: 'Les props sont transmises',
  name: 'text-input',
  darkBackground: false,
}

Default.argTypes = {
  tag: {
    name: 'tag',
    options: ['input', 'textarea', 'autoresize'],
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
    options: ['small', 'medium', 'large', 'huge', 'giant'],
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
  darkBackground: {
    name: 'darkBackground',
    control: 'boolean',
  },
}

export const AsTextarea = args => <TextInput {...args} />

AsTextarea.args = {
  ...Default.args,
  tag: 'textarea',
}

AsTextarea.argTypes = Default.args

export const AsTextareaAutoResize = args => <TextInput {...args} />

AsTextareaAutoResize.args = {
  ...Default.args,
  tag: 'autoresize',
}

AsTextareaAutoResize.argTypes = Default.args
