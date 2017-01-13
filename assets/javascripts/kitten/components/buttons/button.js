import React from 'react'
import classNames from 'classnames'

export class Button extends React.Component {
  renderLeftIcon() {
    if (this.props.iconOnRight) { return null }
    return this.props.children
  }

  renderRightIcon() {
    if (this.props.iconOnRight) { return this.props.children }
    return null
  }

  render() {
    const { className,
            text,
            children,
            tag,
            size,
            iconOnRight,
            ...rest }
    = this.props

    const buttonTypeClassName = `k-Button--${this.props.name}`

    let buttonSizeClassName
    if (size) {
      buttonSizeClassName = `k-Button--${size}`
    }

    let buttonIconOnRightClassName
    if (iconOnRight) {
      buttonIconOnRightClassName = 'k-Button--iconRight'
    }

    let buttonClassNames = classNames(
      'k-Button',
       className,
       buttonTypeClassName,
       buttonSizeClassName,
       buttonIconOnRightClassName
    )

    const Tag = tag

    return (
      <Tag className={ buttonClassNames } { ...rest }>
        { this.renderLeftIcon() }
        { text }
        { this.renderRightIcon() }
      </Tag>
    )
  }
}

Button.defaultProps = {
  name: 'hydrogen',
  text: 'Button',
  tag: 'button',
  size: 'k-Button--tiny',
  iconOnRight: 'k-Button--iconRight',
  disabled: false,
}
