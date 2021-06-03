import React from 'react'
import { boolean, select, number } from '@storybook/addon-knobs'
import { TextInputWithLimit } from './index'

const variantOptions = {
  Andromeda: 'andromeda',
  Orion: 'orion',
}

const sizeOptions = {
  Tiny: 'tiny',
  Regular: 'regular',
  Big: 'big',
  Huge: 'huge',
  Giant: 'giant',
}

const tagOptions = {
  Input: 'input',
  Textarea: 'textarea',
}

export const Default = () => (
  <TextInputWithLimit
    disabled={boolean('Disabled', false)}
    tag={select('Tag', tagOptions, 'input')}
    variant={select('Variant', variantOptions, 'andromeda')}
    limit={number('Limit', 80)}
    size={select('Size', sizeOptions, 'regular')}
  />
)

Default.storyName = 'Text input with limit'
