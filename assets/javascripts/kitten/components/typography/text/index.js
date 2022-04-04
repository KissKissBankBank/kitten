import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { checkDeprecatedSizes } from '../../../helpers/utils/deprecated'

export const allowedColorStrings = [
  'font1',
  'font2',
  'primary1',
  'background1',
  'error',
  'valid',
  'grey-000',
  'grey-100',
  'grey-200',
  'grey-300',
  'grey-400',
  'grey-500',
  'grey-600',
  'grey-700',
  'grey-800',
  'grey-900',
  'primary-100',
  'primary-300',
  'primary-500',
  'primary-700',
  'primary-900',
  'danger-100',
  'danger-300',
  'danger-500',
  'danger-700',
  'danger-900',
  'success-100',
  'success-300',
  'success-500',
  'success-700',
  'success-900',
  'warning-100',
  'warning-300',
  'warning-500',
  'warning-700',
  'warning-900',
]

export const Text = ({
  className,
  color,
  cssColor,
  decoration,
  lineHeight,
  setting,
  size,
  fontStyle,
  tag,
  as,
  transform,
  weight,
  style,
  letterSpacing,
  ...others
}) => {
  
  checkDeprecatedSizes(size)
  
  const Tag = as || tag

  const textClassName = classNames(
    {
      // Color.
      [`k-u-color-${color}`]: allowedColorStrings.includes(color),

      // Decoration.
      'k-u-decoration-underline': decoration == 'underline',
      'k-u-decoration-none': decoration == 'none',

      // Letter spacing.
      'k-u-letter-spacing-10': letterSpacing == '10%',

      // Line height.
      'k-u-line-height-normal': lineHeight == 'normal',
      'k-u-line-height-1': lineHeight == '1',
      'k-u-line-height-1-25': lineHeight == '1.25',
      'k-u-line-height-1-3': lineHeight == '1.3',
      'k-u-line-height-1-4': lineHeight == '1.4',

      // Font Feature Settings.
      'k-u-font-setting-tnum': setting == 'tnum', // Monospaced numbers.

      // Size.
      'k-u-size-giant': size == 'giant',
      'k-u-size-huge': size == 'huge',
      'k-u-size-big': size == 'big', // Deprecated
      'k-u-size-large': size == 'large',
      'k-u-size-default': size == 'default', // Deprecated
      'k-u-size-medium': size == 'medium',
      'k-u-size-tiny': size == 'tiny', // Deprecated
      'k-u-size-small': size == 'small',
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

  return (
    <Tag
      {...others}
      className={textClassName}
      style={cssColor ? { color: cssColor, ...style } : style}
    />
  )
}

Text.propTypes = {
  color: PropTypes.oneOf(allowedColorStrings),
  cssColor: PropTypes.string,
  decoration: PropTypes.oneOf(['underline', 'none']),
  setting: PropTypes.oneOf(['tnum']),
  lineHeight: PropTypes.oneOf(['normal', '1', '1.25', '1.3', '1.4']),
  size: PropTypes.oneOf([
    'giant',
    'huge',
    'large',
    'medium',
    'small',
    'micro',
    'nano',
  ]),
  fontStyle: PropTypes.oneOf(['normal', 'italic']),
  transform: PropTypes.oneOf(['uppercase']),
  weight: PropTypes.oneOf(['light', 'regular', 'bold']),
  letterSpacing: PropTypes.string,
}

Text.defaultProps = {
  className: null,
  color: null,
  cssColor: null,
  decoration: null,
  lineHeight: null,
  setting: null,
  size: null,
  fontStyle: null,
  tag: 'span',
  transform: null,
  weight: 'light',
  letterSpacing: null,
}
