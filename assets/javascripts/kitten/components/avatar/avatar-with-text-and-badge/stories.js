import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { AvatarWithTextAndBadge } from './index'
import { withKnobs, text, color } from '@storybook/addon-knobs'
import { Text } from '../../../components/typography/text'

const Container = styled.div`
  padding: 20px;
`

storiesOf('Avatar/AvatarWithTextAndBadge', module)
  .addDecorator(withKnobs)

  .add('With avatar', () => (
    <Container>
      <AvatarWithTextAndBadge>
        <AvatarWithTextAndBadge.Image
          src={text('Image src', 'https://via.placeholder.com/40x40.png')}
          alt={text('Image Alt', 'Avatar')}
        >
          <AvatarWithTextAndBadge.Badge
            a11yText={text('Accessibility Badge text', '2 notifications')}
            children={text('Badge value', '2')}
          />
        </AvatarWithTextAndBadge.Image>

        <AvatarWithTextAndBadge.Text
          textClassName="k-u-hidden@xxs-down"
          withEllipsisOverflow={true}
        >
          <Text
            lineHeight="normal"
            weight="regular"
            children={text('Text', 'Jean Charles Édouard')}
          />
        </AvatarWithTextAndBadge.Text>
      </AvatarWithTextAndBadge>
    </Container>
  ))

  .add('With text', () => (
    <Container>
      <AvatarWithTextAndBadge>
        <AvatarWithTextAndBadge.Image
          text={text('', 'JC')}
          backgroundColor={color('Avatar background color', '#002e7d')}
          textColor={color('Text color', '#fff')}
        >
          <AvatarWithTextAndBadge.Badge
            a11yText={text('Accessibility Badge text', '2 notifications')}
            children={text('Badge value', '2')}
            backgroundColor={color('Badge color', '#19b4fa')}
          />
        </AvatarWithTextAndBadge.Image>

        <AvatarWithTextAndBadge.Text
          textClassName="k-u-hidden@xxs-down"
          withEllipsisOverflow={true}
        >
          <Text lineHeight="normal" weight="regular">
            Jean Charles Édouard
          </Text>
          <br />
          <Text weight="light">
            <Text className="k-u-weight-light k-u-hidden@xs-down">
              Solde&nbsp;:
            </Text>{' '}
            24&nbsp;093,39&nbsp;€
          </Text>
        </AvatarWithTextAndBadge.Text>
      </AvatarWithTextAndBadge>
    </Container>
  ))