import React from 'react'
import classNames from 'classnames'

export class Button extends React.Component {
  renderLeftIcon() {
    if (this.props.iconOnRight) { return null }
    return this.props.children
  }

  renderRightIcon() {
    if (this.props.iconOnRight) { return this.props.children }
  }

  render() {
    const { className,
            text,
            children,
            tag,
            name,
            size,
            iconOnRight,
            ...others } = this.props

    let buttonClassNames = classNames(
      'k-Button',
      className,
      {
        [`k-Button--${name}`]: name,
        [`k-Button--${size}`]: size,
        'k-Button--iconRight': iconOnRight,
      },
    )

    const Tag = tag

    return (
      <Tag className={ buttonClassNames } name={ name } { ...others }>
        { this.renderLeftIcon() }
        { text }
        { this.renderRightIcon() }
      </Tag>
    )
  }
}

Button.defaultProps = {
  tag: 'button',
  name: 'hydrogen',
  text: 'Button',
  iconOnRight: false,
  children: null,
}
