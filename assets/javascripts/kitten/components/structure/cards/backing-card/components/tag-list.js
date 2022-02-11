import React from 'react'
import classNames from 'classnames'

export const TagList = ({ className, ...props }) => {
  return (
    <ul
      className={classNames(
        'k-BackingCard__tagList',
        'k-BackingCard__drawer',
        className,
      )}
      {...props}
    />
  )
}
