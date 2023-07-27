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
    closeButton: true,
    closeButtonLabel: 'Close Button label',
    onAfterClose: action('onAfterClose'),
    children: 'Modifications effectuées, lien ici, Modifications effectuées,',
    icon: null,
    center: false,
    iconHasBorder: true,
    displayIcon: true,
    status: 'info',
  },
  argTypes: {
    show: {
      name: 'show',
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
    iconHasBorder: {
      control: 'boolean',
    },
    status: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger', 'news'],
    },
  },
}

export const Default = args => <Alert {...args} />

export const WithLink = args => (
  <Alert {...args} show closeButton closeButtonLabel="Close Button Label">
    Bonjour <a href="#">clique ici</a>
  </Alert>
)
