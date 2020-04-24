import React, { Component } from 'react'
import classNames from 'classnames'

export class ButtonImage extends Component {
  renderImage(props) {
    if (!props) return null
    const { className, alt, ...others } = props

    const imgClassName = classNames('k-ButtonImage__img', className)

    return <img className={imgClassName} alt={alt || ''} {...others} />
  }

  render() {
    const {
      tag,
      className,
      tiny,
      big,
      huge,
      withoutPointerEvents,
      withBorder,
      img,
      ...others
    } = this.props

    const buttonClassName = classNames(
      'k-ButtonImage',
      {
        'k-ButtonImage--tiny': tiny,
        'k-ButtonImage--big': big,
        'k-ButtonImage--huge': huge,
        'k-ButtonImage--withoutPointerEvents': withoutPointerEvents,
        'k-ButtonImage--withBorder': withBorder,
      },
      className,
    )

    // Adds keyboard accessibility to `<a>`
    const tabindex = tag == 'a' && !this.props.href ? 0 : null

    const Tag = tag

    return (
      <Tag className={buttonClassName} tabIndex={tabindex} {...others}>
        {this.renderImage(img)}
      </Tag>
    )
  }
}

ButtonImage.defaultProps = {
  tag: 'button',
  className: null,
  tiny: false,
  big: false,
  huge: false,
  withoutPointerEvents: false,
  withBorder: false,
  img: {
    className: null,
  },
}
