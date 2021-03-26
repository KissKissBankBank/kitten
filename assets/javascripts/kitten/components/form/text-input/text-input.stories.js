import React from 'react'
import { boolean, text, number, select } from '@storybook/addon-knobs'
import { TextInput } from './index'

const tagOptions = {
  Input: 'input',
  Textarea: 'textarea',
}

const sizeOptions = {
  Tiny: 'tiny',
  Regular: 'regular',
  Big: 'big',
  Huge: 'huge',
  Giant: 'giant',
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
    size={select('Size', sizeOptions, 'regular')}
    center={boolean('Center', false)}
    placeholder={text('Placeholder', 'Les props sont transmises')}
    digits={number('Digits', 12)}
  />
)
