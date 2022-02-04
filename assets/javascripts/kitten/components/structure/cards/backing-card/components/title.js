import React from 'react'
import classNames from 'classnames'
import Truncate from 'react-truncate'
import { Text } from '../../../../typography/text'

export const Title = ({ className, textSize, children, ...props }) => {
  return (
    <div
      className={classNames(
        'k-BackingCard__titleWrapper',
        'k-BackingCard__drawer',
      )}
    >
      <Text
        tag="h3"
        weight="bold"
        lineHeight="1"
        className={classNames(
          'k-BackingCard__title',
          'k-u-margin-none',
          'k-u-align-center',
          className,
        )}
        {...props}
        size={textSize}
      >
        <Truncate lines={2}>{children}</Truncate>
      </Text>
    </div>
  )
}

Title.defaultProps = {
  textSize: 'big',
}
