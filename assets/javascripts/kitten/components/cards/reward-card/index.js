import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { StyledRewardCard } from './styles'
import { RewardCardInfo } from './components/info'
import { RewardCardImage } from './components/image'
import { RewardCardVideo } from './components/video'
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
  <StyledRewardCard
    {...others}
    className={classNames('k-RewardCard', others.className, {
      'k-rewardCard--withoutBorder': withoutBorder,
      'k-RewardCard--isDisabled': disabled,
    })}
  >
    {children}
  </StyledRewardCard>
)

RewardCard.Row = RewardCardRow
RewardCard.RowContent = RewardCardRowContent
RewardCard.RowSide = RewardCardRowSide
RewardCard.Title = RewardCardTitle
RewardCard.Image = RewardCardImage
RewardCard.Video = RewardCardVideo
RewardCard.Info = RewardCardInfo
RewardCard.CheckedSection = RewardCardCheckedSection
RewardCard.StarredBadge = RewardCardStarredBadge
RewardCard.DiamondBadge = RewardCardDiamondBadge

RewardCard.propTypes = {
  withoutBorder: PropTypes.bool,
  disabled: PropTypes.bool,
}

RewardCard.defaultProps = {
  withoutBorder: false,
  disabled: false,
}
