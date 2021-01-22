import React from 'react'
import classNames from 'classnames'

export const Description = props => {
  return (
    <div
      {...props}
      className={classNames(
        'k-BackingCard__descriptionWrapper',
        'k-BackingCard__drawer',
        'k-BackingCard__drawer--extensible',
        props.className,
      )}
    />
  )
}
