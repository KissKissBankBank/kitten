import React from 'react'
import classNames from 'classnames'

export const LinkCard = ({
  tag,
  className,
  shadow,
  translateOnHover,
  ...props,
}) => {
  const Tag = tag
  const linkClassName = classNames(
    'k-LinkCard',
    {
      'k-LinkCard--shadow': shadow,
      'k-LinkCard--translateOnHover': translateOnHover,
    },
    className
  )

  return (
    <Tag className={ linkClassName } { ...props } />
  )
}

LinkCard.defaultProps = {
  tag: 'a',
  className: null,
  shadow: false,
  translateOnHover: false,
}
