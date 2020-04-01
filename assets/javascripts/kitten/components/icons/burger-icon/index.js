import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import deprecated from 'prop-types-extra/lib/deprecated'

const StyledItem = styled.svg`
  overflow: visible;

  fill: ${({ mainColor }) => mainColor};

  :hover,
  button:hover & {
    fill: ${({ hoverColor }) => hoverColor};
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

  ${({ isAnimatedOnHover }) =>
    isAnimatedOnHover &&
    css`
      &:hover,
      button:hover &,
      &:focus,
      button:focus & {
        .item-buns {
          transform: translateX(2px);
        }
        .item-patty {
          transform: translateX(-2px);
        }
      }
    `}
`

export const BurgerIcon = ({
  mainColor,
  hoverColor,
  isActive,
  iconTitle,
  title,
  width,
  height,
  isAnimatedOnHover,
  ...props
}) => (
  <StyledItem
    role="img"
    aria-label={iconTitle || title}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 10"
    width={width}
    height={height}
    isActive={isActive}
    mainColor={mainColor}
    hoverColor={hoverColor}
    isAnimatedOnHover={isAnimatedOnHover}
    {...props}
  >
    {(iconTitle || title) && <title>{iconTitle || title}</title>}
    <rect y="0" width="12" height="2" className="item-buns" />
    <rect y="4" width="12" height="2" className="item-patty" />
    <rect y="8" width="12" height="2" className="item-buns" />
  </StyledItem>
)

BurgerIcon.propTypes = {
  mainColor: PropTypes.string,
  hoverColor: PropTypes.string,
  isActive: PropTypes.bool,
  iconTitle: deprecated(PropTypes.string, 'Prefere use `title` prop instead'),
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

BurgerIcon.defaultProps = {
  mainColor: COLORS.font1,
  hoverColor: COLORS.primary1,
  isActive: false,
  title: null,
  width: 12,
  height: 10,
  isAnimatedOnHover: false,
}
