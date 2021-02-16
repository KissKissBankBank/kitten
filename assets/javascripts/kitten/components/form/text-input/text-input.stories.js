import React from 'react'
import { boolean, text, number, select } from '@storybook/addon-knobs'
import { TextInput } from './index'

const tagOptions = {
  Input: 'input',
  Textarea: 'textarea',
}

const variantOptions = {
  Andromeda: 'andromeda',
  Orion: 'orion',
}

export const Default = () => (
  <TextInput
    tag={select('Tag', tagOptions, 'input')}
    variant={select('Variant', variantOptions, 'andromeda')}
    valid={boolean('Valid', false)}
    error={boolean('Error', false)}
    disabled={boolean('Disabled', false)}
    tiny={boolean('Tiny', false)}
    regular={boolean('Regular', true)}
    big={boolean('Big', false)}
    huge={boolean('Huge', false)}
    giant={boolean('Giant', false)}
    center={boolean('Center', false)}
    placeholder={text('Placeholder', 'Les props sont transmises')}
    digits={number('Digits', 12)}
  />
)

Default.decorators = [
  Story => (
    <div className="story-Container story-Grid story-Grid--large">
      <Story />
    </div>
  ),
]
