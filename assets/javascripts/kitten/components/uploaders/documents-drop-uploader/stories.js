import React from 'react'
import { DocumentsDropUploader } from './index'
import { boolean, text, select } from '@storybook/addon-knobs'

export default {
  component: DocumentsDropUploader,
  title: 'Uploaders/DocumentsDropUploader',
}

export const Default = () => (
  <DocumentsDropUploader
    id="DocumentsDropUploader"
    labelText="Add a document"
    managerTitle="Upload your ID documents"
    managerText="Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
    onChange={e => console.warn('onChange', e)}
    onError={e => console.warn('onError', e)}
    disabled={boolean('Disabled?', false)}
    status={select('Status', ['ready', 'manage', 'error'], 'ready')}
    errorMessage={text('ErrorMessage', null)}
    typeErrorText={e => `File ${e} is not the right file type`}
    sizeErrorText={e => `File ${e} is too large`}
    removeActionMessage={e => `Click to remove ${e}`}
    acceptedMimeTypes={['image/jpeg']}
    acceptedFileSize={1 * 1024 * 1024}
  />
)

export const Manage = () => (
  <DocumentsDropUploader
    id="DocumentsDropUploader"
    labelText="Add a document"
    managerTitle="Upload your ID documents"
    managerText="Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
    initialValue={[{ name: 'kitten.jpg' }]}
    onChange={e => console.warn('onChange', e)}
    onError={e => console.warn('onError', e)}
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
    removeActionMessage={e => `Click to remove ${e}`}
  />
)
