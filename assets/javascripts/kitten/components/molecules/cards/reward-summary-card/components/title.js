import React from 'react'
import { Text } from '../../../../../components/atoms/typography/text'
import classNames from 'classnames'

export const Title = ({ className, ...props }) => {
  return (
    <Text
      color="font1"
      weight="regular"
      size="tiny"
      {...props}
      className={classNames('k-RewardSummaryCard__title', className)}
    />
  )
}
