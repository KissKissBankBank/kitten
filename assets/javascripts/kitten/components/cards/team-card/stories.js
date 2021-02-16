import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { TeamCard } from './index'

export default {
  component: TeamCard,
  title: 'Cards/TeamCard',
  parameters: {
    component: TeamCard,
  },
  decorators: [
    Story => (
      <div className="story-Container story-Grid">
        <div>
          <Story />
        </div>
      </div>
    ),
  ],
}

export const Default = () => {
  const useLegacy = boolean('Use Legacy socialLink', false)

  return (
    <TeamCard>
      <TeamCard.Image
        src={text(
          'Image url',
          'http://via.placeholder.com/500x500/caf4fe/caf4fe',
        )}
        title={text('Image title', 'Title')}
      />
      <TeamCard.Title
        children={text('children', 'Lorem Ipsum')}
        subTitle={text('Subtitle', 'Consectetur')}
      />
      <TeamCard.Icons
        email={text('Email', 'example@kisskissbankbank.com')}
        phoneNumber={text('Phone number', '06 00 00 00 00')}
        links={
          !useLegacy
            ? [
                {
                  name: 'linkedin',
                  href: text('Linkedin link', 'https://www.linkedin.com'),
                },
                {
                  name: 'twitter',
                  href: text('Twitter link', 'https://www.twitter.com'),
                },
              ]
            : []
        }
        socialLink={useLegacy ? 'https://www.linkedin.com/isLegacyLink' : null}
      />
    </TeamCard>
  )
}
