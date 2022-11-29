import React from 'react'
import { PartnerCard } from './index'
import { DocsPage } from 'storybook/docs-page'
import { Text } from 'kitten'

export default {
  title: 'Structure/Cards/PartnerCard',
  component: PartnerCard,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="PartnerCard" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid">{story()}</div>
    ),
  ],
}

const args = {
  imageProps: {
    src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
    alt: '',
  },
}

export const Default = args => (
  <>
    <PartnerCard {...args} stretch>
      <PartnerCard.Avatar
        imageProps={{
          src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
          alt: '',
        }}
      />
      <PartnerCard.Line>
        <Text size="small" weight="500">
          Les Jeunes Pousses méritent tout notre soutien : Naturalia s’engage dans le développement de votre produit bio.
        </Text>
        <PartnerCard.Sticker>
          Citoyenneté
        </PartnerCard.Sticker>
        <Text
          tag="p"
          weight="700"
          size="small"
          className="k-u-link-font1 k-u-cursor-pointer k-u-margin-none"
        >
          En savoir plus
        </Text>
      </PartnerCard.Line>
    </PartnerCard>

    <PartnerCard {...args} stretch>
      <PartnerCard.Avatar
        imageProps={{
          src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
          alt: '',
        }}
      />
      <PartnerCard.Line>
        <Text size="small" weight="500">
          Les Jeunes Pousses méritent tout notre soutien
        </Text>
        <PartnerCard.Sticker>
          Citoyenneté
        </PartnerCard.Sticker>
        <Text
          tag="p"
          weight="700"
          size="small"
          className="k-u-link-font1 k-u-cursor-pointer k-u-margin-none"
        >
          En savoir plus
        </Text>
      </PartnerCard.Line>
    </PartnerCard>
  </>
)

Default.args = args
