import React from 'react'
import { Text } from '../../typography/text'

export const SupTitle = props => (
  <Text
    size="small"
    lineHeight="normal"
    transform="uppercase"
    weight="bold"
    {...props}
  />
)

SupTitle.defaultProps = {
  children: 'Lorem ipsum',
}
