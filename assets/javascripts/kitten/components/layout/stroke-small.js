import React from 'react'
import classNames from 'classnames'

export const StrokeSmall = ({ tiny, medium, big, className, ... props }) => {
  const strokeSmallClassName = classNames(
    'k-SkrokeSmall',
    {'k-SkrokeSmall--tiny': tiny },
    {'k-SkrokeSmall--medium': medium },
    {'k-SkrokeSmall--big': big },
    className
  )

  return (
    <span className={ strokeSmallClassName } { ...props } />
  )
}

StrokeSmall.defaultProps = {
  tiny: false,
  medium: false,
  big: false,
}
