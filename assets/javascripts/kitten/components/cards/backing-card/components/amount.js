import React from 'react'
import classNames from 'classnames'
import { Text } from '../../../atoms/typography/text'

export const Amount = props => {
  return (
    <Text
      tag="p"
      weight="bold"
      lineHeight="1"
      {...props}
      className={classNames(
        'k-BackingCard__amount',
        'k-BackingCard__drawer',
        props.className,
      )}
    />
  )
}
