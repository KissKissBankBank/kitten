import React, { cloneElement } from 'react'
import { StyledSummaryCard } from './styles'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Image, TitleTag, TitleBar, Cell } from './components'
import {
  getReactElementsByType,
  getReactElementsWithoutType,
} from '../../../../helpers/react/react-elements'
import { NoImageIcon } from '../../../../components/graphics/icons/no-image-icon'

export const SummaryCard = ({
  children,
  show,
  className,
  actionProps,
  size,
  type,
  ...props
}) => {
  const imageChild = getReactElementsByType({
    children,
    type: SummaryCard.Image,
  })[0]
  const wrappedChildren = getReactElementsWithoutType({
    children,
    type: SummaryCard.Image,
  })

  const {
    className: actionClassName,
    as: actionAs = 'a',
    ...action
  } = actionProps

  const ActionElement = actionAs

  if (!show) return null

  return (
    <StyledSummaryCard
      className={classNames(
        'k-SummaryCard',
        className,
        `k-SummaryCard-Wrapper--${size}`,
        {
          'k-SummaryCard--hasAction': Object.keys(actionProps).length > 0,
        },
      )}
      type={type}
      {...props}
    >
      {Object.keys(actionProps).length > 0 && (
        <ActionElement
          className={classNames('k-SummaryCard__action', actionClassName)}
          {...action}
        />
      )}

      <div
        className={classNames(
          'k-SummaryCard__imageWrapper',
          'k-SummaryCard-Wrapper__imageWrapper',
          imageChild?.props?.className,
          {
            'k-u-hidden@s-down': !imageChild,
          },
        )}
      >
        {!!imageChild ? cloneElement(imageChild) : <NoImageIcon />}
      </div>

      <div className="k-SummaryCard__gridWrapper k-SummaryCard-Wrapper__gridWrapper">
        {wrappedChildren.map((item, index) =>
          cloneElement(item, { key: `SummaryCard-${index}` }),
        )}
      </div>
    </StyledSummaryCard>
  )
}

export { useResizeObserver as useSummaryCardResizeObserver } from './hooks/use-resize-observer'

SummaryCard.Image = Image
SummaryCard.TitleTag = TitleTag
SummaryCard.TitleBar = TitleBar
SummaryCard.Cell = Cell

SummaryCard.defaultProps = {
  show: true,
  actionProps: {},
  size: 'large',
  type: 'ownerContribution',
}

SummaryCard.propTypes = {
  show: PropTypes.bool,
  actionProps: PropTypes.object,
  size: PropTypes.oneOf([
    'xlarge',
    'large',
    'medium',
    'tablet',
    'small',
    'mobile',
  ]),
  type: PropTypes.oneOf([
    'ownerContribution',
    'ownerSubscription',
    'contributorContribution',
    'contributorSubscription',
  ]),
}
