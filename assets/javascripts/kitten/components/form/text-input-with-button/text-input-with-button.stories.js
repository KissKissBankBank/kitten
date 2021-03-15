import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { Loader } from '../../../components/atoms/loader'
import { TextInputWithButton } from './index'

export const Default = () => (
  <TextInputWithButton
    valid={boolean('Valid', false)}
    error={boolean('Error', false)}
    disabled={boolean('Disabled', false)}
    tiny={boolean('Tiny', false)}
    huge={boolean('Huge', false)}
    giant={boolean('Giant', false)}
    buttonValue={<Loader />}
    inputValue={text('inputValue', 'Une valeur')}
    placeholder={text('Les props sont transmises', 'Les props sont transmises')}
  />
)
