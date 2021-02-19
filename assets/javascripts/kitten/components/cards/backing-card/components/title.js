import React from 'react'
import classNames from 'classnames'
import { Text } from '../../../typography/text'
import { HorizontalStroke } from '../../../layout/horizontal-stroke'

export const Title = ({ className, textSize, strokeSize, ...props }) => {
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
        {...props}
        size={textSize}
        className={classNames(
          'k-BackingCard__title',
          'k-u-margin-none',
          className,
        )}
      />
      {!!strokeSize && (
        <HorizontalStroke
          size={strokeSize}
          className="k-u-margin-top-singleHalf k-u-margin-bottom-single"
        />
      )}
    </div>
  )
}

Title.defaultProps = {
  textSize: 'default',
  strokeSize: null,
}
