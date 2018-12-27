import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { SimpleUploader } from './simple-uploader'

storiesOf('Uploaders/SimpleUploader', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <SimpleUploader
        fileName={text('Filename', 'Filename')}
        disabled={boolean('Disabled', false)}
        deletable={boolean('Deletable', true)}
        buttonLabel={text('Button Label', 'Choose a file')}
        acceptedFiles={text('Accepted files', '.jpg,.jpeg,.gif,.png')}
        maxSize={number('Max size', 5 * 1024 * 1024)}
        base64={boolean('base64', false)}
        onSuccess={action('success')}
        onError={action('error')}
      />
    )),
  )
