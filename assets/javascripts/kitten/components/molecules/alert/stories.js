import React from 'react'
import { Alert } from './'
import { boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Molecules/Alert',
  component: Alert,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Alert" />,
    },
  },
  args: {
    show: true,
    error: false,
    success: false,
    warning: false,
    closeButton: true,
    closeButtonLabel: "Close Button label",
    onAfterClose: action('onAfterClose'),
    children: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
  },
  argTypes: {
    show: {
      name: 'show',
      control: { type: 'boolean' },
    },
    error: {
      name: 'error',
      control: { type: 'boolean' },
    },
    success: {
      name: 'success',
      control: { type: 'boolean' },
    },
    warning: {
      name: 'warning',
      control: { type: 'boolean' },
    },
    closeButton: {
      name: 'closeButton',
      control: { type: 'boolean' },
    },
    closeButtonLabel: {
      name: 'closeButtonLabel',
      control: { type: 'text' },
    },
    children: {
      name: 'children',
      control: { type: 'text' },
    }
  },
}

export const Default = (args) => (
  <Alert {...args} />
)

export const WithLink = (args) => (
  <Alert
    {...args}
    show
    closeButton
    closeButtonLabel="Close Button Label"
  >
    Bonjour <a href="">clique ici</a>
  </Alert>
)
