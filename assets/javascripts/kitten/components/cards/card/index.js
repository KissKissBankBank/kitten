import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'

export const Card = styled.div`
  display: block;
  overflow: auto;

  a& {
    transition: border-color .4s;

    &:hover, &:active {
      border-color: ${COLORS.line2};
    }
  }

  ${({ light }) =>
    light &&
    css`
      background: ${COLORS.background1};
      color: ${COLORS.font1};
    `}

  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 0 ${pxToRem(5)} ${pxToRem(15)} ${COLORS.line1};

      a& {
        transition: border-color 0.4s, box-shadow 0.4s;

        &:hover,
        &:active {
          box-shadow: 0 ${pxToRem(5)} ${pxToRem(15)} ${COLORS.line2};
        }
      }
    `}

  ${({ radius }) => {
    if (!radius) return null

    return css`
      border-radius: ${pxToRem(radius)};
    `
  }}

  ${({ border }) => {
    switch (border) {
      case 'normal':
        return css`
          box-sizing: border-box;
          border: ${pxToRem(2)} solid ${COLORS.line1};
        `
      case 'dark':
        return css`
          box-sizing: border-box;
          border: ${pxToRem(2)} solid ${COLORS.line2};
        `
      case 'none':
      default:
        return null
    }
  }}
`

Card.propTypes = {
  border: PropTypes.oneOf(['none', 'normal', 'dark']),
  radius: PropTypes.number,
  shadow: PropTypes.bool,
  light: PropTypes.bool,
}
Card.defaultProps = {
  border: 'none',
  radius: 0,
  shadow: false,
  light: false,
}
