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
    status={boolean('Error?', false) ? 'error' : select("Status", ['ready', 'manage', 'wait', 'accepted', 'denied', 'error'])}
    errorMessage={text('ErrorMessage', null)}
    typeErrorText={e => `File ${e} is not the right file type`}
    sizeErrorText={e => `File ${e} is too large`}
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
    status={boolean('Error?', false) ? 'error' : select("Status", ['ready', 'manage', 'wait', 'accepted', 'denied', 'error'])}
    errorMessageMessage={text('ErrorMessage', null)}
    typeErrorText={e => `File ${e} is not the right file type`}
    sizeErrorText={e => `File ${e} is too large`}
  />
)
