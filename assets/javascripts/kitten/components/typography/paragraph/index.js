import React, { Component } from 'react'
import classNames from 'classnames'

export class Paragraph extends Component {
  render() {
    const {
      className,
      tag,
      modifier,
      margin,
      normalLineHeight,
      italic,
      ...other
    } = this.props

    const paragraphClassNames = classNames(
      'k-Paragraph',
      className,
      `k-Paragraph--${modifier}`,
      {
        'k-Paragraph--withoutMargin': !margin,
        'k-Paragraph--normalLineHeight': normalLineHeight,
        'k-Paragraph--italic': italic,
      },
    )

    const Tag = tag

    return <Tag className={paragraphClassNames} {...other} />
  }
}

Paragraph.defaultProps = {
  tag: 'p',
  modifier: 'primary',
  margin: true,
  normalLineHeight: false,
  italic: false,
}
