import React from 'react'
import { RewardSummaryCard } from './index'
import { Container, COLORS } from '../../../..'

const argTypes = {
  href: {
    name: 'href',
    control: { type: 'text' },
  },
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
    control: { type: 'number' },
  },
  borderStyle: {
    name: 'borderStyle',
    description: 'border style',
    control: { type: 'text' },
  },
  borderWidth: {
    name: 'borderWidth',
    description: 'border width',
    control: { type: 'number' },
  },
  imageBorderRadius: {
    name: 'imageBorderRadius',
    description: 'Image border radius size',
    control: { type: 'number' },
  },
  hasImage: {
    name: 'hasImage (story prop)',
    description: 'Show/hide image, for story purposes.',
    control: { type: 'boolean' },
  }
}

const args = {
  href: '#',
  show: true,
  borderColor: COLORS.line1,
  borderRadius: 8,
  borderStyle: 'solid',
  borderWidth: 2,
  imageBorderRadius: 5,
  hasImage: true,
}

export default {
  component: RewardSummaryCard,
  title: 'Molecules/Cards/RewardSummaryCard',
  parameters: {
    component: RewardSummaryCard,
  },
  decorators: [story => (
    <div className="story-Container">
      {story()}
    </div>
  )],
  args,
  argTypes,
}

export const Default = ({
  hasImage,
  show,
  href,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  imageBorderRadius,
}) => {
  return (
    <RewardSummaryCard
      href={href}
      show={show}
      borderColor={borderColor}
      borderRadius={borderRadius}
      borderStyle={borderStyle}
      borderWidth={borderWidth}
    >
      <RewardSummaryCard.Image imageBorderRadius={imageBorderRadius}>
        {hasImage && <img src="/kitten.jpg" alt="" />}
      </RewardSummaryCard.Image>

      <RewardSummaryCard.Title>
        Stickers Free Boobs Club
        <RewardSummaryCard.TitleTag
          className="k-u-margin-top-single"
          icon="star"
          text="Contrepartie star"
        />
      </RewardSummaryCard.Title>

      <RewardSummaryCard.Amount>10 000&nbsp;€</RewardSummaryCard.Amount>
      <RewardSummaryCard.Contribution>1 468 000</RewardSummaryCard.Contribution>
      <RewardSummaryCard.Availablity>Illimitée</RewardSummaryCard.Availablity>
      <RewardSummaryCard.Options />
    </RewardSummaryCard>
  )
}
