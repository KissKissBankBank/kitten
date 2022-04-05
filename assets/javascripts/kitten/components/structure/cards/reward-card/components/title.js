import React from 'react'
import classNames from 'classnames'
import { Text } from '../../../../typography/text'

export const Title = ({
  className,
  textSize,
  truncateText,
  style,
  ...props
}) => {
  return (
    <div
      className={classNames(
        'k-RewardCard__titleWrapper',
        'k-RewardCard__drawer',
        {
          'k-RewardCard__titleWrapper--truncateText': truncateText,
        },
      )}
    >
      <Text
        tag="h3"
        weight="regular"
        className={classNames(
          'k-RewardCard__title',
          'k-u-margin-none',
          'k-u-align-center',
          className,
          {
            'k-u-clamp': truncateText,
          },
        )}
        size={textSize}
        style={{
          '--line-clamp': 2,
          ...style,
        }}
        {...props}
      />
    </div>
  )
}

Title.defaultProps = {
  textSize: 'big',
  truncateText: true,
}
