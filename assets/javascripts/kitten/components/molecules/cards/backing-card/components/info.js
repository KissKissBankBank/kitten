import React from 'react'
import classNames from 'classnames'
import { Text } from '../../../../atoms/typography/text'

export const Info = ({ legend, value, fullWidth = false, ...props }) => {
  console.warn('This subcomponent is deprecated. Please use another one.')

  return (
    <p
      {...props}
      className={classNames(
        'k-BackingCard__info',
        'k-u-size-tiny',
        'k-u-line-height-normal',
        props.className,
        {
          'k-BackingCard__halfDrawer': !fullWidth,
          'k-BackingCard__drawer': fullWidth,
        },
      )}
    >
      <Text
        className="k-BackingCard__info__legend"
        weight="regular"
        size="tiny"
        lineHeight="normal"
      >
        {legend}
      </Text>{' '}
      <Text
        className="k-BackingCard__info__value"
        weight="light"
        size="tiny"
        lineHeight="normal"
      >
        {value}
      </Text>
    </p>
  )
}
