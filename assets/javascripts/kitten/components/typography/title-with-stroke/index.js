import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TYPOGRAPHY from '../../../constants/typography-config'
import { titleModifierStyles } from '../common/title-modifier-styles'
import { strokeModifierStyles } from '../../layout/horizontal-stroke/common/stroke-modifier-styles'
import classNames from 'classnames'

const StyledTitleWithStroke = styled.div`
  &.k-TitleWithStroke--align-left {
    text-align: left;
  }
  &.k-TitleWithStroke--align-center {
    text-align: center;
  }
  &.k-TitleWithStroke--align-right {
    text-align: right;
  }

  .k-TitleWithStroke__title {
    margin-top: 0;
    margin-bottom: 0;
    ${TYPOGRAPHY.fontStyles.bold};
  }

  ${titleModifierStyles('.k-TitleWithStroke__title')}

  &.k-TitleWithStroke--italic .k-TitleWithStroke__title {
    font-style: italic;
  }

  .k-TitleWithStroke__stroke {
    display: inline-block;
    background-color: currentColor;
    border: none;
  }

  ${strokeModifierStyles('.k-TitleWithStroke__stroke')}
`

export const TitleWithStroke = ({
  modifier,
  tag,
  align,
  italic,
  className,
  children,
  ...other
}) => {
  const TitleComponent = tag

  return (
    <StyledTitleWithStroke
      className={classNames(className, `k-TitleWithStroke--align-${align}`, {
        'k-TitleWithStroke--italic': italic,
      })}
      {...other}
    >
      <TitleComponent
        className={`k-TitleWithStroke__title k-TitleWithStroke__title--${modifier}`}
      >
        {children}
      </TitleComponent>
      <span
        className={`k-TitleWithStroke__stroke k-TitleWithStroke__stroke--${modifier}`}
      />
    </StyledTitleWithStroke>
  )
}

TitleWithStroke.defaultProps = {
  tag: 'h1',
  modifier: 'primary',
  align: 'left',
  italic: false,
}

TitleWithStroke.propTypes = {
  /**
    Specify Title element tag.
  */
  tag: PropTypes.string,
  /**
    TitleWithStroke has seven modifiers,
    with different sizes depending on the device (desktop, tablet and mobile).
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
    Align title and stroke.
  */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /**
    Use `font-style: italic`.
  */
  italic: PropTypes.bool,
}
