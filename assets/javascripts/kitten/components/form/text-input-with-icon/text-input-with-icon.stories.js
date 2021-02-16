import React from 'react'
import { boolean, text, select } from '@storybook/addon-knobs'
import { TextInputWithIcon } from './index'
import { SearchIcon } from '../../../components/icons/search-icon'

const variantOptions = {
  Andromeda: 'andromeda',
  Orion: 'orion',
}

export const Default = () => (
  <TextInputWithIcon
    disabled={boolean('Disabled', false)}
    placeholder={text('Placeholder', 'Les props sont transmises')}
    variant={select('Variant', variantOptions, 'andromeda')}
    icon={<SearchIcon aria-label="Search icon" width="15" height="15" />}
  />
)

Default.decorators = [
  Story => (
    <div className="story-Container story-Grid story-Grid--large">
      <Story />
    </div>
  ),
]
