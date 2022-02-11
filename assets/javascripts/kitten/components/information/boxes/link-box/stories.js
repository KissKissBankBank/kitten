import React from 'react'
import { LinkBox } from './index'
import { FlashCircleIcon, Text, COLORS } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Information/Boxes/LinkBox',
  component: LinkBox,
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={['index.js', 'styles.js']}
          importString="LinkBox"
        />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  argTypes: {
    href: {
      name: 'href',
      control: 'text',
    },
    isExternal: {
      name: 'isExternal',
      control: 'boolean',
    },
    linkProps: {
      name: 'linkProps',
      control: 'object',
    },
    variant: {
      name: 'variant',
      options: ['andromeda', 'orion'],
      control: 'inline-radio',
    },
    backgroundColor: {
      name: 'backgroundColor',
      control: 'color',
    },
    textColor: {
      name: 'textColor',
      control: 'color',
    },
  },
}

export const Default = args => (
  <LinkBox {...args}>
    <LinkBox.Icon>
      <FlashCircleIcon
        circleColor="#caf4fe"
        flashColor={COLORS.primary1}
        width="60"
        height="60"
      />
    </LinkBox.Icon>

    <LinkBox.Text>
      <Text size="micro" lineHeight="normal">
        Partie 1
      </Text>

      <Text size="tiny" weight="regular" lineHeight="normal">
        Les différents types de financement participatif
      </Text>
    </LinkBox.Text>
  </LinkBox>
)

export const WithVariant = args => (
  <LinkBox {...args}>
    <LinkBox.Text>
      <Text size="tiny" weight="light" lineHeight="normal">
        <strong>Paramètres -</strong> Titre du projet, Catégorie principale,
        Montant de l’objectif, Type d’objectif …
      </Text>
    </LinkBox.Text>
  </LinkBox>
)

Default.args = {
  href: 'https://www.kisskissbankbank.com',
  isExternal: true,
  linkProps: {},
  variant: 'orion',
  backgroundColor: COLORS.background1,
  textColor: COLORS.font1,
}
WithVariant.args = {
  ...Default.args,
  variant: 'orion',
  backgroundColor: COLORS.orange1,
}
