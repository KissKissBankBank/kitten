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
import { useFlexGapCheck } from '../../../helpers/dom/use-flex-gap-check'

export const BackingCard = ({
  children,
  className,
  disabled,
  hasBorder,
  ...props
}) => {
  const canUseGap = useFlexGapCheck()

  return (
    <StyledBackingCard
      {...props}
      className={classNames('k-BackingCard', className, {
        'k-BackingCard--disabled': disabled,
        'k-BackingCard--hasBorder': hasBorder,
        'k-BackingCard--noGap': !canUseGap,
      })}
    >
      {React.Children.map(children, child => {
        if (!child) return null
        return child.props.__TYPE === 'Image' ? child : null
      })}

      <div className="k-BackingCard__gridWrapper">
        {React.Children.map(children, child => {
          if (!child) return null
          return ['Image', 'Button'].includes(child.props.__TYPE) ? null : child
        })}
      </div>

      {React.Children.map(children, child => {
        if (!child) return null
        return child.props.__TYPE === 'Button'
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
