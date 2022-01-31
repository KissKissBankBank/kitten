import React from 'react'
import { action } from '@storybook/addon-actions'
import { Checkbox } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: Checkbox,
  title: 'Forms/Checkbox',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Checkbox" />,
    },
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
      control: 'object',
    },
    indeterminate: {
      name: 'indeterminate',
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
