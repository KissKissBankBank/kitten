import React from 'react'
import classNames from 'classnames'
import { Text } from '../../../../typography/text'

export const Amount = ({ className, suffix, children, ...props }) => {
  return (
    <p
      className={classNames(
        'k-RewardCard__drawer',
        'k-RewardCard__amount__wrapper',
        'k-u-align-center',
        className,
      )}
      {...props}
    >
      <Text weight="600" className="k-RewardCard__amount k-u-block">
        {children}
      </Text>
      {suffix && (
        <Text
          weight="500"
          transform="uppercase"
          letterSpacing="10%"
          className="k-RewardCard__amount__suffix k-u-block"
        >
          {suffix}
        </Text>
      )}
    </p>
  )
}
