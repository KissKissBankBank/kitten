import React, { Component } from 'react'
import classNames from 'classnames'

export class ImageWithCaption extends Component {
  renderCaption() {
    const {
      children,
      ...others,
    } = this.props

    return (
      <figcaption className="k-ImageWithCaption__caption">
        { children }
      </figcaption>
    )
  }

  render() {
    const {
      srcImage,
      altImage,
      widthImage,
      heightImage,
      ...others,
    } = this.props

    return (
      <figure className="k-ImageWithCaption">
        <img
          src={ srcImage }
          alt={ altImage }
          width={ widthImage }
          height={ heightImage }
          className="k-ImageWithCaption__img"
        />
        { this.renderCaption() }
      </figure>
    )
  }
}

ImageWithCaption.defaultProps = {
  children: "Lorem ipsum dolor",
  srcImage: "https://placehold.it/300x400/4a84ff/4a84ff",
  altImage: "",
  widthImage: "",
  heightImage: "",
}
