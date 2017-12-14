import React from 'react'
import classNames from 'classnames'

export const HorizontalStroke  = ({ tiny, medium, big, className, ... props }) => {
  const horizontalstrokeClassName = classNames(
    'k-HorizontalStroke ',
    {
      'k-HorizontalStroke--tiny': tiny,
      'k-HorizontalStroke--medium': medium,
      'k-HorizontalStroke--big': big,
    },
    className
  )

  return (
    <span className={ horizontalStrokeClassName } { ...props } />
  )
}

HorizontalStroke .defaultProps = {
  tiny: false,
  medium: false,
  big: false,
}
