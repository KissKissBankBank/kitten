import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import {
  titleModifierStyles,
  titleModifiersNames,
} from '../common/title-modifier-styles'

const StyledTitle = styled.span`
  --Title-css-color: ${COLORS.font1};

  ${TYPOGRAPHY.fontStyles.bold};

  color: ${COLORS.font1}; /* IE11 */
  color: var(--Title-css-color);

  &.k-Title--noMargin {
    margin-top: 0;
    margin-bottom: 0;
  }

  &.k-Title--italic {
    font-style: italic;
  }

  ${titleModifierStyles('&.k-Title')}
`

export const Title = ({
  modifier,
  tag,
  noMargin,
  italic,
  cssColor,
  className,
  ...other
}) => {
  return (
    <StyledTitle
      as={tag}
      modifier={modifier}
      className={classNames('k-Title', className, `k-Title--${modifier}`, {
        'k-Title--noMargin': noMargin,
        'k-Title--italic': italic,
      })}
      style={{ '--Title-css-color': cssColor }}
      {...other}
    />
  )
}

Title.defaultProps = {
  tag: 'h1',
  modifier: 'primary',
  noMargin: false,
  italic: false,
  cssColor: null,
}

Title.propTypes = {
  tag: PropTypes.string,
  /**
    Title have seven modifiers. With different size depending on the device (desktop, tablet and mobile)
  */
  modifier: PropTypes.oneOf(titleModifiersNames),
  /**
    Remove default margins of `title` attribut.
  */
  noMargin: PropTypes.bool,
  /**
    Specify a color (use a CSS color string).
  */
  cssColor: PropTypes.string,
  /**
    Use `font-style: italic`.
  */
  italic: PropTypes.bool,
}
