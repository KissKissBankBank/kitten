import React from 'react'
import { Text } from '../../../../../components/atoms/typography/text'

export const Title = props => {
  return (
    <Text
      color="font1"
      weight="regular"
      size="tiny"
      {...props}
      className="k-RewardSummaryCard__title"
    />
  )
}
