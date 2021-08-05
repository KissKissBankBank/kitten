import React from 'react'
import { Text } from '../../../../../components/atoms/typography/text'

export const RewardNumber = props => {
  return (
    <Text
      color="font1"
      weight="light"
      size="tiny"
      {...props}
      className="k-RewardSummaryCard__rewardNumber"
    />
  )
}
