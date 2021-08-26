import React, { cloneElement } from 'react'
import { StyledRewardSummaryCard } from './styles'
import classNames from 'classnames'
import COLORS from '../../../../constants/colors-config'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../../helpers/utils/typography'
import {
  Image,
  Title,
  TitleTag,
  Availablity,
  Contribution,
  Amount,
  Options,
} from './components'
import {
  getReactElementsByType,
  getReactElementsWithoutType,
} from '../../../../helpers/react/react-elements'
import { NoImageIcon } from '../../../../components/graphics/icons/no-image-icon'

export const RewardSummaryCard = ({
  children,
  show,
  style,
  className,
  borderWidth,
  borderRadius,
  imageBorderRadius,
  borderColor,
  borderStyle,
  actionProps,
  ...props
}) => {
  const imageChild = getReactElementsByType({
    children,
    type: RewardSummaryCard.Image,
  })[0]
  const wrappedChildren = getReactElementsWithoutType({
    children,
    type: RewardSummaryCard.Image,
  })

  const {
    className: actionClassName,
    as: actionAs = 'a',
    ...action
  } = actionProps

  const ActionElement = actionAs

  if (!show) return null

  return (
    <StyledRewardSummaryCard
      className={classNames('k-RewardSummaryCard', className)}
      style={{
        ...style,
        '--rewardSummaryCard--border-width': pxToRem(borderWidth),
        '--rewardSummaryCard--border-radius': pxToRem(borderRadius),
        '--rewardSummaryCard--image-border-radius': pxToRem(imageBorderRadius),
        '--rewardSummaryCard--border-color': borderColor,
        '--rewardSummaryCard--border-style': borderStyle,
      }}
      {...props}
    >
      <ActionElement
        className={classNames('k-RewardSummaryCard__action', actionClassName)}
        {...action}
      />

      <div
        className={classNames('k-RewardSummaryCard__imageWrapper', {
          'k-u-hidden@m-down': !imageChild,
        })}
      >
        {!!imageChild ? cloneElement(imageChild) : <NoImageIcon />}
      </div>

      <div className="k-RewardSummaryCard__gridWrapper">
        {wrappedChildren.map((item, index) =>
          cloneElement(item, { key: `RewardSummaryCard-${index}` }),
        )}
      </div>
    </StyledRewardSummaryCard>
  )
}

RewardSummaryCard.Image = Image
RewardSummaryCard.Title = Title
RewardSummaryCard.TitleTag = TitleTag
RewardSummaryCard.Amount = Amount
RewardSummaryCard.Contribution = Contribution
RewardSummaryCard.Availablity = Availablity
RewardSummaryCard.Options = Options

RewardSummaryCard.defaultProps = {
  show: true,
  borderColor: COLORS.line1,
  borderRadius: 8,
  borderStyle: 'solid',
  borderWidth: 2,
  imageBorderRadius: 5,
  actionProps: {},
}

RewardSummaryCard.propTypes = {
  show: PropTypes.bool,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageBorderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}
