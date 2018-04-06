import React, { Component } from 'react'
import classNames from 'classnames'

export class ButtonIcon extends Component {
  render() {
    const {
      className,
      tag,
      modifier,
      size,
      withoutHover,
      verticalArrow,
      rounded,
      ...others
    } = this.props

    const buttonIconClassNames = classNames('k-ButtonIcon', className, {
      [`k-ButtonIcon--${modifier}`]: modifier,
      [`k-ButtonIcon--${size}`]: size,
      'k-ButtonIcon--withoutHover': withoutHover,
      'k-ButtonIcon--verticalArrow': verticalArrow,
      'k-ButtonIcon--rounded': rounded,
    })

    // Adds keyboard accessibility to `<a>`
    const tabindex = tag == 'a' && !this.props.href ? 0 : null

    const Tag = tag

    return (
      <Tag className={buttonIconClassNames} tabIndex={tabindex} {...others} />
    )
  }
}

ButtonIcon.defaultProps = {
  tag: 'button',
  size: null,
  modifier: 'hydrogen',
  withoutHover: false,
  verticalArrow: false,
  rounded: false,
}
