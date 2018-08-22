import React, { Component } from 'react'
import classNames from 'classnames'

export class Button extends Component {
  render() {
    const {
      className,
      tag,
      modifier,
      size,
      icon,
      readonly,
      iconOnRight,
      iconWithMinWidth,
      ...others
    } = this.props

    let buttonClassNames = classNames(
      'k-Button',
      {
        [`k-Button--${modifier}`]: modifier,
        [`k-Button--${size}`]: size,
        'k-Button--icon': icon,
        'is-readonly': readonly,
        'k-Button--iconRight': iconOnRight,
        'k-Button--iconWithMinWidth': iconWithMinWidth,
        'k-Button--icon--tiny': size == 'tiny' && icon,
        'k-Button--iconRight--tiny': size == 'tiny' && iconOnRight,
      },
      className,
    )

    // Adds keyboard accessibility to `<a>`
    const tabindex = tag == 'a' && !this.props.href ? 0 : null

    const Tag = tag

    return <Tag className={buttonClassNames} tabIndex={tabindex} {...others} />
  }
}

Button.defaultProps = {
  tag: 'button',
  modifier: 'hydrogen',
  icon: false,
  readonly: false,
  iconOnRight: false,
  iconWithMinWidth: false,
}
