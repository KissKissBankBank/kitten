import React, { Component } from 'react'
import classNames from 'classnames'

export class Title extends Component {
  render() {
    const { className, modifier, tag, margin, italic, ...other } = this.props

    const titleClassNames = classNames(
      'k-Title',
      className,
      `k-Title--${modifier}`,
      {
        'k-Title--withoutMargin': !margin,
        'k-Title--italic': italic,
      },
    )

    const Tag = tag

    return <Tag className={titleClassNames} {...other} />
  }
}

Title.defaultProps = {
  tag: 'h1',
  modifier: 'primary',
  children: 'Lorem ipsum dolor sit amet…',
  margin: true,
  italic: false,
}
