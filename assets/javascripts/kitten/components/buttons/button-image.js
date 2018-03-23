import React from 'react'
import classNames from 'classnames'

export class ButtonImage extends React.Component {
  renderImage(props) {
    const { className, ...others } = props

    const imgClassName = classNames('k-ButtonImage__img', className)

    return <img className={imgClassName} {...others} />
  }

  render() {
    const {
      tag,
      className,
      tiny,
      big,
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
        'k-ButtonImage--withoutPointerEvents': withoutPointerEvents,
        'k-ButtonImage--withBorder': withBorder,
      },
      className
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
  withoutPointerEvents: false,
  withBorder: false,
  img: {
    className: null,
  },
}
