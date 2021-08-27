import React from 'react'
import { RewardSummaryCard } from './index'
import { Container, COLORS, DropdownMenu, EllipsisIcon } from '../../../..'

const argTypes = {
  show: {
    name: 'show',
    description: 'If empty return null',
    control: { type: 'boolean' },
  },
  title: {
    name: 'title',
    control: { type: 'text' },
  },
  amount: {
    name: 'amount',
    control: { type: 'text' },
  },
  contribution: {
    name: 'contribution',
    control: { type: 'text' },
  },
  availablity: {
    name: 'availablity',
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
  },
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
    'aria-label': 'A label for the link',
    onClick: e => {
      e.preventDefault()
      console.log('Clicked')
    },
  },
  hasImage: true,
  title: 'Stickers Free Boobs Club',
  amount: '10 000€',
  contribution: '1 468 000',
  availablity: 'Illimitée',
}

export default {
  component: RewardSummaryCard,
  title: 'Molecules/Cards/RewardSummaryCard',
  parameters: {
    component: RewardSummaryCard,
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
  args,
  argTypes,
}

export const Default = args => {
  return (
    <Container>
      <RewardSummaryCard {...args}>
        {args.hasImage && (
          <RewardSummaryCard.Image>
            <img src="/kitten.jpg" alt="" />
          </RewardSummaryCard.Image>
        )}

        <RewardSummaryCard.Title>{args.title}</RewardSummaryCard.Title>

        <RewardSummaryCard.TitleTag
          className="k-u-margin-top-single"
          icon="star"
          text="Contrepartie star"
        />

        <RewardSummaryCard.Amount>{args.amount}</RewardSummaryCard.Amount>
        <RewardSummaryCard.Contribution>
          {args.contribution}
        </RewardSummaryCard.Contribution>
        <RewardSummaryCard.Availablity>
          {args.availablity}
        </RewardSummaryCard.Availablity>
        <RewardSummaryCard.Options>
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
    </Container>
  )
}
