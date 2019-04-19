import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import { modifierStyles } from './helpers/modifier-styles'

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  ${() => DEFAULT}

  ${TYPOGRAPHY.fontStyles.regular};
  font-size: ${pxToRem(14)};
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
  ${({ fluid }) => fluid && FLUID}

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

export const FLUID = css`
  min-width: initial;
  width: 100%;
`

export const DEFAULT = css`
  min-width: ${pxToRem(200)};
  min-height: ${pxToRem(50)};
  padding: 0 ${pxToRem(30)};
  font-size: ${pxToRem(14)};
`

export const TINY = css`
  min-width: ${pxToRem(160)};
  min-height: ${pxToRem(40)};
  padding: 0 ${pxToRem(20)};
  font-size: ${pxToRem(14)};
`

export const BIG = css`
  min-width: ${pxToRem(220)};
  min-height: ${pxToRem(70)};
  padding: 0 ${pxToRem(40)};
  font-size: ${pxToRem(16)};
`

export class Button extends Component {
  static propTypes = {
    borderRadius: PropTypes.number,
    tiny: PropTypes.bool,
    big: PropTypes.bool,
    fluid: PropTypes.bool,
    icon: PropTypes.bool,
    modifier: PropTypes.oneOf([
      'hydrogen',
      'helium',
      'lithium',
      'beryllium',
      'carbon',
      'oxygen',
    ]),
  }

  static defaultProps = {
    tiny: false,
    big: false,
    fluid: false,
    icon: false,
    modifier: 'hydrogen',
    borderRadius: 0,
  }

  render() {
    return <StyledButton {...this.props} />
  }
}
