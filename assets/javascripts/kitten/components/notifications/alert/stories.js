import React from 'react'
import { Alert } from './'
import { boolean, text } from '@storybook/addon-knobs'

export default {
  title: 'Notifications/Alert',
  component: Alert,
}

export const Info = () => (
  <Alert
    show={boolean('Show', true)}
    closeButton={boolean('Close Button', true)}
    closeButtonLabel={text('Close Button Label', '')}
  >
    {text('Message', 'Alert info message')}
  </Alert>
)

export const Success = () => (
  <Alert
    success
    show={boolean('Show', true)}
    closeButton={boolean('Close Button', true)}
    closeButtonLabel={text('Close Button Label', '')}
  >
    {text('Message', 'Alert success message')}
  </Alert>
)

export const Error = () => (
  <Alert
    error
    show={boolean('Show', true)}
    closeButton={boolean('Close Button', true)}
    closeButtonLabel={text('Close Button Label', '')}
  >
    {text('Message', 'Alert error message')}
  </Alert>
)

export const Warning = () => (
  <Alert
    warning
    show={boolean('Show', true)}
    closeButton={boolean('Close Button', true)}
    closeButtonLabel={text('Close Button Label', '')}
  >
    {text('Message', 'Alert warning message')}
  </Alert>
)

export const WithLink = () => (
  <Alert
    show={boolean('Show', true)}
    closeButton={boolean('Close Button', true)}
    closeButtonLabel={text('Close Button Label', '')}
  >
    <span>
      Bonjour <a href="">clique ici</a>
    </span>
  </Alert>
)
