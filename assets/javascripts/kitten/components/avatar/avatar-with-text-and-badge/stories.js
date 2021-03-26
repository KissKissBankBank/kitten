import React from 'react'
import { AvatarWithTextAndBadge } from './index'
import { text, color, number, boolean, select } from '@storybook/addon-knobs'
import { Text } from '../../../components/typography/text'

export default {
  title: 'Avatar/AvatarWithTextAndBadge',
  component: AvatarWithTextAndBadge,
}

export const Default = () => (
  <AvatarWithTextAndBadge>
    <AvatarWithTextAndBadge.Image
      alt={text('Avatar alt', 'Avatar')}
      size={select('Avatar size', ['regular', 'big'], 'regular')}
      src={boolean('Avatar has image', true) && '/kitten.jpg'}
      text={text('Avatar Text', 'JC')}
      backgroundColor={color('Avatar background color', '#002e7d')}
      textColor={color('Avatar text color', '#fff')}
    >
      {number('Badge value (0 to hide)', 2) > 0 && (
        <AvatarWithTextAndBadge.Badge
          a11yText="2 notifications"
          children={number('Badge value (0 to hide)', 2)}
        />
      )}
    </AvatarWithTextAndBadge.Image>

    <AvatarWithTextAndBadge.Text
      className="k-u-hidden@xxs-down"
      withEllipsisOverflow={true}
    >
      {text('Text', 'Jean Charles Édouard')}
      {boolean('Second line of text', false) && (
        <>
          <br />
          <Text weight="light" size="tiny">
            <span className="k-u-hidden@xs-down">Solde&nbsp;:</span>{' '}
            24&nbsp;093,39&nbsp;€
          </Text>
        </>
      )}
    </AvatarWithTextAndBadge.Text>
  </AvatarWithTextAndBadge>
)
