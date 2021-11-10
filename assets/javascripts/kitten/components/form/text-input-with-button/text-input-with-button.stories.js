import React from 'react'
import { SearchIcon } from '../../../components/graphics/icons/search-icon'
import { TextInputWithButton } from './index'
import { Default as TextInputStory } from '../text-input/text-input.stories.js'
import { buttonModifiers } from '../../../components/molecules/buttons/button'

export const Default = args => <TextInputWithButton {...args} />

Default.decorators = [
  story => (
    <div className="story-Container story-Grid story-Grid--large">
      {story()}
    </div>
  ),
]

Default.args = {
  ...TextInputStory.args,
  inputValue: 'Input Value',
  inset: false,
  buttonValue: <SearchIcon />,
  modifier: 'helium',
}

Default.argTypes = {
  ...TextInputStory.argTypes,
  inputValue: {
    name: 'inputValue',
    control: 'text',
  },
  buttonValue: {
    name: 'buttonValue',
    control: 'text',
  },
  inset: {
    name: 'inset',
    control: 'boolean',
  },
  modifier: {
    name: 'modifier',
    options: buttonModifiers,
    control: 'select',
  },
}
