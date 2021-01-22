import React from 'react'
import classNames from 'classnames'

export const Image = props => {
  return (
    <div
      {...props}
      className={classNames('k-BackingCard__imageWrapper', props.className)}
    />
  )
}
