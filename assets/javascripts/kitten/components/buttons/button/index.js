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

  /* BORDER RADIUS */

  &.k-Button--hasBorderRadius {
    border-radius: var(--border-radius);
  }

  /* SIZES */

  ${() => DEFAULT}

  &.k-Button--nano {
    ${() => NANO}
  }
  &.k-Button--micro {
    ${() => MICRO}
  }
  &.k-Button--tiny {
    ${() => TINY}
  }
  &.k-Button--big {
    ${() => BIG}
  }
  &.k-Button--huge {
    ${() => HUGE}
  }
  &.k-Button--giant {
    ${() => GIANT}
  }

  &.k-Button--hasIcon:not(.k-Button--fluid) {
    ${() => ICON}

    &.k-Button--nano {
      ${() => ICON_NANO}
    }
    &.k-Button--micro {
      ${() => ICON_MICRO}
    }
    &.k-Button--tiny {
      ${() => ICON_TINY}
    }
    &.k-Button--big {
      ${() => ICON_BIG}
    }
    &.k-Button--huge {
      ${() => ICON_HUGE}
    }
    &.k-Button--giant {
      ${() => ICON_GIANT}
    }
  }

  &.k-Button--fluid {
    ${() => FLUID}
  }

  &.k-Button--rounded {
    ${() => ROUNDED}
  }

  &.k-Button--orion {
    ${() => BIG}

    border-radius: ${pxToRem(6)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      border-radius: ${pxToRem(8)};
    }
  }

  ${({ modifier }) => modifierStyles(modifier)}
`

export const FLUID = css`
  min-width: initial;
  width: 100%;
`

export const ROUNDED = css`
  border-radius: 50%;
`

export const DEFAULT = css`
  min-width: ${pxToRem(200)};
  min-height: ${pxToRem(50)};
  padding: 0 ${pxToRem(30)};
  font-size: ${stepToRem(-1)};
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    width: ${pxToRem(200)};
    height: ${pxToRem(50)};
  }
`

export const NANO = css`
  min-width: ${pxToRem(100)};
  min-height: ${pxToRem(20)};
  padding: 0 ${pxToRem(6)};
  font-size: ${stepToRem(-2)};
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    width: ${pxToRem(100)};
    height: ${pxToRem(20)};
  }
`

export const MICRO = css`
  min-width: ${pxToRem(130)};
  min-height: ${pxToRem(30)};
  padding: 0 ${pxToRem(10)};
  font-size: ${stepToRem(-2)};
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    width: ${pxToRem(100)};
    height: ${pxToRem(20)};
  }
`

export const TINY = css`
  min-width: ${pxToRem(160)};
  min-height: ${pxToRem(40)};
  padding: 0 ${pxToRem(20)};
  font-size: ${stepToRem(-1)};
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    width: ${pxToRem(160)};
    height: ${pxToRem(40)};
  }
`

export const BIG = css`
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    min-width: ${pxToRem(220)};
    min-height: ${pxToRem(70)};
    padding: 0 ${pxToRem(40)};
    font-size: ${stepToRem(0)};
  }
  @media screen and (min-width: ${pxToRem(
      ScreenConfig.S.min,
    )}) and (-ms-high-contrast: active),
    (-ms-high-contrast: none) {
    width: ${pxToRem(220)};
    height: ${pxToRem(70)};
  }
`

export const HUGE = css`
  min-height: ${pxToRem(70)};
  font-size: ${stepToRem(-1)};
  padding: 0 ${pxToRem(10)};

  @media (min-width: ${ScreenConfig.M.min}px) {
    min-width: ${pxToRem(220)};
    min-height: ${pxToRem(80)};
    font-size: ${stepToRem(0)};
    padding: 0 ${pxToRem(40)};
  }
  @media screen and (min-width: ${pxToRem(
      ScreenConfig.M.min,
    )}) and (-ms-high-contrast: active),
    (-ms-high-contrast: none) {
    width: ${pxToRem(220)};
    height: ${pxToRem(80)};
  }
`

export const GIANT = css`
  min-height: ${pxToRem(70)};
  font-size: ${stepToRem(-1)};
  padding: 0 ${pxToRem(10)};

  @media (min-width: ${ScreenConfig.M.min}px) {
    min-width: ${pxToRem(220)};
    min-height: ${pxToRem(90)};
    font-size: ${stepToRem(0)};
    padding: 0 ${pxToRem(40)};
  }
  @media screen and (min-width: ${pxToRem(
      ScreenConfig.M.min,
    )}) and (-ms-high-contrast: active),
    (-ms-high-contrast: none) {
    width: ${pxToRem(220)};
    height: ${pxToRem(90)};
  }
`

export const ICON = css`
  min-width: initial;
  min-height: initial;
  width: ${pxToRem(50)};
  height: ${pxToRem(50)};
  padding: 0;
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    width: ${pxToRem(50)};
    min-width: 0;
    min-height: 0;
  }
`

export const ICON_NANO = css`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    width: ${pxToRem(20)};
  }
`

export const ICON_MICRO = css`
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    width: ${pxToRem(30)};
  }
`

export const ICON_TINY = css`
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    width: ${pxToRem(40)};
  }
`

export const ICON_BIG = css`
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    min-width: 0;
    min-height: 0;
    padding: 0;
    width: ${pxToRem(70)};
    height: ${pxToRem(70)};
  }
  @media screen and (min-width: ${pxToRem(
      ScreenConfig.S.min,
    )}) and (-ms-high-contrast: active),
    (-ms-high-contrast: none) {
    width: ${pxToRem(70)};
  }
`

export const ICON_HUGE = css`
  min-width: initial;
  width: ${pxToRem(70)};
  height: ${pxToRem(70)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    min-width: initial;
    width: ${pxToRem(80)};
    height: ${pxToRem(80)};
  }
  @media screen and (min-width: ${pxToRem(
      ScreenConfig.M.min,
    )}) and (-ms-high-contrast: active),
    (-ms-high-contrast: none) {
    width: ${pxToRem(80)};
  }
`

export const ICON_GIANT = css`
  min-width: initial;
  width: ${pxToRem(70)};
  height: ${pxToRem(70)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    min-width: initial;
    width: ${pxToRem(90)};
    height: ${pxToRem(90)};
  }
  @media screen and (min-width: ${pxToRem(
      ScreenConfig.M.min,
    )}) and (-ms-high-contrast: active),
    (-ms-high-contrast: none) {
    width: ${pxToRem(90)};
  }
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
        return 'normal'
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
        {
          'k-Button--fluid': fluid,
          'k-Button--hasIcon': icon,
          'k-Button--rounded': rounded,
          'k-Button--hasBorderRadius': borderRadius > 0,
        },
      )}
      style={{ '--border-radius': pxToRem(borderRadius) }}
      modifier={modifier}
      type="button"
      as={tag}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  tag: PropType.string,
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
    'normal',
  ]),
  modifier: PropTypes.oneOf([
    'hydrogen',
    'helium',
    'lithium',
    'beryllium',
    'carbon',
    'oxygen',
    'copper',
    'social_facebook',
    'social_twitter',
    'social_linkedin',
    'social_instagram',
    'social_youtube',
    'social_pinterest',
  ]),
  variant: PropTypes.oneOf(['andromeda', 'orion']),
}
Button.defaultProps = {
  tag: 'button',
  fluid: false,
  icon: false,
  rounded: false,
  borderRadius: 0,
  size: 'normal',
  modifier: 'hydrogen',
  variant: 'andromeda',
}
