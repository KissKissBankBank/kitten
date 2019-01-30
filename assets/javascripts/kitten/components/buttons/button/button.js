import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from './../../../constants/typography-config'

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  min-width: ${pxToRem(200)};
  min-height: ${pxToRem(50)};
  padding: 0 ${pxToRem(30)};

  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${pxToRem(14)};
  color: ${COLORS.font1};
  line-height: 1.3;
  text-decoration: none;

  cursor: pointer;
  appareance: none;

  > :nth-child(n) {
    margin-right: ${pxToRem(10)};
  }

  > :last-child {
    margin-right: 0;
  }

  ${({ tiny }) =>
    tiny &&
    css`
      min-width: ${pxToRem(160)};
      min-height: ${pxToRem(40)};
      padding: 0 ${pxToRem(20)};
    `}

  ${({ big }) =>
    big &&
    css`
      min-width: ${pxToRem(220)};
      min-height: ${pxToRem(70)};
      padding: 0 ${pxToRem(40)};

      font-size: ${pxToRem(16)};
    `}

  ${({ fluid }) =>
    fluid &&
    css`
      min-width: initial;
      width: 100%;
    `}

  ${({ icon }) =>
    icon &&
    css`
      min-width: initial;
      min-height: initial;
      width: ${pxToRem(50)};
      height: ${pxToRem(50)};
      padding: 0;

      ${({ tiny }) =>
        tiny &&
        css`
          width: ${pxToRem(40)};
          height: ${pxToRem(40)};
        `}

      ${({ big }) =>
        big &&
        css`
          width: ${pxToRem(70)};
          height: ${pxToRem(70)};
        `}
    `}

  ${({ modifier }) => modifierStyles(modifier)}
`

const modifierStyles = modifier => {
  let borderColor
  let backgroundColor
  let color
  let selectorsBorderColor
  let selectorsBackgroundColor
  let selectorsColor

  if (modifier === 'hydrogen') {
    borderColor = COLORS.line1
    backgroundColor = COLORS.background1
    color = COLORS.font1
    selectorsBorderColor = COLORS.primary1
    selectorsBackgroundColor = COLORS.primary1
    selectorsColor = COLORS.background1
  }

  return css`
    border: ${pxToRem(2)} solid ${borderColor};
    background-color: ${backgroundColor};
    color: ${color};

    transition: background-color 0.2s, color 0.2s, border-color 0.2s;

    :hover,
    :focus,
    :active {
      border-color: ${selectorsBorderColor};
      background-color: ${selectorsBackgroundColor};
      color: ${selectorsColor};

      svg {
        fill: ${selectorsColor};
      }
    }

    :disabled {
      background-color: ${COLORS.line2};
    }
  `
}

export class Button extends Component {
  static propTypes = {
    tiny: PropTypes.bool,
    big: PropTypes.bool,
    fluid: PropTypes.bool,
    modifier: PropTypes.oneOf(['hydrogen']),
  }

  static defaultProps = {
    tiny: false,
    big: false,
    fluid: false,
    modifier: 'hydrogen',
  }

  render() {
    return <StyledButton {...this.props} />
  }
}
