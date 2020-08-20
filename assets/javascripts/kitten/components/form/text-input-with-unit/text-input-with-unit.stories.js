import React from 'react'
import { boolean, text, number } from '@storybook/addon-knobs'
import { TextInputWithUnit } from './index'

export const Default = () => (
  <TextInputWithUnit
    valid={boolean('Valid', false)}
    disabled={boolean('Disabled', false)}
    tiny={boolean('Tiny', false)}
    huge={boolean('Huge', false)}
    giant={boolean('Giant', false)}
    center={boolean('Center', false)}
    error={boolean('Error', false)}
    unit={text('Unit', '€')}
    digits={number('Digits', 0)}
  />
)
