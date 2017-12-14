import React, { Component } from 'react'
import classNames from 'classnames'
import { Text } from 'kitten/components/typography/text'

export class ImageWithCaption extends Component {
  render() {
    const {
    children,
    text,
    className,
    ...others } = this.props

    return (
      <figure className="k-ImageWithCaption">
        <img
          src="https://pixabay.com/photo-1435590/"
        />
        <figcaption className="k-ImageWithCaption__caption">
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

ImageWithCaption.defaultProps = {
  text: "Hello word",
}
