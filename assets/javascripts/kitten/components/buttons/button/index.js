import React from 'react'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import { modifierStyles } from './helpers/modifier-styles'
import { ScreenConfig } from '../../../constants/screen-config'
import classNames from 'classnames'

export const buttonModifiers = [
  'hydrogen',
  'helium',
  'lithium',
  'beryllium',
  'carbon',
  'oxygen',
  'copper',
  'boron',
  'neon',
  'iron',
  'social_facebook',
  'social_twitter',
  'social_linkedin',
  'social_instagram',
  'social_youtube',
  'social_pinterest',
]

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  box-sizing: border-box;

  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${stepToRem(-1)};
  color: ${COLORS.font1};
  line-height: 1.3;
  text-decoration: none;
  min-height: var(--Button-dimension);

  appearance: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    text-decoration: none;
  }

  > :nth-child(n) {
    margin-right: ${pxToRem(10)};
    text-align: left;
  }

  > :last-child {
    margin-right: 0;
  }

  &:focus {
    outline: ${COLORS.primary4} solid ${pxToRem(2)};
    outline-offset: ${pxToRem(2)};
  }
  &:focus:not(:focus-visible) {
    outline-color: transparent;
  }
  &:focus-visible {
    outline-color: ${COLORS.primary4};
  }

  /* SIZES */
  &.k-Button--nano {
    --Button-dimension: ${pxToRem(20)};
    --Button-min-width: ${pxToRem(100)};
    font-size: ${stepToRem(-2)};
    padding: 0 ${pxToRem(6)};
  }

  &.k-Button--micro {
    --Button-dimension: ${pxToRem(30)};
    --Button-min-width: ${pxToRem(130)};
    font-size: ${stepToRem(-2)};
    padding: ${pxToRem(5)} ${pxToRem(10)};
  }

  &.k-Button--tiny {
    --Button-dimension: ${pxToRem(40)};
    --Button-min-width: ${pxToRem(160)};
    padding: ${pxToRem(7)} ${pxToRem(20)};
  }

  &.k-Button--regular {
    --Button-dimension: ${pxToRem(50)};
    --Button-min-width: ${pxToRem(200)};
    padding: ${pxToRem(10)} ${pxToRem(30)};
  }

  &.k-Button--big {
    --Button-dimension: ${pxToRem(50)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      --Button-min-width: ${pxToRem(220)};
      --Button-dimension: ${pxToRem(70)};
      font-size: ${stepToRem(0)};
      padding: ${pxToRem(10)} ${pxToRem(40)};
    }
  }

  &.k-Button--huge {
    --Button-dimension: ${pxToRem(70)};
    padding: ${pxToRem(10)} ${pxToRem(10)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      --Button-min-width: ${pxToRem(220)};
      --Button-dimension: ${pxToRem(80)};
      font-size: ${stepToRem(0)};
      padding: ${pxToRem(10)} ${pxToRem(40)};
    }
  }

  &.k-Button--giant {
    --Button-dimension: ${pxToRem(70)};
    padding: ${pxToRem(10)} ${pxToRem(10)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      --Button-min-width: ${pxToRem(220)};
      --Button-dimension: ${pxToRem(90)};
      font-size: ${stepToRem(0)};
      padding: ${pxToRem(10)} ${pxToRem(40)};
    }
  }

  &.k-Button--min-width {
    min-width: var(--Button-min-width);
  }

  &.k-Button--icon {
    padding: 0;
    overflow: hidden;
    width: var(--Button-dimension);
    height: var(--Button-dimension);
  }

  &.k-Button--fluid {
    width: 100%;
  }

  &.k-Button--min-width {
    min-width: var(--Button-min-width);
  }

  /* BORDER RADIUS */

  &.k-Button--hasBorderRadius {
    border-radius: var(--Button-border-radius);
  }

  &.k-Button--rounded {
    border-radius: 50%;
  }

  &.k-Button--orion {
    border-radius: ${pxToRem(6)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      border-radius: ${pxToRem(8)};
    }
  }

  ${buttonModifiers.map((modifier) => css`
    &.k-Button--${modifier} {
      ${modifierStyles(modifier)}
    }
  `)}
`

// const ForwardedButtonComponent = forwardRef((props, ref) => {
//   return <button ref={ref} {...props}/>
// })

export const Button = ({
  children,
  modifier,
  variant,
  size,
  className,
  rounded,
  fluid,
  icon,
  borderRadius,
  tag,
  fit,
  mobileFit,
  ...props
}) => {
  const actualSize = (() => {
    switch (true) {
      case !!size:
        return size
      case props.nano:
        return 'nano'
      case props.micro:
        return 'micro'
      case props.tiny:
        return 'tiny'
      case props.big:
        return 'big'
      case props.huge:
        return 'huge'
      case props.giant:
        return 'giant'
      default:
        return 'regular'
    }
  })()

  return (
    <StyledButton
      className={classNames(
        'k-Button',
        className,
        `k-Button--${actualSize}`,
        `k-Button--${modifier}`,
        `k-Button--${variant}`,
        `k-Button--${fit}`,
        `k-Button--mobile-${mobileFit || 'none'}`,
        {
          'k-Button--fluid': fluid,
          'k-Button--icon': icon && !fluid,
          'k-Button--rounded': rounded,
          'k-Button--hasBorderRadius': borderRadius > 0,
        },
      )}
      style={{ '--Button-border-radius': pxToRem(borderRadius) }}
      type="button"
      as={tag}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  tag: PropTypes.string,
  borderRadius: PropTypes.number,
  nano: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  micro: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  tiny: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  big: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  huge: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  giant: deprecated(PropTypes.bool, 'Use `size` prop instead.'),
  fluid: PropTypes.bool,
  icon: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf([
    'nano',
    'micro',
    'tiny',
    'big',
    'huge',
    'giant',
    'regular',
  ]),
  fit: PropTypes.oneOf([
    'icon',
    'min-width',
    'content',
    'fluid',
  ]),
  mobileFit: PropTypes.oneOf([
    null,
    'icon',
    'min-width',
    'content',
    'fluid',
  ]),
  modifier: PropTypes.oneOf(buttonModifiers),
  variant: PropTypes.oneOf(['andromeda', 'orion']),
}
Button.defaultProps = {
  tag: 'button',
  fluid: false,
  icon: false,
  rounded: false,
  borderRadius: 0,
  size: 'regular',
  modifier: 'hydrogen',
  variant: 'andromeda',
  fit: 'min-width',
  mobileFit: null,
}
