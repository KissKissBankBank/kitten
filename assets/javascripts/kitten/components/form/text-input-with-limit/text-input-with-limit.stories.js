import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { TextInputWithLimit } from './index'

export const Default = () => (
  <TextInputWithLimit
    disabled={boolean('Disabled', false)}
    tiny={boolean('Tiny', false)}
    tag={text('input', 'input')}
  />
)

Default.storyName = 'Text input with limit'
