import React from 'react'
import { Text } from '../../../atoms/typography/text'

export const FieldError = ({ children, ...others }) => {
  return (
    <div className="k-u-margin-top-single">
      <Text
        tag="p"
        color="error"
        size="micro"
        weight="regular"
        lineHeight="normal"
        style={{ margin: 0 }}
        {...others}
      >
        {children}
      </Text>
    </div>
  )
}
