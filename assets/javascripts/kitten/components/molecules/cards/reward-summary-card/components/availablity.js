import React from 'react'
import { Text } from '../../../../../components/atoms/typography/text'
import classNames from 'classnames'

export const Availablity = props => {
  return (
    <Text
      color="font1"
      weight="light"
      size="tiny"
      {...props}
      className={classNames(
        'k-RewardSummaryCard__availablity',
        'k-u-hidden@s-down',
      )}
    />
  )
}
