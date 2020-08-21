import React from 'react'
import { boolean, text, number, select } from '@storybook/addon-knobs'
import { TextInput } from './index'

const tagOptions = {
  Input: 'input',
  Textarea: 'textarea',
}

export const Default = () => (
  <TextInput
    tag={select('Tag', tagOptions, 'input')}
    valid={boolean('Valid', false)}
    error={boolean('Error', false)}
    disabled={boolean('Disabled', false)}
    tiny={boolean('Tiny', false)}
    huge={boolean('Huge', false)}
    giant={boolean('Giant', false)}
    center={boolean('Center', false)}
    placeholder={text('Placeholder', 'Les props sont transmises')}
    digits={number('Digits', 12)}
  />
)
