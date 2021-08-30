import React from 'react'
import classNames from 'classnames'

export const Options = ({ className, ...props }) => {
  return (
    <div
      className={classNames(
        'k-RewardSummaryCard__options',
        'k-u-hidden@xs-down',
        className,
      )}
      {...props}
    />
  )
}
