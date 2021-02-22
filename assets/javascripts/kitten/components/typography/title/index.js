import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { modifierStyles } from './helpers/modifier-styles'

const StyledTitle = styled.span`
  --Title-css-color: ${COLORS.font1};

  ${TYPOGRAPHY.fontStyles.bold};

  color: ${COLORS.font1}; /* IE11 */
  color: var(--Title-css-color);

  &.k-Title--hasMargin {
    margin-top: 0;
    margin-bottom: 0;
  }

  &.k-Title--italic {
    font-style: italic;
  }

  ${({ modifier }) => modifierStyles(modifier)}
`

export const Title = ({
  modifier,
  tag,
  hasMargin,
  italic,
  cssColor,
  ...other
}) => {
  return (
    <StyledTitle
      as={tag}
      modifier={modifier}
      className={classNames(
        {
          'k-Title--hasMargin': hasMargin,
          'k-Title--italic': italic,
        }
      )}
      style={{ '--Title-css-color': cssColor }}
      {...other}
    />
  )
}

Title.defaultProps = {
  tag: 'h1',
  modifier: 'primary',
  hasMargin: true,
  italic: false,
  cssColor: null,
}

Title.propTypes = {
  tag: PropTypes.string,
  /**
    Title have seven modifiers. With different size depending on the device (desktop, tablet and mobile)
  */
  modifier: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'quinary',
    'senary',
    'septenary',
  ]),
  /**
    Remove default margins of `title` attribut.
  */
  hasMargin: PropTypes.bool,
  /**
    Specify a color (use a CSS color string).
  */
  cssColor: PropTypes.string,
  /**
    Use `font-style: italic`.
  */
  italic: PropTypes.bool,
}
