import React, { Component } from 'react'
import classNames from 'classnames'

export class ImageWithCaption extends Component {
  renderCaption() {
    const {
      children,
      className,
      captionProps,
    } = this.props

    const figcaptionClassName = classNames(
      'k-ImageWithCaption__caption',
      className,
    )

    console.log(children);
    return (
      <figcaption className={ figcaptionClassName } { ...captionProps }>
        { children }
      </figcaption>
    )
  }

  render() {
    const {
      imageSrc,
      imageAlt,
      imageWidth,
      imageHeight,
      ...others,
    } = this.props

    return (
      <figure className="k-ImageWithCaption" { ...others }>
        <img
          src={ imageSrc }
          alt={ imageAlt }
          width={ imageWidth }
          height={ imageHeight }
          className="k-ImageWithCaption__img"
        />
        { this.renderCaption() }
      </figure>
    )
  }
}

ImageWithCaption.defaultProps = {
  children: 'Lorem ipsum dolor',
  imageSrc: 'https://placehold.it/300x400/4a84ff/4a84ff',
  imageAlt: null,
  imageWidth: null,
  imageHeight: null,
}
