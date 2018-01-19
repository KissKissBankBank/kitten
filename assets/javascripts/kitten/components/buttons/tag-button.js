import React, { Component } from 'react'
import classNames from 'classnames'

export class TagButton extends Component {
  render() {
    const {
      className,
      tag,
      children,
      selected,
      tiny,
      big,
      icon,
      ...others,
    } = this.props

    const tagButtonClassNames = classNames(
      'k-TagButton',
      className,
      {
        'is-selected': selected,
        'k-TagButton--tiny': tiny,
        'k-TagButton--big': big,
        'k-TagButton--icon': icon,
      },
    )

    const type = (tag == "button") ? "button" : null

    const Tag = tag

    return (
      <Tag
        type={ type }
        className={ tagButtonClassNames }
        { ...others }
      >
        { children }
      </Tag>
    )
  }
}

TagButton.defaultProps = {
  tag: 'button',
  children: 'Tag',
  selected: false,
  icon: false,
  tiny: false,
  big: false,
}
