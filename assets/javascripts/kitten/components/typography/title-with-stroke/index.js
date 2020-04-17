import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import TYPOGRAPHY from '../../../constants/typography-config'
import { titleModifierStyles } from '../common/title-modifier-styles'
import { strokeModifierStyles } from '../../layout/horizontal-stroke/common/stroke-modifier-styles'
import classNames from 'classnames'

const StyledTitleWithStroke = styled.div`
  &.TitleWithStroke--align_left {
    text-align: left;
  }
  &.TitleWithStroke--align_center {
    text-align: center;
  }
  &.TitleWithStroke--align_right {
    text-align: right;
  }

  .TitleWithStroke__Title {
    margin-top: 0;
    margin-bottom: 0;
    ${TYPOGRAPHY.fontStyles.bold};
  }

  ${titleModifierStyles('TitleWithStroke__Title')}

  &.TitleWithStroke--italic .TitleWithStroke__Title {
    font-style: italic;
  }

  .TitleWithStroke__Stroke {
    display: inline-block;
    background-color: currentColor;
    border: none;
  }

  ${strokeModifierStyles('TitleWithStroke__Stroke')}
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
      className={classNames(
        className,
        `TitleWithStroke--align_${align}`,
        {
          'TitleWithStroke--italic': italic,
        }
      )}
      {...other}
    >
      <TitleComponent
        className={`TitleWithStroke__Title TitleWithStroke__Title--${modifier}`}
      >
        {children}
      </TitleComponent>
      <span className={`TitleWithStroke__Stroke TitleWithStroke__Stroke--${modifier}`} />
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
  align: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),
  /**
    Use `font-style: italic`.
  */
  italic: PropTypes.bool,
}
