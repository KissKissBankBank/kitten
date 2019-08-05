import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledShadowPanel = styled.div`
  display: inline-block;
  background: ${COLORS.background1};
  border: 2px solid ${COLORS.line1};
  border-radius: ${pxToRem(4)};
  padding: ${pxToRem(30)};
  box-shadow: 0 ${pxToRem(10)} ${pxToRem(20)} 0 rgba(0, 0, 0, 0.2);
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;

    ${({ arrowSide, arrowPositionFromOrigin }) => {
      if (arrowSide === 'top') {
        return css`
          top: ${pxToRem(-10)};
          left: ${pxToRem(arrowPositionFromOrigin)};
          border-left: ${pxToRem(9)} solid transparent;
          border-right: ${pxToRem(9)} solid transparent;
          border-bottom: ${pxToRem(8)} solid ${COLORS.line1};
        `
      }
      if (arrowSide === 'bottom') {
        return css`
          bottom: ${pxToRem(-10)};
          left: ${pxToRem(arrowPositionFromOrigin)};
          border-left: ${pxToRem(9)} solid transparent;
          border-right: ${pxToRem(9)} solid transparent;
          border-top: ${pxToRem(8)} solid ${COLORS.line1};
        `
      }
      if (arrowSide === 'left') {
        return css`
          left: ${pxToRem(-10)};
          top: ${pxToRem(arrowPositionFromOrigin)};
          border-top: ${pxToRem(9)} solid transparent;
          border-bottom: ${pxToRem(9)} solid transparent;
          border-right: ${pxToRem(8)} solid ${COLORS.line1};
        `
      }
      if (arrowSide === 'right') {
        return css`
          right: ${pxToRem(-10)};
          top: ${pxToRem(arrowPositionFromOrigin)};
          border-bottom: ${pxToRem(9)} solid transparent;
          border-top: ${pxToRem(9)} solid transparent;
          border-left: ${pxToRem(8)} solid ${COLORS.line1};
        `
      }
    }}
  }
  &::after {
    ${({ arrowSide, arrowPositionFromOrigin }) => {
      if (arrowSide === 'top') {
        return css`
          top: ${pxToRem(-8)};
          border-bottom-color: ${COLORS.background1};
        `
      }
      if (arrowSide === 'bottom') {
        return css`
          bottom: ${pxToRem(-8)};
          border-top-color: ${COLORS.background1};
        `
      }
      if (arrowSide === 'left') {
        return css`
          left: ${pxToRem(-8)};
          border-right-color: ${COLORS.background1};
        `
      }
      if (arrowSide === 'right') {
        return css`
          right: ${pxToRem(-8)};
          border-left-color: ${COLORS.background1};
        `
      }
    }}
  }
`

export const ShadowPanel = ({ ...props }) => {
  return <StyledShadowPanel {...props} />
}

ShadowPanel.propTypes = {
  arrowSide: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  arrowPositionFromOrigin: PropTypes.number,
}

ShadowPanel.defaultProps = {
  arrowSide: 'top',
  arrowPositionFromOrigin: 30,
}
