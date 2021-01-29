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

export const BackingCard = ({
  children,
  className,
  disabled,
  hasBorder,
  ...props
}) => {
  return (
    <StyledBackingCard
      {...props}
      className={classNames('k-BackingCard', className, {
        'k-BackingCard--disabled': disabled,
        'k-BackingCard--hasBorder': hasBorder,
      })}
    >
      {React.Children.map(children, child => {
        if (!child) return null
        return child.type.name === 'Image' ? child : null
      })}

      <div className="k-BackingCard__gridWrapper">
        {React.Children.map(children, child => {
          if (!child) return null
          return ['Image', 'Button'].includes(child.type.name) ? null : child
        })}
      </div>

      {React.Children.map(children, child => {
        if (!child) return null
        return child.type.name === 'Button'
          ? cloneElement(child, { disabled })
          : null
      })}
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
