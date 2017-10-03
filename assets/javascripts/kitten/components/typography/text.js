import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export class Text extends Component {
  render() {
    const {
      className,
      color,
      decoration,
      lineHeight,
      margin,
      size,
      style,
      tag,
      transform,
      weight,
      ...others,
    } = this.props

    const Tag = tag

    const textClassName = classNames(
      {
        // Color.
        'k-u-color-font1': color == 'font1',
        'k-u-color-primary1': color == 'primary1',
        'k-u-color-error': color == 'error',

        // Decoration.
        'k-u-decoration-underline': decoration == 'underline',

        // Line height.
        'k-u-line-height-normal': lineHeight == 'normal',

        // Size.
        'k-u-size-huge': size == 'huge',
        'k-u-size-big': size == 'big',
        'k-u-size-default': size == 'default',
        'k-u-size-tiny': size == 'tiny',
        'k-u-size-micro': size == 'micro',
        'k-u-size-nano': size == 'nano',

        // Style.
        'k-u-style-normal': style == 'normal',
        'k-u-style-italic': style == 'italic',

        // Transform.
        'k-u-transform-uppercase': transform == 'uppercase',

        // Weight.
        'k-u-weight-light': weight == 'light',
        'k-u-weight-regular': weight == 'regular',
        'k-u-weight-bold': weight == 'bold',

        // Margin
        'k-u-margin-top-none': !margin,
        'k-u-margin-bottom-none': !margin,
      },
      className,
    )

    return (
      <Tag { ...others } className={ textClassName } />
    )
  }
}

Text.propTypes = {
  color: PropTypes.oneOf(['font1', 'primary1', 'error']),
  decoration: PropTypes.oneOf(['underline']),
  lineHeight: PropTypes.oneOf(['normal']),
  size: PropTypes.oneOf(['huge', 'big', 'default', 'tiny', 'micro', 'nano']),
  style: PropTypes.oneOf(['normal', 'italic']),
  transform: PropTypes.oneOf(['uppercase']),
  weight: PropTypes.oneOf(['light', 'regular', 'bold']),
}

Text.defaultProps = {
  className: null,
  color: null,
  decoration: null,
  lineHeight: null,
  margin: true,
  size: null,
  style: null,
  tag: 'span',
  transform: null,
  weight: null,
}
