import React from 'react'
import { text, number, boolean } from '@storybook/addon-knobs'
import { ButtonImageWithTextAndBadge } from './index'

export const Default = () => (
  <ButtonImageWithTextAndBadge
    isExpanded={boolean('isExpanded', false)}
    srcImg={text('srcImg', 'http://via.placeholder.com/300x300')}
    widthImg={number('widthImg', 300)}
    heightImg={number('heightImg', 300)}
    altImg={text('altImg', 'Custom alt')}
    notifications={text('notifications', '!')}
    badgeColor="#FF0000"
    title={text('Title', 'Title')}
    text={text('Text', 'Text')}
  />
)
