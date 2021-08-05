import React from 'react'
import classNames from 'classnames'
import { Text } from '../../../../../components/atoms/typography/text'

export const Amount = props => {
  return (
    <Text
      color="font1"
      weight="light"
      size="tiny"
      {...props}
      className={classNames('k-RewardSummaryCard__amount', props.className)}
    />
  )
}
