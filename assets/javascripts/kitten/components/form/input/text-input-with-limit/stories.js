import React from 'react'
import { TextInputWithLimit } from './index'
import { Default as TextInputStory } from '../text-input/stories.js'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: TextInputWithLimit,
  title: 'Form/Input/TextInputWithLimit',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="TextInputWithLimit" />
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
  args: TextInputStory.args,
  argTypes: TextInputStory.argTypes,
}

export const Default = args => <TextInputWithLimit {...args} />
