import React from 'react'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'

const StyledItem = styled.svg`
  overflow: visible;

  rect {
    transition: all 0.2s ease-out;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      & .item-top,
      & .item-bottom {
        transform: translate(2px, 0);
      }
      & .item-patty {
        transform: translate(-2px, 0);
      }
    `}
`

export const BurgerIcon = ({ mainColor, isActive, ...props }) => {
  return (
    <StyledItem
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 10"
      isActive={isActive}
      {...props}
    >
      <title>Menu</title>
      <rect y="0" fill={mainColor} width="12" height="2" className="item-top" />
      <rect
        y="4"
        fill={mainColor}
        width="12"
        height="2"
        className="item-patty"
      />
      <rect
        y="8"
        fill={mainColor}
        width="12"
        height="2"
        className="item-bottom"
      />
    </StyledItem>
  )
}

BurgerIcon.defaultProps = {
  mainColor: COLORS.font1,
  isActive: false,
}
