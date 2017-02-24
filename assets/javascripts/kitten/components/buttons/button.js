import React from 'react'
import classNames from 'classnames'

export class Button extends React.Component {
  render() {
    const { className,
            tag,
            modifier,
            size,
            iconOnRight,
            ...others } = this.props

    let buttonClassNames = classNames(
      'k-Button',
      className,
      {
        [`k-Button--${modifier}`]: modifier,
        [`k-Button--${size}`]: size,
        'k-Button--iconRight': iconOnRight,
      },
    )

    // Adds keyboard accessibility to `<a>`
    const tabindex = (tag == "a" && !this.props.href) ? 0 : null

    const Tag = tag

    return (
      <Tag className={ buttonClassNames }
           tabIndex={ tabindex }
           { ...others } />
    )
  }
}

Button.defaultProps = {
  tag: 'button',
  modifier: 'hydrogen',
  iconOnRight: false,
}
