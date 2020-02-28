import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { AvatarWithTextAndBadge } from './index'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Text } from '../../../components/typography/text'

const Container = styled.div`
  padding: 20px;
`

storiesOf('Avatar/AvatarWithTextAndBadge', module)
  .addDecorator(withKnobs)

  .add('With avatar', () => (
    <Container>
      <AvatarWithTextAndBadge
        imageProps={{
          src: text('Image src', 'https://via.placeholder.com/40x40.png'),
          alt: text('Image Alt', 'Avatar'),
        }}
        notifications={text('Total notifications', '2')}
        text={text('Text', 'Jean Charles')}
      />
    </Container>
  ))

  .add('With text', () => (
    <Container>
      <AvatarWithTextAndBadge
        imageProps={{
          text: (
            <Text size="micro" weight="bold">
              JC
            </Text>
          ),
        }}
        notifications={text('Total notifications', '2')}
        text={
          <Text lineHeight="normal" weight="bold">
            Jean Charles
          </Text>
        }
        subText={<Text weight="light">Solde : 1&nbsp;000,97&nbsp;€</Text>}
      />
    </Container>
  ))
