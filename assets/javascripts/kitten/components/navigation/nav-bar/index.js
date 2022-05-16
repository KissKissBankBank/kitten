import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { checkDeprecatedSizes } from '../../../helpers/utils/deprecated'
import {
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../constants/grid-config'
import { mq } from '../../../constants/screen-config'
import { HEADER_HEIGHT } from '../../navigation/header-nav/config'

const StyledNavBar = styled.div`
  width: auto;
  flex-grow: 1;

  .k-NavBar__nav {
    width: auto;
    margin: 0;
    background: var(--navBar-background);
    display: flex;
  }

  &.k-NavBar--hasPadding .k-NavBar__nav {
    padding: 0 ${pxToRem(CONTAINER_PADDING_THIN)};

    @media ${mq.tabletAndDesktop} {
      padding: 0 ${pxToRem(CONTAINER_PADDING)};
    }

    &::before,
    &::after {
      content: '';
      flex-grow: 1;
    }
  }

  .k-NavBar__list {
    list-style-type: none;
    display: flex;
    gap: ${pxToRem(25)};
    align-items: center;
    margin: 0;
    padding: 0;

    @media ${mq.tabletAndDesktop} {
      gap: ${pxToRem(50)};
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
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position: relative;
    color: var(--navBar-link);
    border-bottom: ${pxToRem(4)} solid
      var(--navBar-border);
    transition: color 0.2s, border-color 0.2s;
    cursor: pointer;

    &:hover {
      color: var(--navBar-activeLink);
      text-decoration: none;
    }

    &:focus,
    &[aria-current='page'] {
      border-color: var(--navBar-activeBorder);
      color: var(--navBar-activeLink);
      border-width: ${pxToRem(4)};
    }

    @media ${mq.tabletAndDesktop} {
      height: ${pxToRem(80)};
    }
  }

  &.k-NavBar--small {
    .k-NavBar__list {
      gap: ${pxToRem(30)};
    }

    .k-NavBar__link {
      height: ${pxToRem(60)};
    }
  }

  &.k-NavBar--big,
  &.k-NavBar--large {
    .k-NavBar__link {
      height: ${pxToRem(80)};

      @media ${mq.tabletAndDesktop} {
        height: ${pxToRem(100)};
      }
    }
  }

  &.k-NavBar--center .k-NavBar__nav {
    justify-content: center;
  }
  &.k-NavBar--start .k-NavBar__nav {
    justify-content: flex-start;
  }
  &.k-NavBar--end .k-NavBar__nav {
    justify-content: flex-end;
  }
  &.k-NavBar--space-between .k-NavBar__nav {
    justify-content: space-between;
  }

  @media ${mq.mobile} {
    &.k-NavBar--mobile-center .k-NavBar__nav {
      justify-content: center;
    }
    &.k-NavBar--mobile-start .k-NavBar__nav {
      justify-content: flex-start;
    }
    &.k-NavBar--mobile-end .k-NavBar__nav {
      justify-content: flex-end;
    }
    &.k-NavBar--mobile-space-between .k-NavBar__nav {
      justify-content: space-between;
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

const defaultColors = {
  background: 'var(--color-grey-000)',
  link: 'var(--color-grey-900)',
  border: 'transparent',
  activeLink: 'var(--color-primary-500)',
  activeBorder: 'var(--color-primary-500)',
}

export const NavBar = ({
  children,
  className,
  navProps,
  listProps,
  colors,
  modifier,
  align,
  mobileAlign,
  hasPadding,
  ...props
}) => {
  checkDeprecatedSizes(modifier)

  const internalColors = { ...defaultColors, ...colors }

  return (
    <StyledNavBar
      {...props}
      className={classNames(
        'k-NavBar',
        `k-NavBar--${modifier}`,
        `k-NavBar--${align}`,
        className,
        {
          'k-NavBar--hasPadding': hasPadding,
          [`k-NavBar--mobile-${mobileAlign}`]: !!mobileAlign
        }
      )}
      style={{
        '--navBar-background': internalColors.background,
        '--navBar-link': internalColors.link,
        '--navBar-border': internalColors.border,
        '--navBar-activeLink': internalColors.activeLink,
        '--navBar-activeBorder': internalColors.activeBorder,
      }}
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
}

NavBar.ListItem = NavBarItem

NavBar.defaultProps = {
  navProps: {},
  listProps: {},
  colors: defaultColors,
  modifier: 'medium',
  align: 'center',
  mobileAlign: null,
  hasPadding: true,
}

NavBar.propTypes = {
  colors: PropTypes.shape({
    background: PropTypes.string,
    link: PropTypes.string,
    border: PropTypes.string,
    activeLink: PropTypes.string,
    activeBorder: PropTypes.string,
  }),
  modifier: PropTypes.oneOf(['small', 'medium', 'large']),
  align: PropTypes.oneOf(['start', 'center', 'end', 'space-between']),
  mobileAlign: PropTypes.oneOf(['start', 'center', 'end', 'space-between']),
  padding: PropTypes.bool,
}
