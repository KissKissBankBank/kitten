import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { modifierStyles } from './helpers/modifier-styles'

const StyledParagraph = styled.p`
  ${TYPOGRAPHY.fontStyles.light};

  &.k-Paragraph--margin {
    margin-top: 0;
    margin-bottom: 0;
  }
  
  &.k-Paragraph--normalLineHeight {
    line-height: normal;
  }

  &.k-Paragraph--italic {
    font-style: italic;
  }

  ${({ modifier }) => modifierStyles(modifier)}
`

export const Paragraph = ({
  tag,
  modifier,
  margin,
  normalLineHeight,
  italic,
  ...other
}) => {
  return (
    <StyledParagraph
      as={tag}
      modifier={modifier}
      className={classNames(
        {
          'k-Paragraph--margin': margin,
          'k-Paragraph--normalLineHeight': normalLineHeight,
          'k-Paragraph--italic': italic,
        },
      )}
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
  modifier: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
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
