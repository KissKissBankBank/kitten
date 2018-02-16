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
      withoutBorder,
      padding,
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
        'k-TagButton--withoutBorder--big': big == true && withoutBorder,
        'k-TagButton--padding--big': big == true && padding,
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
  selected: false,
  icon: false,
  tiny: false,
  big: false,
  withoutBorder: false,
  padding: false,
}
