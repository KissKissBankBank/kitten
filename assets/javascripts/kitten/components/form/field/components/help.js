import React from 'react'
import { Text } from '../../../typography/text'

export const FieldHelp = ({ children, ...others }) => {
  return (
    <div className="k-u-margin-top-single">
      <Text
        tag="p"
        color="var(--color-grey-700)"
        size="micro"
        weight="light"
        lineHeight="normal"
        className="k-u-margin-none"
        {...others}
      >
        {children}
      </Text>
    </div>
  )
}
