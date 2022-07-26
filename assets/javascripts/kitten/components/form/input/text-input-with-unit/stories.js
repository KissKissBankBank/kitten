import React from 'react'
import { TextInputWithUnit } from './index'
import { Default as TextInputStory } from '../text-input/stories.js'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: TextInputWithUnit,
  title: 'Form/Input/TextInputWithUnit',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="TextInputWithUnit" />
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
    ...TextInputStory.args,
    unitWord: false,
  },

  argTypes: {
    ...TextInputStory.argTypes,
    unitWord: 'boolean',
  },
}

export const Default = args => <TextInputWithUnit {...args} />
