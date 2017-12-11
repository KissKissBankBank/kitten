import React from 'react'
import classNames from 'classnames'

export const StrokeSmall = ({ tiny, medium, big, className, ... props }) => {
  const strokeSmallClassName = classNames(
    'k-StrokeSmall',
    {
      'k-StrokeSmall--tiny': tiny,
      'k-StrokeSmall--medium': medium,
      'k-StrokeSmall--big': big,
    },
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
