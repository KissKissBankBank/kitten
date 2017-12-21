import React, { Component } from 'react'
import { Text } from 'kitten/components/typography/text'

export class KarlExampleTitle extends Component {
  render() {
    return(
      <Text
        tag="p"
        weight="regular"
        size="default"
        style="italic"
        color="font2"
        lineHeight="normal"
      >
        { this.props.title }
      </Text>
    )
  }
}

KarlExampleTitle.defaultProps = {
  title: "Default",
}
