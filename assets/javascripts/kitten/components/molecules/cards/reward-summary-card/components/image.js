import React from 'react'
import classNames from 'classnames'

export const Image = ({ className, image, ...props }) => (
  <div
    {...props}
    image={image}
    className={classNames('k-RewardSummaryCard__imageWrapper', className)}
  />
)
