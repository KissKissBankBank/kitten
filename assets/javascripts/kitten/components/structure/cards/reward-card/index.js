import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { StyledRewardCard } from './styles'
import {
  Form,
  Title,
  Image,
  Amount,
  Button,
  TagList,
  HeadingTag,
  Description,
  Contents,
} from './components'
import {
  getReactElementsByType,
  getReactElementsWithoutTypeArray,
} from '../../../../helpers/react/get-react-elements'

export const RewardCard = ({
  children,
  className,
  disabled,
  hasBorder,
  stretch,
  ...props
}) => {
  const contentsChild = getReactElementsByType({
    children,
    type: RewardCard.Contents,
  })[0]

  if (!!contentsChild) {
    return (
      <StyledRewardCard
        {...props}
        className={classNames('k-RewardCard', className, {
          'k-RewardCard--disabled': disabled,
          'k-RewardCard--hasBorder': hasBorder,
          'k-RewardCard--isStretched': stretch,
        })}
      >
        {children}
      </StyledRewardCard>
    )
  }

  // Old card version

  console.warn(
    'This use of the RewardCard is deprecated. Please wrap contents with `RewardCard.Contents`.',
  )

  const imageChild = getReactElementsByType({
    children,
    type: RewardCard.Image,
  })[0]
  const buttonChild = getReactElementsByType({
    children,
    type: RewardCard.Button,
  })[0]
  const wrappedChildren = getReactElementsWithoutTypeArray({
    children,
    typeArray: [RewardCard.Button, RewardCard.Image],
  })

  return (
    <StyledRewardCard
      {...props}
      className={classNames('k-RewardCard', className, {
        'k-RewardCard--disabled': disabled,
        'k-RewardCard--hasBorder': hasBorder,
        'k-RewardCard--isStretched': stretch,
      })}
    >
      {imageChild && cloneElement(imageChild)}

      <div className="k-RewardCard__gridWrapper">
        {wrappedChildren &&
          wrappedChildren.map((item, index) =>
            cloneElement(item, { key: `RewardCard-${index}` }),
          )}
      </div>

      {buttonChild && cloneElement(buttonChild, { disabled })}
    </StyledRewardCard>
  )
}

RewardCard.Form = Form
RewardCard.Title = Title
RewardCard.Image = Image
RewardCard.Amount = Amount
RewardCard.Button = Button
RewardCard.TagList = TagList
RewardCard.HeadingTag = HeadingTag
RewardCard.Description = Description
RewardCard.Contents = Contents

RewardCard.defaultProps = {
  hasBorder: true,
  disabled: false,
  stretch: false,
}

RewardCard.propTypes = {
  hasBorder: PropTypes.bool,
  disabled: PropTypes.bool,
  stretch: PropTypes.bool,
}
