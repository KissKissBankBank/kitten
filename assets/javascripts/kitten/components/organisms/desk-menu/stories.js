import React from 'react'
import { DeskMenu } from './index'
import { DocsPage } from 'storybook/docs-page'
import { Text } from 'kitten'

export default {
  title: 'Organisms/DeskMenu',
  component: DeskMenu,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="DeskMenu" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid">{story()}</div>
    ),
  ],
}

export const Default = () => (
  <DeskMenu>
    <DeskMenu.Header
      imageProps={{
        alt: '',
        src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
      }}
    >
      <Text className="k-u-block k-u-ellipsis" weight="regular">
        Lorem-Ipsum
      </Text>
      <Text className="k-u-block k-u-ellipsis" size="micro">
        Lorem I. Psum
      </Text>
      <Text
        className="k-u-block k-u-ellipsis"
        cssColor="var(--color-grey-500)"
        size="nano"
      >
        lorem.ipsum@kisskissbankbank.com
      </Text>
    </DeskMenu.Header>
    <DeskMenu.List>
      <DeskMenu.Item isActive href="#">
        Mon profil
      </DeskMenu.Item>
      <DeskMenu.Item href="#">Vérification d’identité</DeskMenu.Item>
      <DeskMenu.Item href="#">Mes contributions</DeskMenu.Item>
      <DeskMenu.Item href="#">Mes projets</DeskMenu.Item>
      <DeskMenu.Item href="https://www.kisskissbankbank.com">
        Mes favoris
      </DeskMenu.Item>
    </DeskMenu.List>
  </DeskMenu>
)

export const WithLinkStyle = () => (
  <DeskMenu>
    <DeskMenu.Header
      imageProps={{
        alt: '',
        src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
      }}
    >
      <Text className="k-u-block k-u-ellipsis" weight="regular">
        Lorem-Ipsum
      </Text>
    </DeskMenu.Header>
    <DeskMenu.List>
      <DeskMenu.Item linkStyle href="#">
        Envoyer un message
      </DeskMenu.Item>
    </DeskMenu.List>
  </DeskMenu>
)
