import React from 'react'
import { CloseButton } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: CloseButton,
  title: 'Action/CloseButton',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="CloseButton" />,
    },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
}

export const Default = args => <CloseButton {...args} />
