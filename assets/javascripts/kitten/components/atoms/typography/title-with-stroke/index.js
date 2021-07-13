import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import TYPOGRAPHY from '../../../../constants/typography-config'
import COLORS from '../../../../constants/colors-config'
import {
  titleModifierStyles,
  titleModifiersNames,
} from '../common/title-modifier-styles'
import { strokeModifierStyles } from '../../../atoms/horizontal-stroke/common/stroke-modifier-styles'

const StyledTitleWithStroke = styled.div`
  --TitleWithStroke-css-color: ${COLORS.font1};

  color: ${COLORS.font1}; /* IE11 */
  color: var(--TitleWithStroke-css-color);

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
    color: currentColor;
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
  cssColor,
  ...other
}) => {
  const TitleComponent = tag

  return (
    <StyledTitleWithStroke
      className={classNames(
        'k-TitleWithStroke',
        className,
        `k-TitleWithStroke--${modifier}`,
        `k-TitleWithStroke--align-${align}`,
        {
          'k-TitleWithStroke--italic': italic,
        },
      )}
      style={{ '--TitleWithStroke-css-color': cssColor }}
      {...other}
    >
      <TitleComponent
        className={classNames(
          'k-TitleWithStroke__title',
          `k-TitleWithStroke__title--${modifier}`,
        )}
      >
        {children}
      </TitleComponent>
      <span
        className={classNames(
          'k-TitleWithStroke__stroke',
          `k-TitleWithStroke__stroke--${modifier}`,
        )}
      />
    </StyledTitleWithStroke>
  )
}

TitleWithStroke.defaultProps = {
  tag: 'h1',
  modifier: 'primary',
  align: 'left',
  italic: false,
  cssColor: null,
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
  modifier: PropTypes.oneOf(titleModifiersNames),
  /**
    Align title and stroke.
  */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /**
    Use `font-style: italic`.
  */
  italic: PropTypes.bool,
  /**
    Specify a color (use a CSS color string).
  */
  cssColor: PropTypes.string,
}
