import React from 'react'
import { boolean, text, select } from '@storybook/addon-knobs'
import { Loader } from '../../../components/atoms/loader'
import { TextInputWithButton } from './index'

const sizeOptions = {
  Tiny: 'tiny',
  Regular: 'regular',
  Huge: 'huge',
  Giant: 'giant',
}

export const Default = () => (
  <TextInputWithButton
    valid={boolean('Valid', false)}
    error={boolean('Error', false)}
    disabled={boolean('Disabled', false)}
    size={select('Size', sizeOptions, 'regular')}
    buttonValue={<Loader />}
    inputValue={text('inputValue', 'Une valeur')}
    placeholder={text('Les props sont transmises', 'Les props sont transmises')}
  />
)
