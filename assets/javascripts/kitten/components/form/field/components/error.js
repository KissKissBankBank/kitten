import React, { Component } from 'react'
import { Marger } from '../../../layout/marger'
import { Text } from '../../../typography/text'

export class FieldError extends Component {
  render() {
    const { children, ...others } = this.props

    return (
      <Marger top="1">
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
      </Marger>
    )
  }
}
