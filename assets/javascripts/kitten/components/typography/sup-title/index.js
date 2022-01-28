import React from 'react'
import { Text } from '../../../../components/typography/text'

export const SupTitle = props => (
  <Text
    size="tiny"
    lineHeight="normal"
    transform="uppercase"
    weight="bold"
    {...props}
  />
)

SupTitle.defaultProps = {
  children: 'Lorem ipsum',
}
