import React from 'react'
import { Text } from '../../../components/typography/text'

export const SupTitle = ({ className, ...textProps}) => (
  <Text
    size="tiny"
    lineHeigth="normal"
    transform="uppercase"
    weight="bold"
    className={className}
    {...textProps}
  />
)

SupTitle.defaultProps = {
  children: 'Lorem ipsum',
}
