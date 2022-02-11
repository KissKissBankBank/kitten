import React from 'react'
import classNames from 'classnames'
import { Text } from '../../../../typography/text'

export const Description = props => {
  return (
    <Text
      tag="p"
      color="font1"
      weight="light"
      size="micro"
      {...props}
      className={classNames('k-ContributionCard__description', props.className)}
    />
  )
}
