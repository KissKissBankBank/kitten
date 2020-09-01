import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { ButtonImage } from './index'

export const Default = () => (
  <ButtonImage
    tag={text('Tag', 'button')}
    tiny={boolean('Tiny', false)}
    big={boolean('Big', false)}
    huge={boolean('Huge', false)}
    withoutPointerEvents={boolean('withoutPointerEvents', false)}
    withBorder={boolean('withBorder', false)}
    img={{
      src: 'https://placehold.it/100x100/caf4fe/caf4fe',
    }}
  />
)
