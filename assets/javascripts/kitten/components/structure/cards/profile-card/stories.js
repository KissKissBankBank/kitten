import React from 'react'
import { DocsPage } from 'storybook/docs-page'
import { ProfileCard } from './index'
import { Text, EnvelopeIconNext, Button, AirplaneIconNext } from 'kitten'

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
      <div className="story-Container story-Grid story-Grid">
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
      <Text size="huge" weight="bold" tag="p" className="k-u-margin-double">
        S!CK, le magazine cross-culture
      </Text>
      <Text size="small" tag="p">
        Chaque trimestre, soutenez l'indépendafnce d'un magazine 
        cross-culture de 164 pages. Garanti loin des kiosques et 
        sans publicité !
        <p className="k-u-margin-bottom-single">_</p>
      </Text>
      <Text size="micro" transform="uppercase" weight="bold">
        530 ABONNÉS
      </Text>
    </ProfileCard.Content>

    <ProfileCard.Action>
      <Button rounded modifier="helium" size="small">
        <EnvelopeIconNext />
        Nous écrire
      </Button>
      <Button rounded modifier="hydrogen" size="small">
        <AirplaneIconNext />
        Partager
      </Button>
    </ProfileCard.Action>
  </ProfileCard>
)


export const OneButton = () => (
  <ProfileCard>
    <ProfileCard.Header
      imageProps={{
          alt: '',
          src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
        }}
    />

    <ProfileCard.Content>
      <Text size="huge" weight="bold" tag="p" className="k-u-margin-double">
        S!CK, le magazine cross-culture
      </Text>
      <Text size="small" tag="p">
        Chaque trimestre, soutenez l'indépendafnce d'un magazine 
        cross-culture de 164 pages. Garanti loin des kiosques et 
        sans publicité !
        <p className="k-u-margin-bottom-single">_</p>
      </Text>
      <Text size="micro" transform="uppercase" weight="bold">
        530 ABONNÉS
      </Text>
    </ProfileCard.Content>

    <ProfileCard.Action>
      <Button rounded modifier="helium" size="small">
        Découvrir le projet
      </Button>
    </ProfileCard.Action>
  </ProfileCard>
)
