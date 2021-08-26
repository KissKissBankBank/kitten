import React from 'react'
import { DocumentsStatusBox } from './index'
import { text, select } from '@storybook/addon-knobs'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'


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
  decorators: [story => (
    <div className="story-Container story-Grid story-Grid--large">
      {story()}
    </div>
  )],
  args: {
    title: 'Upload your ID documents',
    message: 'Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    fileList: ['kitten_document_1.jpg', 'kitten_document_2.jpg'],
    retryAction: action('retryAction'),
    retryActionMessage:"Retry uploading",
    status: 'wait',
  },
  argTypes: {
    title: {
      name: 'title',
      control: { type: 'text' }
    },
    message: {
      name: 'message',
      control: { type: 'text' }
    },
    fileList: {
      name: 'fileList',
      control: { type: 'object' }
    },
    retryAction: {
      name: 'retryAction',
      control: null
    },
    retryActionMessage: {
      name: 'retryActionMessage',
      control: { type: 'text' }
    },
    status: {
      name: 'status',
      options: ['wait', 'accepted', 'denied'],
      control: { type: 'select' }
    },

  },
}

export const Default = (args) => (
  <DocumentsStatusBox
  {...args}
  />
)
