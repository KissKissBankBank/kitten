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
      setting,
      size,
      fontStyle,
      tag,
      transform,
      weight,
      ...others
    } = this.props

    const Tag = tag

    const textClassName = classNames(
      {
        // Color.
        'k-u-color-font1': color == 'font1',
        'k-u-color-font2': color == 'font2',
        'k-u-color-primary1': color == 'primary1',
        'k-u-color-background1': color == 'background1',
        'k-u-color-error': color == 'error',
        'k-u-color-valid': color == 'valid',

        // Decoration.
        'k-u-decoration-underline': decoration == 'underline',
        'k-u-decoration-none': decoration == 'none',

        // Line height.
        'k-u-line-height-normal': lineHeight == 'normal',
        'k-u-line-height-1': lineHeight == '1',
        'k-u-line-height-1-3': lineHeight == '1.3',

        // Setting.
        'k-u-font-setting-tnum': setting == 'tnum', // Monospaced numbers.

        // Size.
        'k-u-size-huge': size == 'huge',
        'k-u-size-big': size == 'big',
        'k-u-size-default': size == 'default',
        'k-u-size-tiny': size == 'tiny',
        'k-u-size-micro': size == 'micro',
        'k-u-size-nano': size == 'nano',

        // Style.
        'k-u-style-normal': fontStyle == 'normal',
        'k-u-style-italic': fontStyle == 'italic',

        // Transform.
        'k-u-transform-uppercase': transform == 'uppercase',

        // Weight.
        'k-u-weight-light': weight == 'light',
        'k-u-weight-regular': weight == 'regular',
        'k-u-weight-bold': weight == 'bold',
      },
      className,
    )

    return <Tag {...others} className={textClassName} />
  }
}

Text.propTypes = {
  color: PropTypes.oneOf([
    'font1',
    'font2',
    'primary1',
    'background1',
    'error',
    'valid',
  ]),
  decoration: PropTypes.oneOf(['underline', 'none']),
  lineHeight: PropTypes.oneOf(['normal', '1', '1.3']),
  setting: PropTypes.oneOf(['tnum']),
  size: PropTypes.oneOf(['huge', 'big', 'default', 'tiny', 'micro', 'nano']),
  fontStyle: PropTypes.oneOf(['normal', 'italic']),
  transform: PropTypes.oneOf(['uppercase']),
  weight: PropTypes.oneOf(['light', 'regular', 'bold']),
}

Text.defaultProps = {
  className: null,
  color: null,
  decoration: null,
  lineHeight: null,
  setting: null,
  size: null,
  fontStyle: null,
  tag: 'span',
  transform: null,
  weight: null,
}
