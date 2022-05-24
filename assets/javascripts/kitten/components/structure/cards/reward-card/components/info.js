import React from 'react'
import classNames from 'classnames'
import { Text } from '../../../../typography/text'

export const Info = ({
  className,
  legend,
  value,
  fullWidth = false,
  ...props
}) => {
  console.warn('This subcomponent is deprecated. Please use another one.')

  return (
    <p
      className={classNames(
        'k-RewardCard__info',
        'k-u-size-small',
        'k-u-line-height-normal',
        className,
        {
          'k-RewardCard__halfDrawer': !fullWidth,
          'k-RewardCard__drawer': fullWidth,
        },
      )}
      {...props}
    >
      <Text
        className="k-RewardCard__info__legend"
        weight="500"
        size="small"
        lineHeight="normal"
      >
        {legend}
      </Text>{' '}
      <Text
        className="k-RewardCard__info__value"
        weight="400"
        size="small"
        lineHeight="normal"
      >
        {value}
      </Text>
    </p>
  )
}
