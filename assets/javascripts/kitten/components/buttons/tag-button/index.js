import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import COLORS from '../../../constants/colors-config'

const StyledTagButton = styled(
  ({ selected, icon, tiny, big, modifier, ...others }) => (
    <button {...others} />
  ),
)`

  min-height: ${pxToRem(40)};
  min-width: ${pxToRem(60)};
  padding: 0 ${pxToRem(20)};
  font-size: ${stepToRem(-2)};
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    height: ${pxToRem(40)};
    width: ${pxToRem(60)};
  }

  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: ${pxToRem(4)};
  border-width: ${pxToRem(2)};
  border-style: solid;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  box-sizing: border-box;

  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${stepToRem(-2)};
  color: ${COLORS.font1};
  line-height: 1.3;
  text-decoration: none;
  appareance: none;
  outline: none;
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
  }

  > :nth-child(n) {
    margin-right: ${pxToRem(10)};
    text-align: left;
  }

  ${({ icon }) =>
    icon &&
    css`
      ${hydrogen}
    `}

  ${({ tiny }) =>
    tiny &&
    css`
      min-height: ${pxToRem(30)};
      min-width: ${pxToRem(60)};
      padding: 0 ${pxToRem(20)};
      font-size: ${stepToRem(-2)};
      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        height: ${pxToRem(40)};
        width: ${pxToRem(60)};
      }
    `}

  ${({ big }) =>
    big &&
    css`
      min-height: ${pxToRem(50)};
      min-width: ${pxToRem(80)};
      padding: 0 ${pxToRem(30)};
      font-size: ${stepToRem(-1)};
      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        height: ${pxToRem(50)};
        width: ${pxToRem(80)};
      }
    `}

  ${({ modifier }) =>
    (modifier === 'helium' || 'hydrogen') &&
    css`
      ${hydrogen}
    `}

  ${({ modifier }) =>
    modifier === 'carbon' &&
    css`
      color: ${COLORS.font1};
      border-color: ${COLORS.background1};
      background-color: ${COLORS.background1};

      &:hover,
      &:focus {
        color: ${COLORS.primary1};
        border-color: ${COLORS.background1};
        background-color: ${COLORS.background1};
      }

      &:active {
        color: ${COLORS.primary1};
        border-color: ${COLORS.background1};
        background-color: ${COLORS.background1};
      }
    `}

  ${({ selected }) =>
    selected &&
    css`
      color: ${COLORS.background1};
      border-color: ${COLORS.primary1};
      background-color: ${COLORS.primary1};
    `}
`

const hydrogen = css`
  color: ${COLORS.font1};
  border-color: ${COLORS.line1};
  background-color: ${COLORS.background1};

  &:hover,
  &:focus {
    color: ${COLORS.background1};
    border-color: ${COLORS.primary2};
    background-color: ${COLORS.primary2};
  }

  &:active {
    color: ${COLORS.primary2};
    border-color: ${COLORS.primary2};
    background-color: ${COLORS.background1};
  }
`

export class TagButton extends PureComponent {
  static propTypes = {
    modifier: PropTypes.string,
    tiny: PropTypes.bool,
    big: PropTypes.bool,
    icon: PropTypes.bool,
    selected: PropTypes.bool,
  }

  static defaultProps = {
    children: 'Tag',
    modifier: 'hydrogen',
    icon: false,
    tiny: false,
    big: false,
    selected: false,
  }
  render() {
    const {
      children,
      modifier,
      selected,
      tiny,
      big,
      icon,
      ...others
    } = this.props

    return (
      <StyledTagButton
        modifier={modifier}
        selected={selected}
        tiny={tiny}
        big={big}
        icon={icon}
        {...others}
      >
        {children}
      </StyledTagButton>
    )
  }
}
