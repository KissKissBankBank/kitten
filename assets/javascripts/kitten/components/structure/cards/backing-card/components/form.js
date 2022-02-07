import React from 'react'
import classNames from 'classnames'

export const Form = ({ className, ...props }) => {
  return (
    <div
      className={classNames(
        'k-BackingCard__formWrapper',
        'k-BackingCard__drawer',
        className,
      )}
      {...props}
    />
  )
}
