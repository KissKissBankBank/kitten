import React from 'react'
import classNames from 'classnames'
import { Text } from '../../../typography/text'

export const Info = ({ legend, value, ...props }) => {
  return (
    <p
      {...props}
      className={classNames(
        'k-BackingCard__info',
        'k-BackingCard__halfDrawer',
        'k-u-size-tiny',
        'k-u-line-height-normal',
        props.className,
      )}
    >
      <Text weight="regular" size="tiny" lineHeight="normal">
        {legend}
      </Text>{' '}
      <Text weight="light" size="tiny" lineHeight="normal">
        {value}
      </Text>
    </p>
  )
}
