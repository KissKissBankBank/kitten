import React from 'react'
import classNames from 'classnames'
import { Text } from '../../../../index'

export const Title = ({ className, ...props }) => {
  return (
    <Text
      tag="h3"
      weight="bold"
      size="default"
      lineHeight="1"
      {...props}
      className={classNames(
        'k-BackingCard__title',
        'k-BackingCard__drawer',
        className,
      )}
    />
  )
}
