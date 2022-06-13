import React from 'react'
import classNames from 'classnames'
import { Text } from '../../../typography/text'

export const FieldError = ({ children, className, ...others }) => {
  return (
    <Text
      tag="p"
      color="error"
      size="micro"
      weight="500"
      lineHeight="normal"
      className={classNames(
        className,
        'k-Field__error',
        'k-u-margin-none k-u-margin-top-single',
      )}
      {...others}
    >
      {children}
    </Text>
  )
}
