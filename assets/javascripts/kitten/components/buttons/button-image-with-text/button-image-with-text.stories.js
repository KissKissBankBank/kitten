import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { ButtonImageWithText } from './index'

export const Default = () => (
  <ButtonImageWithText
    title={text('Title', 'Owner title')}
    description={text('Description', 'description')}
    micro={boolean('Micro', false)}
    largeGutter={boolean('Large gutter', false)}
    titleRegular={boolean('Regular title', false)}
    textRegular={boolean('Regular text', false)}
    avatarProps={{
      src: 'https://placehold.it/100x100/caf4fe/caf4fe',
    }}
  />
)
