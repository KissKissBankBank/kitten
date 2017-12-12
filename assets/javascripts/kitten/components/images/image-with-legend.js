import React, { Component } from 'react'
import classNames from 'classnames'
import { Text } from 'kitten/components/typography/text'

export class ImageWithLegend extends Component {
  render() {
    const {
    children,
    text,
    className,
    ...others } = this.props

    return (
      <figure className="k-ImageWithLegend">
        <img src="https://placehold.it/300X400/4a84ff/4a84ff" />
        <figcaption className="k-ImageWithLegend__legend">
          <Text
            size="default"
            color="font-1"
          >
            { text }
          </Text>
        </figcaption>
      </figure>
    )
  }
}

ImageWithLegend.defaultProps = {
  text: "Hello word",
}
