import React, { Component } from 'react'
import { Text } from '../../components/typography/text'

export class KarlExampleTitle extends Component {
  render() {
    return (
      <Text
        tag="p"
        weight="regular"
        size="default"
        fontStyle="italic"
        color="font2"
        lineHeight="normal"
      >
        {this.props.children}
      </Text>
    )
  }
}
