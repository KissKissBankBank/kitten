import React from 'react'
import classNames from 'classnames'

export const VisuallyHidden = ({ className, ...props }) => {
  return (
    <span
      className={classNames(className, 'k-u-a11y-visuallyHidden')}
      {...props}
    />
  )
}
