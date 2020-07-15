import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import TYPOGRAPHY from '../../../constants/typography-config'
import { modifierStyles } from './helpers/modifier-styles'

const StyledParagraph = styled.p`
  ${TYPOGRAPHY.fontStyles.light};
  ${({ modifier }) => modifierStyles(modifier)}
  line-height: 1.6;

  ${({ margin }) =>
  !margin &&
  css`
    margin-top: 0;
    margin-bottom: 0;
  `}

  ${({ normalLineHeight }) =>
  normalLineHeight &&
  css`
    line-height: normal;
  `} 

  ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `}
`

export const Paragraph = ({ tag, modifier, margin, normalLineHeight, italic, ...other }) => {
  return(
    <StyledParagraph
      as={tag}
      modifier={modifier}
      normalLineHeight={normalLineHeight}
      italic={italic}
      margin={margin}
      {...other} 
    />
  ) 
}

Paragraph.defaultProps = {
  tag: 'p',
  modifier: 'primary',
  margin: true,
  normalLineHeight: false,
  italic: false,
}

Paragraph.propTypes = {
  tag: PropTypes.string,
  /**
    Title have seven modifiers. With different size depending on the device (`desktop`, `tablet` and `mobile`).
  */
  modifier: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
  ]),
  /**
    Remove default margins of `title` attribut.
  */
  margin: PropTypes.bool,
  /**
    Line-height normal (1.2).
  */
  normalLineHeight: PropTypes.bool,
  /**
    Use `font-style: italic`.
  */
  italic: PropTypes.bool,
}
