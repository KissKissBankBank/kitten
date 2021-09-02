import React from 'react'
import { TextInputWithUnit } from './index'
import { Default as TextInputStory } from '../text-input/text-input.stories.js'

export const Default = args => <TextInputWithUnit {...args} />

Default.decorators = [
  story => (
    <div className="story-Container story-Grid story-Grid--large">
      {story()}
    </div>
  ),
]

Default.args = {
  ...TextInputStory.args,
  unit: '€',
  unitWord: '',
  wrapper: {},
}

Default.argTypes = {
  ...TextInputStory.argTypes,
  unit: {
    name: 'unit',
    control: { type: 'text' },
  },
  unitWord: {
    name: 'unitWord',
    control: { type: 'text' },
  },
  wrapperProps: {
    name: 'wrapperProps',
    description: 'props object passed to the wrapper',
    control: { type: 'object' },
  },
}
