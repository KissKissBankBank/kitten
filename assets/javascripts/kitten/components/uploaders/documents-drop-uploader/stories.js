import React from 'react'
import { DocumentsDropUploader } from './index'
import { boolean, text, select } from '@storybook/addon-knobs'

export default {
  component: DocumentsDropUploader,
  title: 'Uploaders/DocumentsDropUploader',
}

export const StatusReady = () => (
  <DocumentsDropUploader
    id="DocumentsDropUploader"
    labelText="Add a document"
    managerTitle="Upload your ID documents"
    managerText="Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
    onChange={e => console.warn('onChange', e)}
    disabled={boolean('Disabled?', false)}
    status={
      boolean('Error?', false)
        ? 'error'
        : select('Status', [
            'ready',
            'manage',
            'wait',
            'accepted',
            'denied',
            'error',
          ])
    }
    errorMessage={text('ErrorMessage', null)}
    typeErrorText={e => `File ${e} is not the right file type`}
    sizeErrorText={e => `File ${e} is too large`}
    waitMessage="This operation can take up to 48 hours"
    deniedMessage="Your documents are not valid"
    retryActionMessage="Click to load another document"
    removeActionMessage={e => `Click to remove ${e}`}
  />
)

export const StatusManage = () => (
  <DocumentsDropUploader
    id="DocumentsDropUploader"
    labelText="Add a document"
    managerTitle="Upload your ID documents"
    managerText="Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
    initialValue={[{ name: 'kitten.jpg' }]}
    onChange={e => console.warn('onChange', e)}
    disabled={boolean('Disabled?', false)}
    status={
      boolean('Error?', false)
        ? 'error'
        : select('Status', [
            'ready',
            'manage',
            'wait',
            'accepted',
            'denied',
            'error',
          ])
    }
    errorMessageMessage={text('ErrorMessage', null)}
    typeErrorText={e => `File ${e} is not the right file type`}
    sizeErrorText={e => `File ${e} is too large`}
    waitMessage="This operation can take up to 48 hours"
    deniedMessage="Your documents are not valid"
    retryActionMessage="Click to load another document"
    removeActionMessage={e => `Click to remove ${e}`}
  />
)

export const StatusDenied = () => (
  <DocumentsDropUploader
    id="DocumentsDropUploader"
    labelText="Add a document"
    managerTitle="Upload your ID documents"
    managerText="Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
    initialValue={[
      { name: 'kitten_valid.jpg' },
      { name: 'kitten_invalid.jpg' },
    ]}
    onChange={e => console.warn('onChange', e)}
    disabled={boolean('Disabled?', false)}
    status="deniad"
    errorMessageMessage={text('ErrorMessage', null)}
    typeErrorText={e => `File ${e} is not the right file type`}
    sizeErrorText={e => `File ${e} is too large`}
    acceptedTitle="Your document was accepted"
    waitTitle="This operation can take up to 48 hours"
    waitMessage="This operation can take up to 48 hours"
    deniedTitle="Some documents are not valid"
    deniedMessage="Your documents are not valid"
    retryActionMessage="Click to load another document"
    removeActionMessage={e => `Click to remove ${e}`}
  />
)
