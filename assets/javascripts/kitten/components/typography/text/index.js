import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledText = styled.span`
  ${({ cssColor }) =>
    cssColor &&
    css`
      color: ${cssColor};
    `}
`

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
  transform,
  weight,
  ...others
}) => {

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

      // Font Feature Settings.
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

  return <StyledText as={tag} {...others} className={textClassName} />
}

Text.propTypes = {
  /**
    Available colors:
  */
  color: PropTypes.oneOf([
    'font1',
    'font2',
    'primary1',
    'background1',
    'error',
    'valid',
  ]),
  /**
    Specify a custom color (as a CSS color string).
  */
  cssColor: PropTypes.string,
  /**
    If `tag="a"`, show underline.
  */
  decoration: PropTypes.oneOf(['underline', 'none']),
  /**
    `font-feature-settings: 'tnum'` enables tabular (monospace) numerals.
  **/
  setting: PropTypes.oneOf(['tnum']),
  /**
    `line-height: normal` correspond approximately to 1.2.
  */
  lineHeight: PropTypes.oneOf(['normal', '1', '1.3']),
  /**
    Available sizes:
  */
  size: PropTypes.oneOf(['huge', 'big', 'default', 'tiny', 'micro', 'nano']),
  /**
    Available font styles (`normal` or `italic`):
  */
  fontStyle: PropTypes.oneOf(['normal', 'italic']),
  /**
    `text-transform: uppercase`
  */
  transform: PropTypes.oneOf(['uppercase']),
  /**
    Available font weights (`light`, `regular` or `italic`):
  */
  weight: PropTypes.oneOf(['light', 'regular', 'bold']),
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
  weight: null,
}
