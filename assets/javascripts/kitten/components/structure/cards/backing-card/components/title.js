import React from 'react'
import classNames from 'classnames'
import Truncate from 'react-truncate'
import { Text } from '../../../../typography/text'

export const Title = ({
  className,
  textSize,
  children,
  truncateText,
  ...props
}) => {
  return (
    <div
      className={classNames(
        'k-BackingCard__titleWrapper',
        'k-BackingCard__drawer',
        {
          'k-BackingCard__titleWrapper--truncateText': truncateText,
        },
      )}
    >
      <Text
        tag="h3"
        weight="regular"
        className={classNames(
          'k-BackingCard__title',
          'k-u-margin-none',
          'k-u-align-center',
          className,
        )}
        size={textSize}
        {...props}
      >
        {truncateText ? (
          <Truncate lines={2}>{children}</Truncate>
        ) : (
          <>{children}</>
        )}
      </Text>
    </div>
  )
}

Title.defaultProps = {
  textSize: 'big',
  truncateText: true,
}
