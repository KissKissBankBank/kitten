import React from 'react'
import { RewardSummaryCard, useRewardSummaryCardResizeObserver } from './index'
import { COLORS, DropdownMenu, EllipsisIcon } from '../../../..'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

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
  availability: {
    name: 'availability (story prop)',
    control: { type: 'text' },
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
    options: ['lock', 'star'],
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
      action('Clicked')()
    },
  },
  title: 'Stickers Free Boobs Club',
  amount: '10 000€',
  contribution: '1 468 000',
  availability: 'Illimitée',
  hasImage: true,
  hasTitleTag: true,
  titleTagIcon: 'lock',
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
            'components/availability.js',
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
  availability,
  titleTagIcon,
  hasImage,
  hasTitleTag,
  ...args
}) => {
  const { ref, size } = useRewardSummaryCardResizeObserver()

  return (
    <div ref={ref}>
      <RewardSummaryCard.TitleBar
        values={{
          image: 'Visuel de la contrepartie',
          title: 'Titre de la contrepartie',
          amount: 'Montant',
          contributions: 'Contributions',
          availability: 'Disponibilités',
        }}
        className="k-u-hidden@xs-down k-u-margin-bottom-triple"
        id="RewardSummaryList"
        size={size}
      />

      <RewardSummaryCard {...args} size={size}>
        {hasImage && (
          <RewardSummaryCard.Image>
            <img src="/kitten.jpg" alt="" />
          </RewardSummaryCard.Image>
        )}

          <div style={{ display: 'grid' }}>
            <RewardSummaryCard.Title aria-describedby="RewardSummaryList-title">
              {title}
            </RewardSummaryCard.Title>
            {hasTitleTag && (
              <RewardSummaryCard.TitleTag
                icon={titleTagIcon}
                text="Contrepartie star"
              />
            )}
          </div>

        <RewardSummaryCard.Amount aria-describedby="RewardSummaryList-amount">
          {amount}
        </RewardSummaryCard.Amount>
        <RewardSummaryCard.Contribution aria-describedby="RewardSummaryList-contribution">
          {contribution}
        </RewardSummaryCard.Contribution>
        <RewardSummaryCard.Availability aria-describedby="RewardSummaryList-availability">
          {availability}
        </RewardSummaryCard.Availability>
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
    </div>
  )
}

export const TitleBar = args => (
  <div {...args}>
    <RewardSummaryCard.TitleBar
      values={{
        image: 'Visuel de la contrepartie',
        title: 'Titre de la contrepartie',
        amount: 'Montant',
        contributions: 'Contributions',
        availability: 'Disponibilités',
      }}
      className="k-u-hidden@xs-down"
      id="RewardSummaryList"
    />
  </div>
)
