import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import { modifierStyles } from './helpers/modifier-styles'
import { CheckedCircleIcon as KittenCheckedCircleIcon } from '../../icons/checked-circle-icon'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  box-sizing: border-box;
  ${() => DEFAULT}

  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${stepToRem(-1)};
  color: ${COLORS.font1};
  line-height: 1.3;
  text-decoration: none;

  appareance: none;
  outline: none;

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

  ${({ modifier }) =>
    modifier === 'checked' &&
    css`
      > :nth-last-child(2) {
        margin-right: 0;
      }
    `}

  > :last-child {
    margin-right: 0;
  }

  ${({ borderRadius }) =>
    borderRadius > 0 &&
    css`
      border-radius: ${pxToRem(borderRadius)};
    `}

  ${({ tiny }) => tiny && TINY}
  ${({ big }) => big && BIG}
  ${({ huge }) => huge && HUGE}
  ${({ icon }) => icon && ICON}
  ${({ icon, tiny }) => icon && tiny && ICON_TINY}
  ${({ icon, big }) => icon && big && ICON_BIG}
  ${({ icon, huge }) => icon && huge && ICON_HUGE}
  ${({ fluid }) => fluid && FLUID}

  ${({ modifier }) => modifierStyles(modifier)}
`

const checkedCircleIconStyle = size => {
  let iconSize

  switch (size) {
    case 'huge':
      iconSize = 33
      break
    case 'big':
      iconSize = 24
      break
    case 'tiny':
      iconSize = 15
      break
    default:
      iconSize = 20
  }

  return css`
    width: ${pxToRem(iconSize)};
    height: ${pxToRem(iconSize)};
    bottom: -${pxToRem(iconSize / 2)};
  `
}

const CheckedCircleIcon = styled(({ big, tiny, ...others }) => (
  <KittenCheckedCircleIcon {...others} />
))`
  ${checkedCircleIconStyle()}
  ${({ tiny }) => tiny && checkedCircleIconStyle('tiny')}

  ${({ big }) =>
    big &&
    css`
      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        ${checkedCircleIconStyle('big')}
      }
    `}

  position: absolute;
`

export const FLUID = css`
  min-width: initial !important;
  width: 100% !important;
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

export const ICON_TINY = css`
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    width: ${pxToRem(40)};
  }
`

export const ICON_BIG = css`
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
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

export class Button extends Component {
  static propTypes = {
    borderRadius: PropTypes.number,
    tiny: PropTypes.bool,
    big: PropTypes.bool,
    huge: PropTypes.bool,
    fluid: PropTypes.bool,
    icon: PropTypes.bool,
    modifier: PropTypes.oneOf([
      'hydrogen',
      'helium',
      'lithium',
      'beryllium',
      'carbon',
      'oxygen',
      'copper',
      'checked',
    ]),
  }

  static defaultProps = {
    tiny: false,
    big: false,
    huge: false,
    fluid: false,
    icon: false,
    modifier: 'hydrogen',
    borderRadius: 0,
  }

  render() {
    const { children, modifier, ...props } = this.props
    const checked = modifier === 'checked' && { 'aria-checked': true }

    modifier === 'checked' &&
      console.warn(
        `Warning: In <Button /> component, 'checked' modifier is deprecated.`,
      )

    return (
      <StyledButton modifier={modifier} {...checked} {...props}>
        {children}
        {modifier === 'checked' && (
          <CheckedCircleIcon
            big={props.big && props.big}
            tiny={props.tiny && props.tiny}
            circleColor={COLORS.primary1}
            checkedColor={COLORS.background1}
          />
        )}
      </StyledButton>
    )
  }
}
