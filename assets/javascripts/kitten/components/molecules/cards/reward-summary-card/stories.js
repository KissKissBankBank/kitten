import React from 'react'
import { RewardSummaryCard } from './index'
import { Container, COLORS, DropdownMenu, EllipsisIcon } from '../../../..'
import { DocsPage } from 'storybook/docs-page'

const argTypes = {
  show: {
    name: 'show',
    description: 'If empty return null',
    control: { type: 'boolean' },
  },
  title: {
    name: 'title (story prop)',
    control: { type: 'text' },
  },
  amount: {
    name: 'amount (story prop)',
    control: { type: 'text' },
  },
  contribution: {
    name: 'contribution (story prop)',
    control: { type: 'text' },
  },
  availablity: {
    name: 'availablity (story prop)',
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
  hasTitleTag: {
    name: 'hasTitleTag (story prop)',
    description: 'Show/hide title tag, for story purposes.',
    control: { type: 'boolean' },
  },
  titleTagIcon: {
    name: 'titleTagIcon (story prop)',
    description: 'Specify the icon used for the RewardSummaryCard.TitleTag',
    options: ['star', 'diamond'],
    control: { type: 'inline-radio' },
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
  title: 'Stickers Free Boobs Club',
  amount: '10 000€',
  contribution: '1 468 000',
  availablity: 'Illimitée',
  hasImage: true,
  hasTitleTag: true,
  titleTagIcon: 'star',
}

export default {
  component: RewardSummaryCard,
  title: 'Molecules/Cards/RewardSummaryCard',
  parameters: {
    component: RewardSummaryCard,
  },
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={[
            'index.js',
            'styles.js',
            'components/amount.js',
            'components/availablity.js',
            'components/contribution.js',
            'components/image.js',
            'components/index.js',
            'components/options.js',
            'components/title-tag.js',
            'components/title.js',
          ]}
          importString="RewardSummaryCard"
        />
      ),
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
  args,
  argTypes,
}

export const Default = ({
  title,
  amount,
  contribution,
  availablity,
  titleTagIcon,
  hasImage,
  hasTitleTag,
  ...args
}) => {
  return (
    <Container>
      <RewardSummaryCard {...args}>
        {hasImage && (
          <RewardSummaryCard.Image>
            <img src="/kitten.jpg" alt="" />
          </RewardSummaryCard.Image>
        )}

        <RewardSummaryCard.Title>
          {title}
          {hasTitleTag && (
            <RewardSummaryCard.TitleTag
              icon={titleTagIcon}
              text="Contrepartie star"
            />
          )}
        </RewardSummaryCard.Title>

        <RewardSummaryCard.Amount>{amount}</RewardSummaryCard.Amount>
        <RewardSummaryCard.Contribution>
          {contribution}
        </RewardSummaryCard.Contribution>
        <RewardSummaryCard.Availablity>
          {availablity}
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
