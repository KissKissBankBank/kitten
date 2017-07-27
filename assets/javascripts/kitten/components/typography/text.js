import React, { Component } from 'react'
import classNames from 'classnames'

export class Text extends Component {
  render() {
    const {
      tag,
      weight,
      size,
      lineHeight,
      color,
      style,
      align,
      transform,
      decoration,
      className,
      children,
      ...others,
    } = this.props

    const Tag = tag

    const textClassName = classNames(
      {
        // Weight.
        'k-u-weight-light': weight == 'light',
        'k-u-weight-regular': weight == 'regular',
        'k-u-weight-bold': weight == 'bold',

        // Size.
        'k-u-size-huge': size == 'huge',
        'k-u-size-big': size == 'big',
        'k-u-size-default': size == 'default',
        'k-u-size-tiny': size == 'tiny',
        'k-u-size-micro': size == 'micro',
        'k-u-size-nano': size == 'nano',

        // Line height.
        'k-u-line-height-normal': lineHeight == 'normal',

        // Color.
        'k-u-color-font1': color == 'font1',
        'k-u-color-primary1': color == 'primary1',
        'k-u-color-error': color == 'error',

        // Style.
        'k-u-style-normal': style == 'normal',
        'k-u-style-italic': style == 'italic',

        // Align.
        'k-u-align-left': align == 'left',
        'k-u-align-center': align == 'center',
        'k-u-align-right': align == 'right',

        // Transform.
        'k-u-transform-uppercase': transform == 'uppercase',
        'k-u-transform-lowercase': transform == 'lowercase',
        'k-u-transform-capitalize': transform == 'capitalize',

        // Decoration.
        'k-u-decoration-underline': decoration == 'underline',
        'k-u-decoration-overline': decoration == 'overline',
        'k-u-decoration-line-through': decoration == 'line-through',
      },
      className,
    )

    return (
      <Tag { ...others } className={ textClassName }>
        { children }
      </Tag>
    )
  }
}

Text.defaultProps = {
  children: 'Lorem ipsum…',
  tag: 'p',
  className: null,
  weight: null, // Available options: 'light', 'regular', 'bold'.
  size: null, // Available options: 'huge', 'big', 'default', 'tiny', 'micro', 'nano'.
  lineHeight: null, // Available options: 'normal'.
  color: null, // Available options: 'font1', 'primary1', 'error'.
  style: null,  // Available options: 'normal', 'italic'.
  align: null, // Available options: 'left', 'center', 'right'.
  transform: null, // Available options: 'uppercase', 'lowercase', 'capitalize'.
  decoration: null, // Available options: 'underline', 'overline', 'line-through'.
}
