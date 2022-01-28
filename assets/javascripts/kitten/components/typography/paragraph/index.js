import React from 'react'
import styled, { css } from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import TYPOGRAPHY from '../../../constants/typography-config'
import { modifierStyles } from './helpers/modifier-styles'

const modifierList = ['primary', 'secondary', 'tertiary', 'quaternary']

const StyledParagraph = styled.p`
  ${TYPOGRAPHY.fontStyles.light};

  &.k-Paragraph--noMargin {
    margin-top: 0;
    margin-bottom: 0;
  }

  &.k-Paragraph--normalLineHeight {
    line-height: normal;
  }

  &.k-Paragraph--italic {
    font-style: italic;
  }

  ${() =>
    modifierList.map(
      modifier => css`
        &.k-Paragraph--${modifier} {
          ${() => modifierStyles(modifier)}
        }
      `,
    )}
`

export const Paragraph = ({
  tag,
  modifier,
  noMargin,
  normalLineHeight,
  italic,
  className,
  ...other
}) => {
  return (
    <StyledParagraph
      as={tag}
      modifier={modifier}
      className={classNames(
        'k-Paragraph',
        className,
        `k-Paragraph--${modifier}`,
        {
          'k-Paragraph--noMargin': noMargin,
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
  noMargin: false,
  normalLineHeight: false,
  italic: false,
}

Paragraph.propTypes = {
  tag: PropTypes.string,
  modifier: PropTypes.oneOf(modifierList),
  noMargin: PropTypes.bool,
  normalLineHeight: PropTypes.bool,
  italic: PropTypes.bool,
}
