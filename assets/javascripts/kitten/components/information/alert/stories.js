import React from 'react'
import { Alert } from './'
import { action } from '@storybook/addon-actions'
import { withDesign } from 'storybook-addon-designs'
import { DocsPage } from 'storybook/docs-page'
import { CrossIconNext, COLORS } from 'kitten'

export default {
  title: 'Information/Alert',
  component: Alert,
  decorators: [withDesign],
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Alert" />,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/U2KVyc2tmJXkZObaSDOj71/Design-System-Kitten?node-id=1463%3A8374',
    },
  },
  args: {
    show: true,
    error: false,
    success: false,
    warning: false,
    closeButton: true,
    closeButtonLabel: 'Close Button label',
    onAfterClose: action('onAfterClose'),
    children: 'Modifications effectuées, lien ici, Modifications effectuées,',
    icon: <CrossIconNext width={12} height={12} color={COLORS.background1} />,
    center: false,
  },
  argTypes: {
    show: {
      name: 'show',
      control: 'boolean',
    },
    error: {
      name: 'error',
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
  },
}

export const Default = args => <Alert {...args} />

export const WithLink = args => (
  <Alert {...args} show closeButton closeButtonLabel="Close Button Label">
    Bonjour <a href="#">clique ici</a>
  </Alert>
)
