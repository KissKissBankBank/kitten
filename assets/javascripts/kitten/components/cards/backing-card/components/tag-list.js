import React from 'react'
import classNames from 'classnames'

export const TagList = props => {
  return (
    <ul
      {...props}
      className={classNames(
        'k-BackingCard__tagList',
        'k-BackingCard__drawer',
        props.className,
      )}
    />
  )
}
