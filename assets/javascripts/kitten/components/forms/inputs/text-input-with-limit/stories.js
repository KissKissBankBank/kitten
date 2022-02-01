import React from 'react'
import { TextInputWithLimit } from './index'
import { Default as TextInputStory } from '../text-input/stories.js'

export default {
  component: TextInputWithLimit,
  title: 'Forms/Inputs/TextInputWithLimit',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="TextInputWithLimit" />,
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
    limit: 80,
  },

  argTypes: {
    ...TextInputStory.argTypes,
    limit: {
      name: 'limit',
      control: 'number',
    },
  },
}

export const Default = args => <TextInputWithLimit {...args} />
