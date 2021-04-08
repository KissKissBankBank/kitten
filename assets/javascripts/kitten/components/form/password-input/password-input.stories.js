import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { PasswordInput } from './index'

const variantOptions = {
  Andromeda: 'andromeda',
  Orion: 'orion',
}

export const Default = () => (
  <PasswordInput
    iconLabel={text('Icon label', 'Show password')}
    hiddenIconLabel={text('Hidden icon label', 'Hide password')}
    placeholder={text('Placeholder', 'Enter your code')}
    variant={select('Variant', variantOptions, 'orion')}
  />
)

Default.storyName = 'Password input'
Default.decorators = [
  Story => (
    <div className="story-Container story-Grid story-Grid--large">
      <Story />
    </div>
  ),
]
