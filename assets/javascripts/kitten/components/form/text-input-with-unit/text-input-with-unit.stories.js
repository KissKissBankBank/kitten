import React from 'react'
import { TextInputWithUnit } from './index'
import { Default as TextInputStory } from '../text-input/stories.js'

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
  secondUnit:'par mois',
  unitWord: '',
  wrapper: {},
}

Default.argTypes = {
  ...TextInputStory.argTypes,
  unit: {
    name: 'unit',
    control: 'text',
  },
  secondUnit: {
    name: 'secondUnit',
    control: 'text',
  },
  unitWord: {
    name: 'unitWord',
    control: 'text',
  },
  wrapperProps: {
    name: 'wrapperProps',
    description: 'props object passed to the wrapper',
    control: 'object',
  },
}
