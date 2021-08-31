import React from 'react'
import { ContributionCard } from './index'
import { RocketIllustration, COLORS } from '../../../..'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

const argTypes = {
  show: {
    name: 'show',
    description: 'If empty return null',
    control: { type: 'boolean' },
  },
  closeButtonLabel: {
    name: 'closeButtonLabel',
    description: 'Close button label',
    control: { type: 'text' },
  },
  borderColor: {
    name: 'borderColor',
    description: 'border color',
    control: { type: 'text' },
  },
  borderRadius: {
    name: 'borderRadius',
    description: 'border radius size',
    control: { type: 'text', type: 'number' },
  },
  borderStyle: {
    name: 'borderStyle',
    description: 'border style',
    control: { type: 'text' },
  },
  borderWidth: {
    name: 'borderWidth',
    description: 'border width',
    control: { type: 'text', type: 'number' },
  },
  onClose: {
    name: 'close',
    description:
      'Action when Close button is clicked. If null, no button is displayed.',
    control: { type: 'func' },
  },
  largeInput: {
    name: 'largeInput',
    description: 'Should the input be larger?',
    control: { type: 'boolean' },
  },
  largeTitle: {
    name: 'ContributionCard.Title: largeTitle',
    description:
      'When `ContributionCard.PillNumber` is hidden, the title can be more flex',
    control: { type: 'boolean' },
  },
}

const args = {
  show: true,
  closeButtonLabel: 'Close',
  borderColor: COLORS.line1,
  borderRadius: 8,
  borderStyle: 'solid',
  borderWidth: 2,
  onClose: action('onClose'),
  largeInput: false,
  largeTitle: false,
}

export default {
  component: ContributionCard,
  title: 'Molecules/Cards/ContributionCard',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="ContributionCard" />
      ),
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
  args,
  argTypes,
}

export const Default = ({ largeTitle, ...args }) => {
  return (
    <ContributionCard {...args}>
      <ContributionCard.Image>
        <img src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`} alt="" />
      </ContributionCard.Image>

      <ContributionCard.Title largeTitle={largeTitle}>
        Lorem ipsum dolor sit amet.
      </ContributionCard.Title>

      <ContributionCard.PillNumber value={0} min={0} max={100} />
      <ContributionCard.Amount>1005&nbsp;€</ContributionCard.Amount>
    </ContributionCard>
  )
}

export const PetitPlus = (...args) => {
  return (
    <ContributionCard {...args} onClose={null}>
      <ContributionCard.Image className="k-u-hidden@xs-down">
        <RocketIllustration width={45} height={81} />
      </ContributionCard.Image>

      <ContributionCard.Title>
        Un petit plus pour 900 care
        <ContributionCard.Description>
          Donnez encore plus de chances à ce projet de voir le jour.
        </ContributionCard.Description>
      </ContributionCard.Title>

      <ContributionCard.Input unit="€" />
      <ContributionCard.Action>Ajouter</ContributionCard.Action>
    </ContributionCard>
  )
}
