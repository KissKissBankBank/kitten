import React from 'react'
import { TextareaAutoResize } from './index'
import { action } from '@storybook/addon-actions'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: TextareaAutoResize,
  title: 'Forms/Inputs/TextareaAutoResize',
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  args: {
    id: 'toggle-switch',
    minRows: 1,
    maxRows: 5,
    rows: 1,
    onChange: action('onChange'),
    lineHeight: 18,
  },
  argTypes: {},
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="TextareaAutoResize" />
      ),
    },
  },
}

export const Default = args => {
  return <TextareaAutoResize {...args} />
}
