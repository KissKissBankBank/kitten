import React from 'react'
import { action } from '@storybook/addon-actions'
import { Checkbox } from './index'

export default {
  component: Checkbox,
  title: 'Form/Checkbox',
  parameters: {
    component: Checkbox,
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
  argTypes: {
    id: {
      name: 'id',
    },
    label: {
      name: 'label',
    },
    children: {
      name: 'children',
    },
    textProps: {
      name: 'textProps',
      control: { type: 'object' },
    },
    indeterminate: {
      name: 'indeterminate',
      control: { type: 'boolean' },
    },
    error: {
      name: 'error',
      control: { type: 'boolean' },
    },
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
    },
    variant: {
      name: 'variant',
      options: ['andromeda', 'orion'],
      control: { type: 'select' },
    },
    onLabelClick: {
      name: 'onLabelClick',
    },
  },
}

const args = {
  id: 'checkbox_id',
  label: '',
  children: null,
  textProps: {},
  indeterminate: false,
  error: false,
  disabled: false,
  variant: 'andromeda',
  onLabelClick: () => {},
}

export const Default = args => <Checkbox {...args} />

Default.args = {
  ...args,
  onLabelClick: action('label-click'),
  children: 'Checkbox label',
}

export const WithLinkInContent = args => (
  <Checkbox {...args}>
    This label has a <a href="#link">link</a>.
  </Checkbox>
)

WithLinkInContent.args = args

export const WithLabelAndChildren = args => <Checkbox {...args} />

WithLabelAndChildren.args = {
  ...args,
  label: 'Checkbox Label',
  children: 'Checkbox Content',
}

export const WithLabel = args => <Checkbox {...args} />

WithLabel.args = { ...args, label: 'Checkbox Label', children: null }

export const WithBigContent = args => <Checkbox {...args} />

WithBigContent.args = {
  ...args,
  label: '',
  children: (
    <>
      This checkbox doesn't have a `label` prop.
      <br />
      Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis
      consectetur purus sit amet fermentum.
    </>
  ),
}

export const WithLabelAndBigContent = args => <Checkbox {...args} />

WithLabelAndBigContent.args = {
  ...args,
  label: 'This checkbox has a Label prop and a big content',
  children: (
    <>
      Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis
      consectetur purus sit amet fermentum.
      <br />
      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
      ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed
      consectetur. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
      fringilla. Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus,
      porta ac consectetur ac, vestibulum at eros.
    </>
  ),
}
