import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import {
  titleModifiersNames,
  titleModifierStyles,
} from '../common/title-modifier-styles'

const StyledTitle = styled.span`
  --Title-css-color: ${COLORS.font1};
  font-family: var(--font-family-generalsans);
  letterspacing: '.01rem';
  font-weight: var(--font-weight-600);
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
  family,
  ...other
}) => {
  return (
    <StyledTitle
      as={tag}
      modifier={modifier}
      className={classNames('k-Title', className, `k-Title--${modifier}`, {
        'k-Title--noMargin': noMargin,
        'k-Title--italic': italic,
        'k-u-font-family-antiqueolive': family === 'antiqueolive',
      })}
      style={{ '--Title-css-color': cssColor }}
      {...other}
    />
  )
}

Title.defaultProps = {
  tag: 'h1',
  family: 'generalsans',
  modifier: 'primary',
  noMargin: false,
  italic: false,
  cssColor: null,
}

Title.propTypes = {
  tag: PropTypes.string,
  family: PropTypes.oneOf(['generalsans', 'antiqueolive']),
  modifier: PropTypes.oneOf(titleModifiersNames),
  noMargin: PropTypes.bool,
  cssColor: PropTypes.string,
  italic: PropTypes.bool,
}
