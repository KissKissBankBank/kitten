import React from 'react'
import { text } from '@storybook/addon-knobs'
import { BackerCard } from './index'
import { Text } from '../../../components/typography/text'

const Description = () => (
  <>
    Lorem{' '}
    <Text color="primary1" weight="regular">
      ipsum
    </Text>{' '}
    dolor sit amet, <br />
    <Text weight="regular">consectetur adipiscing elit</Text>…
  </>
)

export default {
  title: 'Cards/BackerCard',
  component: BackerCard,
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid--thin">
        <Story />
      </div>
    ),
  ],
}

export const Default = () => (
  <BackerCard
    title={text('Backer title', 'Backer name')}
    subtitle={text('Backer subtitle', 'Backer subtitle')}
    imgProps={{ src: 'https://placeimg.com/80/80/any' }}
    description={<Description />}
  />
)
