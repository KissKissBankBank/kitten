import React from 'react'
import { RewardSummaryCard } from './index'
import classNames from 'classnames'
import { Container, COLORS } from '../../../..'
import { NoImageIcon } from '../../../../components/graphics/icons/no-image-icon'

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
  href: '#',
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
  href,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  imageBorderRadius,
  image,
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
     
        {!!image ? (
          <img src="/kitten.jpg" alt="" {...image} />
          ) : (
          <NoImageIcon 
            className={classNames(
              'k-RewardSummaryCard__imageWrapper',
              'k-u-hidden@m-down',
            )}
          />
        )}
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
