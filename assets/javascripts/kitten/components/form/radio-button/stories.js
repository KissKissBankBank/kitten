import React from 'react'
import { action } from '@storybook/addon-actions'
import { RadioButton } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: RadioButton,
  title: 'Form/RadioButton',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="RadioButton" />,
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
    onChange: action('change'),
    error: false,
    disabled: false,
    large: false,
    largeContent: false,
    text: 'RadioButton label',
    size: 'regular',
    variant: 'orion',
    design: 'disc',
    children: null,
    fontWeight: 'regular',
    paragraphStyle: false,
  },
  argTypes: {
    error: {
      name: 'error',
      control: 'boolean',
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
    },
    large: {
      name: 'large',
      control: 'boolean',
    },
    largeContent: {
      name: 'largeContent',
      control: 'boolean',
    },
    text: {
      name: 'text',
      control: 'text',
    },
    size: {
      name: 'size',
      options: ['small', 'regular', 'big'],
      control: 'inline-radio',
    },
    variant: {
      name: 'variant',
      options: ['andromeda', 'orion'],
      control: 'inline-radio',
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
    fontWeight: {
      name: 'fontWeight',
      options: ['light', 'regular', 'bold'],
      control: 'inline-radio',
    },
    paragraphStyle: {
      name: 'paragraphStyle',
      control: 'boolean',
    },
  },
}

export const Default = args => (
  <div>
    <RadioButton name="test" {...args} id="test_1" />
    <RadioButton name="test" {...args} id="test_2" />
    <RadioButton name="test" {...args} id="test_3" />
  </div>
)

export const RadioButtonsWithParagraph = args => (
  <div>
    <RadioButton name="test" {...args} id="test_1" />
    <RadioButton name="test" {...args} id="test_2" />
    <RadioButton name="test" {...args} id="test_3" />
  </div>
)

RadioButtonsWithParagraph.args = {
  onChange: action('change'),
  error: false,
  disabled: false,
  large: false,
  largeContent: false,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  size: 'big',
  variant: 'orion',
  design: 'disc',
  children: null,
  fontWeight: 'light',
  paragraphStyle: true,
}
