import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'

const StyledItem = styled.svg`
  overflow: visible;

  rect {
    fill: ${props => props.mainColor};
    transition: transform 0.2s ease-out, fill 0.15s;
  }

  :hover rect {
    fill: ${props => props.hoverColor};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      & .item-top,
      & .item-bottom {
        transform: translateX(2px);
      }
      & .item-patty {
        transform: translateX(-2px);
      }
    `}
`

export const BurgerIcon = ({ mainColor, hoverColor, isActive, ...props }) => {
  return (
    <StyledItem
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 10"
      isActive={isActive}
      mainColor={mainColor}
      hoverColor={hoverColor}
      {...props}
    >
      <title>Menu</title>
      <rect y="0" width="12" height="2" className="item-top" />
      <rect y="4" width="12" height="2" className="item-patty" />
      <rect y="8" width="12" height="2" className="item-bottom" />
    </StyledItem>
  )
}

BurgerIcon.defaultProps = {
  mainColor: COLORS.font1,
  hoverColor: COLORS.primary1,
  isActive: false,
}

BurgerIcon.propTypes = {
  mainColor: PropTypes.string,
  hoverColor: PropTypes.string,
  isActive: PropTypes.bool,
}
