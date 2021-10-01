import React from 'react'
import { TextInputWithLimit } from './index'
import { Default as TextInputStory } from '../text-input/text-input.stories.js'

export const Default = args => <TextInputWithLimit {...args} />

Default.storyName = 'Text input with limit'

Default.decorators = [
  story => (
    <div className="story-Container story-Grid story-Grid--large">
      {story()}
    </div>
  ),
]

Default.args = {
  ...TextInputStory.args,
  limit: 80,
}

Default.argTypes = {
  ...TextInputStory.argTypes,
  limit: {
    name: 'limit',
    control: 'number',
  },
}
