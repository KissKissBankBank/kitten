import React from 'react'
import classNames from 'classnames'

export const Image = ({ className, ...props }) => (
  <div
    {...props}
    className={classNames('k-ContributionCard__imageWrapper', className)}
  />
)
