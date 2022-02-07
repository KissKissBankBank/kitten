import React from 'react'
import { ButtonQuestionMarkIcon } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: ButtonQuestionMarkIcon,
  title: 'Action/ButtonQuestionMarkIcon',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="ButtonQuestionMarkIcon" />
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
}

export const Default = () => <ButtonQuestionMarkIcon />
