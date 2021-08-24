import React from 'react'
import { DocumentsStatusBox } from './index'
import { text, select } from '@storybook/addon-knobs'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: DocumentsStatusBox,
  title: 'Molecules/Upload/DocumentsStatusBox',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="DocumentsStatusBox" />
      ),
    },
  },
}

export const Default = () => (
  <DocumentsStatusBox
    title={text('title', 'Upload your ID documents')}
    message={text(
      'message',
      'Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    )}
    fileList={['kitten_document_1.jpg', 'kitten_document_2.jpg']}
    retryAction={e => console.warn('retryAction', e)}
    retryActionMessage="Retry uploading"
    status={select('Status', ['wait', 'accepted', 'denied'], 'wait')}
  />
)
