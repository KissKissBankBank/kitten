import React from 'react'
import { Alert } from './'
import { action } from '@storybook/addon-actions'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Information/Alert',
  component: Alert,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Alert" />,
    },
  },
  args: {
    show: true,
    danger: false,
    warning: false,
    success: false,
    closeButton: true,
    closeButtonLabel: 'Close Button label',
    onAfterClose: action('onAfterClose'),
    children: 'Modifications effectuées, lien ici, Modifications effectuées,',
    icon: null,
    center: false,
    hasBorder: true,
  },
  argTypes: {
    show: {
      name: 'show',
      control: 'boolean',
    },
    danger: {
      name: 'danger',
      control: 'boolean',
    },
    success: {
      name: 'success',
      control: 'boolean',
    },
    warning: {
      name: 'warning',
      control: 'boolean',
    },
    closeButton: {
      name: 'closeButton',
      control: 'boolean',
    },
    closeButtonLabel: {
      name: 'closeButtonLabel',
      control: 'text',
    },
    children: {
      name: 'children',
      control: 'text',
    },
    icon: {
      name: 'icon',
      control: 'object',
    },
    center: {
      control: 'boolean',
    },
    displayIcon: { control: 'boolean' },
  },
}

export const Default = args => <Alert {...args} />

export const WithLink = args => (
  <Alert {...args} show closeButton closeButtonLabel="Close Button Label">
    Bonjour <a href="#">clique ici</a>
  </Alert>
)
