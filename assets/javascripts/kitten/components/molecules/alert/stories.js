import React from 'react'
import { Alert } from './'
import { action } from '@storybook/addon-actions'
import { DocsPage } from 'storybook/docs-page'
import { CrossIcon } from '../../../components/graphics/icons/cross-icon'
import COLORS from '../../../constants/colors-config'

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
    closeButtonLabel: 'Close Button label',
    onAfterClose: action('onAfterClose'),
    children:
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
    iconSvg: <CrossIcon width={12} height={12} color={COLORS.background1} />,
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
    iconSvg: {
      name: 'iconSvg',
      control: 'object',
    },
  },
}

export const Default = args => <Alert {...args} />

export const WithLink = args => (
  <Alert {...args} show closeButton closeButtonLabel="Close Button Label">
    Bonjour <a href="">clique ici</a>
  </Alert>
)
