import React from 'react'
import classNames from 'classnames'

export const Form = ({ className, ...props }) => {
  return (
    <div
      className={classNames(
        'k-RewardCard__formWrapper',
        'k-RewardCard__drawer',
        className,
      )}
      {...props}
    />
  )
}
