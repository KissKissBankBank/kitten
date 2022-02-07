import React from 'react'
import classNames from 'classnames'
import { Text } from '../../../../typography/text'

export const Amount = ({ className, suffix, children, ...props }) => {
  return (
    <p
      className={classNames(
        'k-BackingCard__drawer',
        'k-BackingCard__amount__wrapper',
        'k-u-align-center',
        className,
      )}
      {...props}
    >
      <Text weight="bold" className="k-BackingCard__amount k-u-block">
        {children}
      </Text>
      {suffix && (
        <Text
          weight="regular"
          transform="uppercase"
          letterSpacing="10%"
          className="k-BackingCard__amount__suffix k-u-block"
        >
          {suffix}
        </Text>
      )}
    </p>
  )
}
