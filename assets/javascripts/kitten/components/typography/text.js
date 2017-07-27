import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

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

        // Decoration.
        'k-u-decoration-underline': decoration == 'underline',
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

Text.propTypes = {
  weight: PropTypes.oneOf(['light', 'regular', 'bold']),
  size: PropTypes.oneOf(['huge', 'big', 'default', 'tiny', 'micro', 'nano']),
  lineHeight: PropTypes.oneOf(['normal']),
  color: PropTypes.oneOf(['font1', 'primary1', 'error']),
  style: PropTypes.oneOf(['normal', 'italic']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  transform: PropTypes.oneOf(['uppercase']),
  decoration: PropTypes.oneOf(['underline']),
}

Text.defaultProps = {
  children: 'Lorem ipsum…',
  tag: 'p',
  className: null,
  weight: null,
  size: null,
  lineHeight: null,
  color: null,
  style: null,
  align: null,
  transform: null,
  decoration: null,
}
