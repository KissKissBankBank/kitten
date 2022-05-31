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
      <div className="story-Container story-Grid story-Grid">{story()}</div>
    ),
  ],
}

export const Default = () => (
  <ProfileCard>
    <ProfileCard.Avatar
      imageProps={{
        alt: '',
        src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
      }}
    />

    <ProfileCard.Content>
      <Text size="huge" weight="700" tag="p" className="k-u-margin-double">
        Lorem Ipsum
      </Text>
      <Text size="small" tag="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <p className="k-u-margin-bottom-single">-</p>
      </Text>
      <Text size="micro" transform="uppercase" weight="500">
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
    <ProfileCard.Avatar
      imageProps={{
        alt: '',
        src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
      }}
    />

    <ProfileCard.Content>
      <Text size="huge" weight="700" tag="p" className="k-u-margin-double">
        Lorem Ipsum
      </Text>
      <Text size="small" tag="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <p className="k-u-margin-bottom-single">_</p>
      </Text>
      <Text size="micro" transform="uppercase" weight="500">
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
