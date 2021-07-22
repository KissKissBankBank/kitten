import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { ButtonImage } from './index'

export const Default = () => (
  <ButtonImage
    tag={text('Tag', 'button')}
    size={select('Size', ['tiny', 'regular', 'big', 'huge'], 'regular')}
    withoutPointerEvents={boolean('withoutPointerEvents', false)}
    withBorder={boolean('withBorder', false)}
    img={{
      src: 'https://placehold.it/100x100/caf4fe/caf4fe',
    }}
  />
)
