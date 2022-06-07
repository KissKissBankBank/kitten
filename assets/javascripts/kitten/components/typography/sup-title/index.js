import React from 'react'
import { Text } from '../../typography/text'

export const SupTitle = props => (
  <Text
    size="small"
    lineHeight="normal"
    transform="uppercase"
    weight="700"
    {...props}
  />
)

SupTitle.defaultProps = {
  children: 'Lorem ipsum',
}
