import React from 'react'
import { RewardSummaryCard } from './index'
import { Container, COLORS, DropdownMenu, EllipsisIcon } from '../../../..'

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
  as: {
    name: 'as',
    description: 'HTML element for the Action component',
    control: { type: 'text' },
  },
  actionProps: {
    name: 'actionProps',
    description: 'Properties for the Action component',
    control: { type: 'object' },
  },
  hasImage: {
    name: 'hasImage (story prop)',
    description: 'Show/hide image, for story purposes.',
    control: { type: 'boolean' },
  }
}

const args = {
  show: true,
  borderColor: COLORS.line1,
  borderRadius: 8,
  borderStyle: 'solid',
  borderWidth: 2,
  imageBorderRadius: 5,
  actionProps: {
    href: '#',
    as: 'a',
    onClick: (e) => {e.preventDefault(); console.log('Clicked');},
  },
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

export const Default = (args) => {
  return (
      <RewardSummaryCard.Image imageBorderRadius={imageBorderRadius}>
        {hasImage && <img src="/kitten.jpg" alt="" />}
      </RewardSummaryCard.Image>
    <RewardSummaryCard {...args}>

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
      <RewardSummaryCard.Options className="k-u-hidden@s-down">
        <DropdownMenu
          menuPosition="left"
          button={({ open }) => (
            <>
              <EllipsisIcon color={COLORS.font1} />
              <span className="k-u-a11y-visuallyHidden">
                {open ? 'Click to close menu' : 'Click to open menu'}
              </span>
            </>
          )}
        >
          <DropdownMenu.Link href="#">Editer</DropdownMenu.Link>
          <DropdownMenu.Link href="#">Dupliquer</DropdownMenu.Link>
          <DropdownMenu.Link href="#">Désactiver</DropdownMenu.Link>
          <DropdownMenu.Button>Supprimer</DropdownMenu.Button>
        </DropdownMenu>
      </RewardSummaryCard.Options>
    </RewardSummaryCard>
  )
}
