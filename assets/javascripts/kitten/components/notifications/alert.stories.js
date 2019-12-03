import React from 'react'
import { Alert } from './alert'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .add('info', () => (
    <Alert
      show={boolean('Show', true)}
      closeButton={boolean('Close Button', true)}
      closeButtonLabel={text('Close Button Label', '')}
    >
      {text('Message', 'Alert info message')}
    </Alert>
  ))
  .add('success', () => (
    <Alert
      success
      show={boolean('Show', true)}
      closeButton={boolean('Close Button', true)}
      closeButtonLabel={text('Close Button Label', '')}
    >
      {text('Message', 'Alert success message')}
    </Alert>
  ))
  .add('error', () => (
    <Alert
      error
      show={boolean('Show', true)}
      closeButton={boolean('Close Button', true)}
      closeButtonLabel={text('Close Button Label', '')}
    >
      {text('Message', 'Alert error message')}
    </Alert>
  ))
  .add('warning', () => (
    <Alert
      warning
      show={boolean('Show', true)}
      closeButton={boolean('Close Button', true)}
      closeButtonLabel={text('Close Button Label', '')}
    >
      {text('Message', 'Alert warning message')}
    </Alert>
  ))
  .add('with link', () => (
    <Alert
      show={boolean('Show', true)}
      closeButton={boolean('Close Button', true)}
      closeButtonLabel={text('Close Button Label', '')}
    >
      <span>
        Bonjour <a href="">clique ici</a>
      </span>
    </Alert>
  ))
