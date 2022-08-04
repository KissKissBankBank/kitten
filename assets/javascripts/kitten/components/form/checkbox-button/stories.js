import React from 'react'
import { action } from '@storybook/addon-actions'
import { CheckboxButton } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: CheckboxButton,
  title: 'Form/CheckboxButton',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="CheckboxButton" />
      ),
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
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
  size: 'medium',
}

export const Default = args => (
  <div>
    <CheckboxButton {...args} id="checkbutton_id_1" />
    <CheckboxButton {...args} id="checkbutton_id_2" checked />
    <CheckboxButton {...args} id="checkbutton_id_3" />
  </div>
)

Default.args = {
  ...args,
  onLabelClick: action('label-click'),
  children: 'CheckboxButton label',
}

export const WithLabelAndChildren = args => (
  <div>
    <CheckboxButton {...args} id="checkbutton_id_1" />
    <CheckboxButton {...args} id="checkbutton_id_2" checked />
    <CheckboxButton {...args} id="checkbutton_id_3" />
  </div>
)

WithLabelAndChildren.args = {
  ...args,
  label: 'CheckboxButton Label',
  children: 'CheckboxButton Content',
}

export const WithLabel = args => (
  <div>
    <CheckboxButton {...args} id="checkbutton_id_1" />
    <CheckboxButton {...args} id="checkbutton_id_2" checked />
    <CheckboxButton {...args} id="checkbutton_id_3" />
  </div>
)

WithLabel.args = { ...args, label: 'CheckboxButton Label', children: null }

export const WithBigContent = args => (
  <div>
    <CheckboxButton {...args} id="checkbutton_id_1" />
    <CheckboxButton {...args} id="checkbutton_id_2" checked />
    <CheckboxButton {...args} id="checkbutton_id_3" />
  </div>
)

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

export const WithLabelAndBigContent = args => (
  <div>
    <CheckboxButton {...args} id="checkbutton_id_1" />
    <CheckboxButton {...args} id="checkbutton_id_2" checked />
    <CheckboxButton {...args} id="checkbutton_id_3" />
  </div>
)

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
