import React from 'react'
import { Text } from '../../../../components/atoms/typography/text'

export const SupTitle = textProps => (
  <Text
    size="tiny"
    lineHeight="normal"
    transform="uppercase"
    weight="bold"
    {...textProps}
  />
)

SupTitle.defaultProps = {
  children: 'Lorem ipsum',
}
