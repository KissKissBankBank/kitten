import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import TYPOGRAPHY from '../../../constants/typography-config'
import { modifierStyles } from './helpers/modifier-styles'

const StyledTitle = styled.span`
  ${TYPOGRAPHY.fontStyles.bold};

  &.k-Title--margin {
    margin-top: 0;
    margin-bottom: 0;
  }

  &.k-Title--italic {
    font-style: italic;
  }
   /* 
  &.k-Title--cssColor {
    color: ${cssColor};
  } */}

  ${modifierStyles('&.k-Title--modifier')}
`

export const Title = ({
  modifier,
  tag,
  margin,
  italic,
  cssColor,
  ...other
}) => {
  return (
    <StyledTitle
      as={tag}
      className={classNames(
        `k-Title--${modifier}`,
        {
          'k-Title--margin': margin,
          'k-Title--italic': italic,
          'k-Title--cssColor': cssColor,
        }
      )}
      {...other}
    />
  )
}

Title.defaultProps = {
  tag: 'h1',
  modifier: 'primary',
  margin: true,
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
  margin: PropTypes.bool,
  /**
    Specify a color (use a CSS color string).
  */
  cssColor: PropTypes.string,
  /**
    Use `font-style: italic`.
  */
  italic: PropTypes.bool,
}
