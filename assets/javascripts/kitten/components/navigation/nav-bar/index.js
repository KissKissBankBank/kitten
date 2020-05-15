import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import {
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../constants/grid-config'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledNavBar = styled.div`
  width: auto;
  flex-grow: 1;

  .k-NavBar__nav {
    width: auto;
    margin: 0;
    padding: 0 ${pxToRem(CONTAINER_PADDING_THIN)};
    background: ${({ colors }) => colors.background || COLORS.primary6};
    display: flex;
    justify-content: center;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}){
      padding: 0 ${pxToRem(CONTAINER_PADDING)};
    }

    &::before, &::after {
      content: "";
      flex-grow: 1;
    }
  }

  .k-NavBar__list {
    list-style-type: none;
    display: flex;
    align-items: center;

    margin: 0;
    padding: 0;
  }

  .k-NavBar__listItem + .k-NavBar__listItem {
    margin-left: ${pxToRem(25)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}){
      margin-left: ${pxToRem(50)};
    }
  }

  .k-NavBar__link {
    height: ${pxToRem(65)};
    box-sizing: border-box;
    ${TYPOGRAPHY.fontStyles.regular}
    font-size: ${stepToRem(-1)};
    text-decoration: none;
    text-align: center;


    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    outline: none;
    color: ${({ colors }) => colors.link || COLORS.font1};
    border-bottom: ${pxToRem(4)} solid ${({ colors }) =>
  colors.border || 'transparent'};
    transition: color .2s, border-color .2s;
    cursor: pointer;

    &:hover {
      color: ${({ colors }) => colors.activeLink || COLORS.primary1};
      text-decoration: none;
    }

    &:focus,
    &[aria-current="page"] {
      border-color: ${({ colors }) => colors.activeBorder || COLORS.primary1};
      color: ${({ colors }) => colors.activeLink || COLORS.primary1};
      border-width: ${pxToRem(4)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}){
      height: ${pxToRem(80)};
    }
  }

  &.k-NavBar--big .k-NavBar__link {
    height: ${pxToRem(80)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}){
      height: ${pxToRem(100)};
    }
  }
`

const NavBarItem = ({ active, children, className, linkProps, ...props }) => (
  <li {...props} className={classNames('k-NavBar__listItem', className)}>
    <a
      aria-current={active ? 'page' : null}
      {...linkProps}
      className={classNames('k-NavBar__link', linkProps.className)}
    >
      {children}
    </a>
  </li>
)

export const NavBar = ({
  children,
  className,
  navProps,
  listProps,
  colors,
  modifier,
  ...props
}) => (
  <StyledNavBar
    {...props}
    className={classNames('k-NavBar', `k-NavBar--${modifier}`, className)}
    colors={colors}
  >
    <nav
      {...navProps}
      className={classNames('k-NavBar__nav', navProps.className)}
    >
      <ul
        {...listProps}
        className={classNames('k-NavBar__list', listProps.className)}
      >
        {children}
      </ul>
    </nav>
  </StyledNavBar>
)

NavBar.ListItem = NavBarItem

NavBar.defaultProps = {
  navProps: {},
  listProps: {},
  colors: {
    background: COLORS.primary6,
    link: COLORS.font1,
    border: 'transparent',
    activeLink: COLORS.primary1,
    activeBorder: COLORS.primary1,
  },
  modifier: 'regular',
}

NavBar.propTypes = {
  colors: PropTypes.shape({
    background: PropTypes.string,
    link: PropTypes.string,
    border: PropTypes.string,
    activeLink: PropTypes.string,
    activeBorder: PropTypes.string,
  }),
  modifier: PropTypes.oneOf(['regular', 'big']),
}
