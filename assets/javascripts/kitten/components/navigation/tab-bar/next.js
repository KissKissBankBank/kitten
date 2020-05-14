import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'

const StyledTabBar = styled.div`
  width: auto;
  flex-grow: 1;

  .k-TabBarNext__nav {
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

  .k-TabBarNext__list {
    list-style-type: none;
    display: flex;
    align-items: center;

    margin: 0;
    padding: 0;
  }

  .k-TabBarNext__listItem + .k-TabBarNext__listItem {
      margin-left: ${pxToRem(50)};
  }

  .k-TabBarNext__link {
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

const TabBarItem = ({ active, children, className, linkProps, ...props }) => (
  <li {...props} className={classNames('k-TabBarNext__listItem', className)}>
    <a
      {...linkProps}
      className={classNames('k-TabBarNext__link', linkProps.className)}
      aria-current={active ? 'page' : null}
    >
      {children}
    </a>
  </li>
)

export const TabBar = ({
  children,
  className,
  navProps,
  listProps,
  ...props
}) => (
  <StyledTabBar {...props} className={classNames('k-TabBarNext', className)}>
    <nav
      {...navProps}
      className={classNames('k-TabBarNext__nav', navProps.className)}
    >
      <ul
        {...listProps}
        className={classNames('k-TabBarNext__list', listProps.className)}
      >
        {children}
      </ul>
    </nav>
  </StyledTabBar>
)

TabBar.ListItem = TabBarItem

TabBar.defaultProps = {
  navProps: {},
  listProps: {},
}
