import React from 'react'
import classNames from 'classnames'
import { Text } from '../../../../typography/text'

export const Amount = ({ className, ...props }) => {
  return (
    <Text
      tag="p"
      weight="bold"
      lineHeight="1"
      className={classNames(
        'k-BackingCard__amount',
        'k-BackingCard__drawer',
        'k-u-align-center',
        className,
      )}
      {...props}
    />
  )
}
