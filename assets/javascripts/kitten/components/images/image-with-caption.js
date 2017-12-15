import React, { Component } from 'react'
import classNames from 'classnames'
import { Text } from 'kitten/components/typography/text'

export class ImageWithCaption extends Component {
  renderCaption() {
    const {
      children,
      ...others
    } = this.props

    return (
      <figcaption className="k-ImageWithCaption__caption">
        <Text
          size="default"
          color="font-1"
        >
          { children }
        </Text>
      </figcaption>
    )
  }

  render() {
    return (
      <figure className="k-ImageWithCaption">
        <img
          src="https://placehold.it/300x400/4a84ff/4a84ff"
          className="k-ImageWithCaption__img"
        />
        { this.renderCaption() }
      </figure>
    )
  }
}

ImageWithCaption.defaultProps = {
  children: "Hello word",
}
