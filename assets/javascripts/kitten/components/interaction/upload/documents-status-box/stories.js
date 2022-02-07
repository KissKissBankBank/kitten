import React from 'react'
import { DocumentsStatusBox } from './index'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

export default {
  component: DocumentsStatusBox,
  title: 'Interaction/Upload/DocumentsStatusBox',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="DocumentsStatusBox" />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  args: {
    title: 'Upload your ID documents',
    message:
      'Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    fileList: ['kitten_document_1.jpg', 'kitten_document_2.jpg'],
    retryAction: action('retryAction'),
    retryActionMessage: 'Retry uploading',
    status: 'wait',
  },
  argTypes: {
    title: {
      name: 'title',
      control: 'text',
    },
    message: {
      name: 'message',
      control: 'text',
    },
    fileList: {
      name: 'fileList',
      control: 'object',
    },
    retryAction: {
      name: 'retryAction',
      control: null,
    },
    retryActionMessage: {
      name: 'retryActionMessage',
      control: 'text',
    },
    status: {
      name: 'status',
      options: ['wait', 'accepted', 'denied'],
      control: 'select',
    },
  },
}

export const Default = args => <DocumentsStatusBox {...args} />
