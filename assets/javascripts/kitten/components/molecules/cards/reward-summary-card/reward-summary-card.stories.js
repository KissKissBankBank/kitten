import React from 'react'
import { RewardSummaryCard } from './index'
import { Container, COLORS } from '../../../..'

const argTypes = {
  show: {
    name: 'show',
    description: 'If empty return null',
    control: { type: 'boolean' },
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
}

const args = {
  show: true,
  borderColor: COLORS.line1,
  borderRadius: 8,
  borderStyle: 'solid',
  borderWidth: 2,
  imageBorderRadius: 5,
}

export default {
  component: RewardSummaryCard,
  title: 'Molecules/Cards/RewardSummaryCard',
  parameters: {
    component: RewardSummaryCard,
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
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  imageBorderRadius,
}) => {
  return (
    <RewardSummaryCard
      show={show}
      borderColor={borderColor}
      borderRadius={borderRadius}
      borderStyle={borderStyle}
      borderWidth={borderWidth}
    >
      <RewardSummaryCard.Image imageBorderRadius={imageBorderRadius}>
        <img src="/kitten.jpg" alt="" />
      </RewardSummaryCard.Image>

      <RewardSummaryCard.Title>
        Lorem ipsum dolor sit amet.
      </RewardSummaryCard.Title>

      <RewardSummaryCard.Amount>1005&nbsp;€</RewardSummaryCard.Amount>
      <RewardSummaryCard.RewardNumber>1005</RewardSummaryCard.RewardNumber>
      <RewardSummaryCard.Availablity>Illimitée</RewardSummaryCard.Availablity>
    </RewardSummaryCard>
  )
}
