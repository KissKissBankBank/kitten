import React from 'react'
import { boolean, select, number } from '@storybook/addon-knobs'
import { TextInputWithLimit } from './index'

const variantOptions = {
  Andromeda: 'andromeda',
  Orion: 'orion',
}

const tagOptions = {
  Input: 'input',
  Textarea: 'textarea',
}

export const Default = () => (
  <div className="story-Container story-Grid story-Grid--large">
    <TextInputWithLimit
      disabled={boolean('Disabled', false)}
      tag={select('Tag', tagOptions, 'input')}
      variant={select('Variant', variantOptions, 'andromeda')}
      limit={number('Limit', 80)}
    />
  </div>
)

Default.storyName = 'Text input with limit'
