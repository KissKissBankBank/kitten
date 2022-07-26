import React from 'react'
import classNames from 'classnames'

export const TagList = ({ className, ...props }) => {
  return (
    <ul
      className={classNames(
        'k-RewardCard__tagList',
        'k-RewardCard__drawer',
        className,
      )}
      {...props}
    />
  )
}
