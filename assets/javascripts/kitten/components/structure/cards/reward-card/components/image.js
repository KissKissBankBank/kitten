import React from 'react'
import classNames from 'classnames'

export const Image = ({ className, ...props }) => (
  <div
    className={classNames('k-RewardCard__imageWrapper', className)}
    {...props}
  />
)
