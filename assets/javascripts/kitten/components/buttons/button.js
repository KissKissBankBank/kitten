import React from 'react'
import classNames from 'classnames'

export class Button extends React.Component {
  render() {
    const {
      className,
      tag,
      modifier,
      size,
      icon,
      iconOnRight,
      iconWithMinWidth,
      ...others,
    } = this.props

    let buttonClassNames = classNames(
      'k-Button',
      {
        [`k-Button--${modifier}`]: modifier,
        [`k-Button--${size}`]: size,
        'k-Button--icon': icon,
        'k-Button--iconRight': iconOnRight,
        'k-Button--iconWithMinWidth': iconWithMinWidth,
      },
      className,
    )

    // Adds keyboard accessibility to `<a>`
    const tabindex = (tag == "a" && !this.props.href) ? 0 : null

    const Tag = tag

    return (
      <Tag
        className={ buttonClassNames }
        tabIndex={ tabindex }
        { ...others }
      />
    )
  }
}

Button.defaultProps = {
  tag: 'button',
  modifier: 'hydrogen',
  icon: false,
  iconOnRight: false,
  iconWithMinWidth: false,
}
