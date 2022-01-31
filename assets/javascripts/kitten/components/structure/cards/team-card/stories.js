import React from 'react'
import { TeamCard } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: TeamCard,
  title: 'Structure/Cards/TeamCard',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="TeamCard" />,
    },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
  argTypes: {
    imageSrc: { name: 'TeamCard.Image: src', control: 'text' },
    imageTitle: { name: 'TeamCard.Image: title', control: 'text' },
    titleChildren: { name: 'TeamCard.Title: children', control: 'text' },
    titleSubtitle: { name: 'TeamCard.Title: subtitle', control: 'text' },
    iconsEmail: { name: 'TeamCard.Icons: email', control: 'text' },
    iconsPhoneNumber: { name: 'TeamCard.Icons: phonenumber', control: 'text' },
    iconsLinks: { name: 'TeamCard.Icons: links', control: 'object' },
  },
  args: {
    imageSrc: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
    imageTitle: 'Title',
    titleChildren: 'Lorem Ipsum',
    titleSubtitle: 'Consectetur',
    iconsEmail: 'example@kisskissbankbank.com',
    iconsPhoneNumber: '06 00 00 00 00',
    iconsLinks: [
      {
        name: 'linkedin',
        href: 'https://www.linkedin.com',
      },
      {
        name: 'twitter',
        href: 'https://www.twitter.com',
      },
    ],
  },
}

export const Default = ({
  imageSrc,
  imageTitle,
  titleChildren,
  titleSubtitle,
  iconsEmail,
  iconsPhoneNumber,
  iconsLinks,
}) => (
  <div aria-label="This card needs a wrapper">
    <TeamCard>
      <TeamCard.Image src={imageSrc} title={imageTitle} />
      <TeamCard.Title children={titleChildren} subTitle={titleSubtitle} />
      <TeamCard.Icons
        email={iconsEmail}
        phoneNumber={iconsPhoneNumber}
        links={iconsLinks}
      />
    </TeamCard>
  </div>
)
