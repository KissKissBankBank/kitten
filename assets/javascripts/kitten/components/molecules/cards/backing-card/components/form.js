import React from 'react'
import classNames from 'classnames'

export const Form = props => {
  return (
    <div
      {...props}
      className={classNames(
        'k-BackingCard__formWrapper',
        'k-BackingCard__drawer',
        props.className,
      )}
    />
  )
}
