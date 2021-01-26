import React, { cloneElement } from 'react'
import classNames from 'classnames'
import { StyledBackingCard } from './styles'
import {
  Info,
  Title,
  Image,
  Amount,
  Button,
  TagList,
  HeadingTag,
  Description,
} from './components'

export const BackingCard = ({ children, className, disabled, ...props }) => {
  return (
    <StyledBackingCard
      {...props}
      className={classNames('k-BackingCard', className, {
        'k-BackingCard--disabled': disabled,
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
BackingCard.Title = Title
BackingCard.Image = Image
BackingCard.Amount = Amount
BackingCard.Button = Button
BackingCard.TagList = TagList
BackingCard.HeadingTag = HeadingTag
BackingCard.Description = Description
