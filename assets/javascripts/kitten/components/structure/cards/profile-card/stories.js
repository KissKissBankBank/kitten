import React from 'react'
import { DocsPage } from 'storybook/docs-page'
import { ProfileCard } from './index'
import { Text, EnveloppeIconNext } from 'kitten'

export default {
  title: 'Structure/Cards/ProfileCard',
  component: ProfileCard,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="ProfileCard" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  // args,
  // argTypes,
}

export const Default = () => (
  <ProfileCard>
    <ProfileCard.Header
      imageProps={{
          alt: '',
          src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
        }}
    />

    <ProfileCard.Content>
      <Text size="huge" weight="bold" tag="p">
        S!CK, le magazine cross-culture
      </Text>
      <Text size="small">
        Chaque trimestre, soutenez l'indépendafnce d'un magazine 
        cross-culture de 164 pages. Garanti loin des kiosques et 
        sans publicité !
      </Text>
      <Text size="micro" transform="uppercase">
        530 ABONNÉS
      </Text>
    </ProfileCard.Content>
  </ProfileCard>
)
