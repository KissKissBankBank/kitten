import React from 'react'
import classNames from 'classnames'

export const Contents = ({ className, ...props }) => (
  <div
    className={classNames('k-BackingCard__gridWrapper', className)}
    {...props}
  />
)
