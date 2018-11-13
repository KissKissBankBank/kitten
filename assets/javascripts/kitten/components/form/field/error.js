import React, { Component } from 'react'
import { Marger } from 'kitten/components/layout/marger'
import { Text } from 'kitten/components/typography/text'

export class FieldError extends Component {
  render() {
    const { children } = this.props

    return (
      <Marger top="1">
        <Text
          tag="p"
          color="error"
          size="micro"
          weight="regular"
          lineHeight="normal"
          style={{ margin: 0 }}
        >
          {children}
        </Text>
      </Marger>
    )
  }
}
