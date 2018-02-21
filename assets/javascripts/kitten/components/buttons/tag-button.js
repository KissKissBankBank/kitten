import React, { Component } from 'react'
import classNames from 'classnames'

export class TagButton extends Component {
  render() {
    const {
      className,
      tag,
      children,
      modifier,
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
        [`k-TagButton--${modifier}`]: modifier,
        'is-selected': selected,
        'k-TagButton--tiny': tiny,
        'k-TagButton--big': big,
        'k-TagButton--icon': icon,
      },
    )

    const Tag = tag

    return (
      <Tag
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
  modifier: 'mercure',
  icon: false,
  tiny: false,
  big: false,
  selected: false,
}
