import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import TYPOGRAPHY from '../../../constants/typography-config'
import { modifierStyles } from './helpers/modifier-styles'

const StyledTitle = styled.span`
  ${TYPOGRAPHY.fontStyles.bold};
  ${({ modifier }) => modifierStyles(modifier)}

  ${({ margin }) =>
    !margin &&
    css`
      margin-top: 0;
      margin-bottom: 0;
    `}

  ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `}

  ${({ cssColor }) =>
    cssColor &&
    css`
      color: ${cssColor};
    `}
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
      {...other}
      modifier={modifier}
      margin={margin}
      italic={italic}
      cssColor={cssColor}
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
