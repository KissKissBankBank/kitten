import React, { cloneElement } from 'react'
import { StyledRewardSummaryCard } from './styles'
import classNames from 'classnames'
import PropTypes from 'prop-types'
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
  className,
  actionProps,
  size,
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
      className={classNames(
        'k-RewardSummaryCard',
        className,
        `k-RewardSummaryCard--${size}`,
      )}
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

export { useResizeObserver as useRewardSummaryCardResizeObserver } from './hooks/use-resize-observer'

RewardSummaryCard.Image = Image
RewardSummaryCard.Title = Title
RewardSummaryCard.TitleTag = TitleTag
RewardSummaryCard.Amount = Amount
RewardSummaryCard.Contribution = Contribution
RewardSummaryCard.Availablity = Availablity
RewardSummaryCard.Options = Options

RewardSummaryCard.defaultProps = {
  show: true,
  actionProps: {},
  size: 'large',
}

RewardSummaryCard.propTypes = {
  show: PropTypes.bool,
  actionProps: PropTypes.object,
  size: PropTypes.oneOf(['large', 'medium', 'small', 'mobile']),
}
