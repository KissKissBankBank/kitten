import React from 'react'
import PropTypes from 'prop-types'
import COLORS from '../../constants/colors-config'
import styled, { css } from 'styled-components'
import { pxToRem, stepToRem } from '../../helpers/utils/typography'

const StyledBadge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  min-width: ${pxToRem(30)};
  min-height: ${pxToRem(30)};
  border-radius: ${pxToRem(30)};
  background-color: ${COLORS.primary1};

  ${({ valid }) =>
    valid &&
    css`
      background-color: ${COLORS.valid};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${COLORS.line2};
    `}

  ${({ big }) =>
    big &&
    css`
      min-width: ${pxToRem(40)};
      min-height: ${pxToRem(40)};
      border-radius: ${pxToRem(40)};
    `}
  ${({ huge }) =>
    huge &&
    css`
      min-width: ${pxToRem(50)};
      min-height: ${pxToRem(50)};
      border-radius: ${pxToRem(50)};
    `}

`

const StyledContent = styled.span`
  flex-basis: ${pxToRem(11)};
  fill: ${COLORS.background1};
  color: ${COLORS.background1};
  text-align: center;
  font-weight: bold;
  font-size: ${stepToRem(-2)};
  line-height: 0;

  ${({ big, huge }) =>
    (big || huge) &&
    css`
      font-size: ${stepToRem(-1)};
    `}
`

export const IconBadge = ({
  children,
  disabled,
  valid,
  big,
  huge,
  ...others
}) => (
  <StyledBadge
    disabled={disabled}
    valid={valid}
    big={big}
    huge={huge}
    {...others}
  >
    <StyledContent big={big} huge={huge}>
      {children}
    </StyledContent>
  </StyledBadge>
)

IconBadge.defaultProps = {
  disabled: false,
  valid: false,
  big: false,
  huge: false,
}

IconBadge.propTypes = {
  disabled: PropTypes.bool,
  valid: PropTypes.bool,
  big: PropTypes.bool,
  huge: PropTypes.bool,
}
