import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { StyledBackingCard } from './styles'
import {
  Info,
  Form,
  Title,
  Image,
  Amount,
  Button,
  TagList,
  HeadingTag,
  Description,
} from './components'
import {
  getReactElementsByType,
  getReactElementsWithoutTypeArray,
} from '../../../helpers/react/react-elements'

export const BackingCard = ({
  children,
  className,
  disabled,
  hasBorder,
  ...props
}) => {
  const imageChild = getReactElementsByType({
    children,
    type: BackingCard.Image,
  })[0]
  const buttonChild = getReactElementsByType({
    children,
    type: BackingCard.Button,
  })[0]
  const wrappedChildren = getReactElementsWithoutTypeArray({
    children,
    typeArray: [BackingCard.Button, BackingCard.Image],
  })

  return (
    <StyledBackingCard
      {...props}
      className={classNames('k-BackingCard', className, {
        'k-BackingCard--disabled': disabled,
        'k-BackingCard--hasBorder': hasBorder,
      })}
    >
      {imageChild && cloneElement(imageChild)}

      <div className="k-BackingCard__gridWrapper">
        {wrappedChildren && wrappedChildren.map((item, index) =>
          cloneElement(item, { key: `BackingCard-${index}` }),
        )}
      </div>

      {buttonChild && cloneElement(buttonChild, { disabled })}
    </StyledBackingCard>
  )
}

BackingCard.Info = Info
BackingCard.Form = Form
BackingCard.Title = Title
BackingCard.Image = Image
BackingCard.Amount = Amount
BackingCard.Button = Button
BackingCard.TagList = TagList
BackingCard.HeadingTag = HeadingTag
BackingCard.Description = Description

BackingCard.defaultProps = {
  hasBorder: true,
  disabled: false,
}

BackingCard.propTypes = {
  hasBorder: PropTypes.bool,
  disabled: PropTypes.bool,
}
