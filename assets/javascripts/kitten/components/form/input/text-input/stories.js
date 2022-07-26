import React from 'react'
import { TextInput } from './index'
import { SearchIcon } from 'kitten'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

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
  id: 'InputId',
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
  buttonProps: {
    modifier: 'helium',
    children: 'Hello world',
    onClick: action('button onClick'),
  },
  buttonIsInset: false,
  icon: <SearchIcon color="var(--color-grey-900)" />,
  iconPosition: 'left',
  iconAccessibilityLabel: 'Icon accessibility Label',
  onChange: action('input onChange'),
  limit: 100,
  unit: '€',
  unitIsWord: false,
}

Default.argTypes = {
  id: {
    name: 'id',
    control: 'text',
  },
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
  has: {
    name: 'has',
    options: [null, 'button', 'icon', 'limit', 'unit'],
    control: 'select',
  },
  icon: {
    name: 'icon',
    control: 'node',
  },
  buttonProps: 'object',
  buttonIsInset: 'boolean',
  iconPosition: { control: 'inline-radio', options: ['left', 'right'] },
  iconAccessibilityLabel: 'text',
  onChange: 'function',
  limit: 'number',
  unit: 'string',
  unitIsWord: 'boolean',
}

export const AsTextarea = args => <TextInput {...args} />

AsTextarea.args = {
  ...Default.args,
  tag: 'textarea',
}

AsTextarea.argTypes = Default.argTypes

export const AsTextareaAutoResize = args => <TextInput {...args} />

AsTextareaAutoResize.args = {
  ...Default.args,
  tag: 'autoresize',
}

AsTextareaAutoResize.argTypes = Default.argTypes
