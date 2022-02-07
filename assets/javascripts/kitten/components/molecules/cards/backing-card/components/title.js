import React, { useState } from 'react'
import classNames from 'classnames'
import Truncate from 'react-truncate'
import { Text } from '../../../../atoms/typography/text'

export const Title = ({ className, textSize, children, ...props }) => {
  const [isTruncated, setTruncated] = useState(false)

  return (
    <div
      className={classNames(
        'k-BackingCard__titleWrapper',
        'k-BackingCard__drawer',
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
          {
            'k-BackingCard__title--isTruncated': isTruncated,
          },
        )}
        size={textSize}
        {...props}
      >
        <Truncate lines={2} onTruncate={current => setTruncated(current)}>
          {children}
        </Truncate>
      </Text>
    </div>
  )
}

Title.defaultProps = {
  textSize: 'big',
}
