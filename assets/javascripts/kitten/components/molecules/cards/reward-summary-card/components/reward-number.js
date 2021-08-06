import React from 'react'
import { Text } from '../../../../../components/atoms/typography/text'
import classNames from 'classnames'

export const RewardNumber = props => {
  return (
    <Text
      color="font1"
      weight="light"
      size="tiny"
      {...props}
      className={classNames(
        'k-RewardSummaryCard__rewardNumber',
        'k-u-hidden@s-down',
      )}
    />
  )
}
