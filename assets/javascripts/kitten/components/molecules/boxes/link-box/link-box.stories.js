import React from 'react'
import { LinkBox } from './index'
import {
  FlashCircleIcon,
  Text,
  COLORS,
} from '../../../..'

export const Default = (args) => (
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

export const WithVariant = (args) => (
  <LinkBox {...args}>
    <LinkBox.Text>
      <Text size="tiny" weight="light" lineHeight="normal">
        <strong>Paramètres -</strong> Titre du projet, Catégorie
        principale, Montant de l’objectif, Type d’objectif …
      </Text>
    </LinkBox.Text>
  </LinkBox>
)

Default.decorators = [story => (
  <div className="story-Container story-Grid story-Grid--large">
    {story()}
  </div>
)]
WithVariant.decorators = Default.decorators

Default.args = {
  href: 'https://www.kisskissbankbank.com',
  isExternal: true,
  linkProps: {},
  variant: 'andromeda',
  backgroundColor: COLORS.background1,
  textColor: COLORS.font1,
}
WithVariant.args = {
  ...Default.args,
  variant: 'orion',
  backgroundColor: COLORS.orange1,
}

Default.argTypes = {
  href: {
    name: 'href',
    control: { type: 'text' },
  },
  isExternal: {
    name: 'isExternal',
    control: { type: 'boolean' },
  },
  linkProps: {
    name: 'linkProps',
    control: { type: 'object' },
  },
  variant: {
    name: 'variant',
    options: ['andromeda', 'orion'],
    control: { type: 'inline-radio' },
  },
  backgroundColor: {
    name: 'backgroundColor',
    control: { type: 'color' },
  },
  textColor: {
    name: 'textColor',
    control: { type: 'color' },
  },
}
WithVariant.argTypes = Default.argTypes
