import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'

const StyledNavBar = styled.div`
  width: auto;
  flex-grow: 1;

  .k-NavBar__nav {
    width: auto;
    margin: 0;
    padding: 0 ${pxToRem(25)};
    background: ${COLORS.primary6};
    display: flex;
    justify-content: center;

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
      margin-left: ${pxToRem(50)};
  }

  .k-NavBar__link {
    height: ${pxToRem(80)};

    ${TYPOGRAPHY.fontStyles.regular}
    font-size: ${stepToRem(-1)};
    text-decoration: none;
    text-align: center;

    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    outline: none;
    border-bottom: ${pxToRem(4)} solid transparent;
    cursor: pointer;
    color: ${COLORS.font1};
    transition: color .2s, border-color .2s;

    &:hover,
    &:focus,
    &[aria-current="page"] {
      text-decoration: none;
      border-color: currentColor;
      border-width: ${pxToRem(4)};
      color: ${COLORS.primary1};
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
  ...props
}) => (
  <StyledNavBar {...props} className={classNames('k-NavBar', className)}>
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
}
