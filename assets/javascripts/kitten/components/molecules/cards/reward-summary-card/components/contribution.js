import React from 'react'
import { Text } from '../../../../../components/atoms/typography/text'
import classNames from 'classnames'

export const Contribution = props => {
  return (
    <Text
      color="font1"
      weight="light"
      size="tiny"
      {...props}
      className={classNames(
        'k-RewardSummaryCard__contribution',
        props.className,
        'k-u-hidden@xs-down',
      )}
    />
  )
}
