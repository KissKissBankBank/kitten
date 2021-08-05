import React from 'react'
import { ContributionCard } from './index'
import { Container, RocketIllustration, COLORS } from '../../../..'

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
  imageBorderRadius: {
    name: 'imageBorderRadius',
    description: 'Image border radius size',
    control: { type: 'text', type: 'number' },
  },
  onClose: {
    name: 'close',
    description: 'close component',
    control: { type: 'func' },
  },
  largeInput: {
    name: 'largeInput',
    description: 'When input is more large',
    control: { type: 'boolean' },
  },
  largeTitle: {
    name: 'largeTitle',
    description: 'When `PillNumber` is hide, the title is more flex',
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
  imageBorderRadius: 5,
  onClose: undefined,
  largeInput: false,
  largeTitle: false,
}

export default {
  component: ContributionCard,
  title: 'Molecules/Cards/ContributionCard',
  parameters: {
    component: ContributionCard,
  },
  decorators: [
    Story => (
      <div className="k-u-margin-top-quadruple">
        <Container className="k-u-margin-vertical-quadruple">
          <Story />
        </Container>
      </div>
    ),
  ],
  args,
  argTypes,
}

export const Default = ({
  show,
  closeButtonLabel,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  imageBorderRadius,
  largeInput,
  largeTitle,
}) => {
  return (
    <ContributionCard
      onClose={() => {}}
      show={show}
      closeButtonLabel={closeButtonLabel}
      borderColor={borderColor}
      borderRadius={borderRadius}
      borderStyle={borderStyle}
      borderWidth={borderWidth}
      largeInput={largeInput}
    >
      <ContributionCard.Image imageBorderRadius={imageBorderRadius}>
        <img src="/kitten.jpg" alt="" />
      </ContributionCard.Image>

      <ContributionCard.Title largeTitle={largeTitle}>
        Lorem ipsum dolor sit amet.
      </ContributionCard.Title>

      <ContributionCard.PillNumber value={0} min={0} max={100} />
      <ContributionCard.Amount>1005&nbsp;€</ContributionCard.Amount>
    </ContributionCard>
  )
}

export const PetitPlus = ({
  show,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  imageBorderRadius,
  largeInput,
}) => {
  return (
    <ContributionCard
      borderStyle={borderStyle}
      show={show}
      borderColor={borderColor}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      largeInput={largeInput}
    >
      <ContributionCard.Image
        className="k-u-hidden@xs-down"
        imageBorderRadius={imageBorderRadius}
      >
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
