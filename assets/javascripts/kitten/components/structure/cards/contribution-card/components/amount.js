import React from 'react'
import classNames from 'classnames'
import { Text } from '../../../../typography/text'

export const Amount = props => {
  return (
    <Text
      color="font1"
      weight="600"
      size="huge"
      {...props}
      className={classNames('k-ContributionCard__amount', props.className)}
    />
  )
}
