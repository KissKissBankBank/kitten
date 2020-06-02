import React from 'react'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'
import classNames from 'classnames'
import { LegacyRewardCardContainer } from './legacy/reward-card-container'
import { StyledRewardCard } from './styles'
import { RewardCardInfo } from './components/info'
import { RewardCardImage } from './components/image'
import { RewardCardTitle } from './components/title'
import { RewardCardRow } from './components/row'
import { RewardCardRowContent } from './components/row-content'
import { RewardCardRowSide } from './components/row-side'
import { RewardCardStarredBadge } from './components/starred-badge'
import { RewardCardDiamondBadge } from './components/diamond-badge'
import { RewardCardCheckedSection } from './components/checked-section'

export const RewardCard = ({
  children,
  withoutBorder,
  disabled,
  ...others
}) => (
  <>
    {children ? (
      <StyledRewardCard
        className={classNames('k-RewardCard', {
          'k-rewardCard--withoutBorder': withoutBorder,
          'k-RewardCard--isDisabled': disabled,
        })}
        {...others}
      >
        {children}
      </StyledRewardCard>
    ) : (
      <LegacyRewardCardContainer {...{ withoutBorder, disabled, ...others }} />
    )}
  </>
)

RewardCard.Row = RewardCardRow
RewardCard.RowContent = RewardCardRowContent
RewardCard.RowSide = RewardCardRowSide
RewardCard.Title = RewardCardTitle
RewardCard.Image = RewardCardImage
RewardCard.Info = RewardCardInfo
RewardCard.CheckedSection = RewardCardCheckedSection
RewardCard.StarredBadge = RewardCardStarredBadge
RewardCard.DiamondBadge = RewardCardDiamondBadge

RewardCard.propTypes = {
  titleAmount: deprecated(PropTypes.string, 'Use `RewardCard.Title` instead.'),
  titleTag: deprecated(PropTypes.string, 'Use `RewardCard.Title` instead.'),
  subtitle: deprecated(
    PropTypes.string,
    'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.',
  ),
  subtitleTag: deprecated(
    PropTypes.string,
    'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.',
  ),
  description: deprecated(
    PropTypes.string,
    'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.',
  ),
  manageContributionDescription: deprecated(
    PropTypes.string,
    'Use `RewardCard` sub-component instead.',
  ),
  manageContributionLinkLabel: deprecated(
    PropTypes.string,
    'Use `RewardCard` sub-component instead.',
  ),
  manageContributionLinkHref: deprecated(
    PropTypes.string,
    'Use `RewardCard` sub-component instead.',
  ),

  buttonLabel: deprecated(
    PropTypes.string,
    'Use `RewardCard.Action` to insert your button and its callbacks instead.',
  ),
  buttonOnMouseEnter: deprecated(
    PropTypes.func,
    'Use `RewardCard.Action` to insert your button and its callbacks instead.',
  ),
  buttonOnMouseLeave: deprecated(
    PropTypes.func,
    'Use `RewardCard.Action` to insert your button and its callbacks instead.',
  ),
  buttonOnClick: deprecated(
    PropTypes.func,
    'Use `RewardCard.Action` to insert your button and its callbacks instead.',
  ),

  imageProps: deprecated(PropTypes.object, 'Use `RewardCard.Image` instead.'),

  isDisabled: deprecated(
    PropTypes.bool,
    'You should handle the disabled state direcly on your component.',
  ),
  starred: deprecated(
    PropTypes.bool,
    'Use `RewardCard` sub-component instead.',
  ),
  starLabel: deprecated(
    PropTypes.string,
    'Use `RewardCard` sub-component instead.',
  ),

  version: deprecated(
    PropTypes.oneOf(['default', 'tiny']),
    '`RewardCard` is no longer handled with media-queries. The version of the component now is handled by the size of the parent container.',
  ),

  // Deprecated props
  titleDescription: deprecated(
    PropTypes.string,
    'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.',
  ),
  textDescription: deprecated(
    PropTypes.string,
    'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.',
  ),
  textTag: deprecated(
    PropTypes.string,
    'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.',
  ),
  myContribution: deprecated(
    PropTypes.string,
    'Use `manageContributionDescription` prop instead.',
  ),
  manageContribution: deprecated(
    PropTypes.string,
    'Use `manageContributionLinkLabel` prop instead.',
  ),
  manageContributionLink: deprecated(
    PropTypes.string,
    'Use `manageContributionLinkHref` prop instead.',
  ),
  button: deprecated(
    PropTypes.string,
    'Use `RewardCard.Action` to insert your button and its callbacks instead.',
  ),
  titleContributors: deprecated(
    PropTypes.string,
    'Use `Reward.Info` to compose your card content now.',
  ),
  titleDelivery: deprecated(
    PropTypes.string,
    'Use `Reward.Info` to compose your card content now.',
  ),
  titleAvailability: deprecated(
    PropTypes.string,
    'Use `Reward.Info` to compose your card content now.',
  ),
  valueContributors: deprecated(
    PropTypes.string,
    'Use `Reward.Info` to compose your card content now.',
  ),
  valueDelivery: deprecated(
    PropTypes.string,
    'Use `Reward.Info` to compose your card content now.',
  ),
  valueAvailability: deprecated(
    PropTypes.string,
    'Use `Reward.Info` to compose your card content now.',
  ),
  withoutBorder: PropTypes.bool,
  disabled: PropTypes.bool,
}

RewardCard.defaultProps = {
  withoutBorder: false,
  disabled: false,
}
