import React from 'react'
import { action } from '@storybook/addon-actions'
import { RadioButton } from './index'

export default {
  component: RadioButton,
  title: 'Form/RadioButton',
  parameters: {
    component: RadioButton,
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
    variant: 'andromeda',
    design: 'disc',
    children: null,
  },
  argTypes: {
    error: {
      name: 'error',
      control: { type: 'boolean' },
    },
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
    },
    large: {
      name: 'large',
      control: { type: 'boolean' },
    },
    largeContent: {
      name: 'largeContent',
      control: { type: 'boolean' },
    },
    text: {
      name: 'text',
      control: { type: 'text' },
    },
    size: {
      name: 'size',
      options: ['regular', 'big'],
      control: { type: 'inline-radio' },
    },
    variant: {
      name: 'variant',
      options: ['andromeda', 'orion'],
      control: { type: 'inline-radio' },
    },
    design: {
      name: 'design',
      options: ['disc', 'check'],
      control: { type: 'inline-radio' },
    },
    children: {
      name: 'children',
      control: { type: 'text' },
    },
  },
}

export const RadioButtonSet = args => (
  <div>
    <RadioButton name="test" {...args} id="test_1" />
    <RadioButton name="test" {...args} id="test_2" />
    <RadioButton name="test" {...args} id="test_3" />
  </div>
)
