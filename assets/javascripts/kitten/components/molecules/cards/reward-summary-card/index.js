import React, { useState, cloneElement } from 'react'
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
  RewardNumber,
  Amount,
} from './components'
import { Context } from './context'
import {
  getReactElementsByType,
  getReactElementsWithoutType,
} from '../../../../helpers/react/react-elements'

export const RewardSummaryCard = ({
  children,
  show,
  style,
  href,
  className,
  borderWidth,
  borderRadius,
  imageBorderRadius,
  borderColor,
  borderStyle,
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

  const [isInputEmpty, setEmptyInput] = useState(true)
  if (!show) return null

  return (
    <StyledRewardSummaryCard
      href={href}
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
      {imageChild && cloneElement(imageChild)}

      <div className="k-RewardSummaryCard__gridWrapper">
        <Context.Provider value={{ isInputEmpty, setEmptyInput }}>
          {wrappedChildren.map((item, index) =>
            cloneElement(item, { key: `RewardSummaryCard-${index}` }),
          )}
        </Context.Provider>
      </div>
    </StyledRewardSummaryCard>
  )
}

RewardSummaryCard.Image = Image
RewardSummaryCard.Title = Title
RewardSummaryCard.TitleTag = TitleTag
RewardSummaryCard.Amount = Amount
RewardSummaryCard.RewardNumber = RewardNumber
RewardSummaryCard.Availablity = Availablity

RewardSummaryCard.defaultProps = {
  show: true,
  borderColor: COLORS.line1,
  borderRadius: 8,
  borderStyle: 'solid',
  borderWidth: 2,
  imageBorderRadius: 5,
}

RewardSummaryCard.propTypes = {
  show: PropTypes.bool,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageBorderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}
