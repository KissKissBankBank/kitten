import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'

const StyledItem = styled.svg`
  overflow: visible;

  fill: ${props => props.mainColor};

  :hover {
    fill: ${props => props.hoverColor};
  }

  rect {
    transition: transform 0.2s ease-out, fill 0.15s;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      .item-buns {
        transform: translateX(2px);
      }
      .item-patty {
        transform: translateX(-2px);
      }
    `}
`

export const BurgerIcon = ({
  mainColor,
  hoverColor,
  isActive,
  iconTitle,
  ...props
}) => (
  <StyledItem
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 10"
    width="12"
    height="10"
    isActive={isActive}
    mainColor={mainColor}
    hoverColor={hoverColor}
    {...props}
  >
    {iconTitle && <title>{iconTitle}</title>}
    <rect y="0" width="12" height="2" className="item-buns" />
    <rect y="4" width="12" height="2" className="item-patty" />
    <rect y="8" width="12" height="2" className="item-buns" />
  </StyledItem>
)

BurgerIcon.propTypes = {
  mainColor: PropTypes.string,
  hoverColor: PropTypes.string,
  isActive: PropTypes.bool,
  iconTitle: PropTypes.string,
}

BurgerIcon.defaultProps = {
  mainColor: COLORS.font1,
  hoverColor: COLORS.primary1,
  isActive: false,
  iconTitle: 'Menu',
}
