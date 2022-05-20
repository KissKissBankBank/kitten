import React from 'react'
import { Text } from '../../../typography/text'

export const FieldError = ({ children, ...others }) => {
  return (
    <div className="k-u-margin-top-single">
      <Text
        tag="p"
        color="error"
        size="micro"
        weight="regular"
        lineHeight="normal"
        className="k-u-margin-none"
        {...others}
      >
        {children}
      </Text>
    </div>
  )
}
