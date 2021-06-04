import React from 'react'
import classNames from 'classnames'
import { Text } from '../../../../components/typography/text'

export const Description = props => {
  return (
    <Text
      tag="p"
      color="font1"
      weight="light"
      size="micro"
      className={classNames(
        'k-ContributionCard__description',
        props.className,
      )}
      {...props}
    />
  )
}
