import React from 'react'
import { Text } from '../../../../../components/atoms/typography/text'

export const Availablity = props => {
  return (
    <Text
      color="font1"
      weight="light"
      size="tiny"
      {...props}
      className="k-RewardSummaryCard__availablity"
    />
  )
}
