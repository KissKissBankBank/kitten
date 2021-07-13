import React from 'react'
import classNames from 'classnames'
import { Text } from '../../../../components/typography/text'

export const Title = props => {
  return (
    <Text
      color="font1"
      weight="bold"
      {...props}
      className={classNames('k-ContributionCard__title', props.className)}
    />
  )
}
