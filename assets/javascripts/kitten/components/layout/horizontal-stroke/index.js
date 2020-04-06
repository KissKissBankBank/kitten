import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

export const StyledHorizontalStroke = styled.span`
  display: block;
  border: none;
  background: ${COLORS.font1};

  ${({ modifierSize }) => {
    switch (modifierSize) {
      case 'tiny':
        return TINY
      case 'big':
        return BIG
      case 'huge':
        return HUGE
      default:
        return DEFAULT
    }
  }}

  ${({ customSize: { width } }) =>
    !!width &&
    css`
      width: ${pxToRem(width)};
    `}

  ${({ customSize: { height } }) =>
    !!height &&
    css`
      height: ${pxToRem(height)};
    `}

  ${props => props.styles}
`

export const TINY = css`
  width: ${pxToRem(20)};
  height: ${pxToRem(2)};
`

export const DEFAULT = css`
  width: ${pxToRem(30)};
  height: ${pxToRem(4)};
`

export const BIG = css`
  width: ${pxToRem(50)};
  height: ${pxToRem(4)};
`

export const HUGE = css`
  width: ${pxToRem(100)};
  height: ${pxToRem(6)};
`

export const HorizontalStroke = ({ style, size, ...props }) => (
  <StyledHorizontalStroke {...props} modifierSize={size} styles={style} />
)

HorizontalStroke.propTypes = {
  size: PropTypes.oneOf(['tiny', 'default', 'big', 'huge']),
  customSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

HorizontalStroke.defaultProps = {
  size: 'default',
  customSize: {
    width: null,
    height: null,
  },
}
