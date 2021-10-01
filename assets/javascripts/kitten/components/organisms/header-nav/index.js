import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { StickyContainer } from '../../../components/layout/sticky-container'
import { Button } from './components/button'
import { Logo } from './components/logo'
import { BurgerMenu } from './components/burger-menu'
import { BurgerMenuNext } from './components/burger-menu-next'
import { Nav } from './components/nav'
import { UserMenu } from './components/user-menu'
import { UserMenuNext } from './components/user-menu-next'
import { Context } from './components/context'
import { Right } from './components/right'
import { Centered } from './components/centered'
import { LoggedOut } from './components/logged-out'
import { Logged } from './components/logged'
import { Hidden } from './components/hidden'
import { QuickAccessLink } from './components/quick-access-link'
import { SearchInput } from './components/search-input'

import { usePrevious } from '../../../helpers/utils/use-previous-hook'

import { StyledHeader } from './styles'

const HeaderNav = ({
  children,
  id,
  isFixed,
  isLogged,
  quickAccessProps,
  stickyProps,
  zIndexConfig,
  size,
  borderStyle,
  className,
}) => {
  const [isMenuExpanded, setMenuExpanded] = useState(false)
  const [menuExpandBy, setMenuExpandBy] = useState(null)
  const [stickyState, setStickyState] = useState(null)
  const stickyContainerRef = useRef(null)
  const headerRef = useRef(null)
  const previousStickyState = usePrevious(stickyState)

  const callOnToggle = ({ isExpanded, expandBy }) => {
    if (!isExpanded && previousStickyState === 'always') {
      stickyContainerRef.current.setSticky()
    }

    setMenuExpanded(isExpanded)
    setMenuExpandBy(expandBy)
  }

  useEffect(() => {
    setStickyState(isFixed || isMenuExpanded ? 'always' : 'topOnScrollUp')
  }, [isFixed, isMenuExpanded])

  return (
    <Context.Provider
      value={{
        isLogged,
        id,
        expandBy: menuExpandBy,
        callOnToggle,
      }}
    >
      <StyledHeader
        style={{
          '--HeaderNav-zIndex': zIndexConfig.header,
          '--HeaderNav-zIndex-openMenu': zIndexConfig.headerWithOpenMenu,
        }}
        zIndex={zIndexConfig}
        className={classNames(
          'k-HeaderNav__wrapper',
          `k-HeaderNav--${size}`,
          `k-HeaderNav--${borderStyle}`,
          {
            'k-HeaderNav--menuIsExpanded': isMenuExpanded,
          },
        )}
      >
        <StickyContainer
          ref={stickyContainerRef}
          isSticky={stickyState}
          {...stickyProps}
          className={classNames(
            'k-HeaderNav__stickyContainer',
            stickyProps?.className,
          )}
        >
          <nav
            ref={headerRef}
            id={id}
            className={classNames('k-HeaderNav', className)}
          >
            <QuickAccessLink {...quickAccessProps} />
            {children}
          </nav>
        </StickyContainer>
      </StyledHeader>
    </Context.Provider>
  )
}

HeaderNav.Button = Button
HeaderNav.Logo = Logo
HeaderNav.BurgerMenu = BurgerMenu
HeaderNav.BurgerMenuNext = BurgerMenuNext
HeaderNav.Nav = Nav
HeaderNav.UserMenu = UserMenu
HeaderNav.UserMenuNext = UserMenuNext
HeaderNav.Right = Right
HeaderNav.Centered = Centered
HeaderNav.LoggedOut = LoggedOut
HeaderNav.Logged = Logged
HeaderNav.Hidden = Hidden
HeaderNav.SearchInput = SearchInput

HeaderNav.propTypes = {
  id: PropTypes.string,
  isFixed: PropTypes.bool,
  isLogged: PropTypes.bool,
  quickAccessProps: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
    zIndex: PropTypes.number,
  }),
  stickyProps: PropTypes.shape({
    top: PropTypes.number,
  }),
  zIndexConfig: PropTypes.shape({
    header: PropTypes.number,
    headerWithOpenMenu: PropTypes.number,
  }),
  size: PropTypes.oneOf(['small', 'regular']),
  borderStyle: PropTypes.oneOf(['none', 'shadow', 'border']),
}

HeaderNav.defaultProps = {
  id: 'kkbbAndCoHeaderNav',
  isFixed: false,
  isLogged: false,
  quickAccessProps: {},
  stickyProps: {},
  zIndexConfig: {
    header: 1,
    headerWithOpenMenu: 3,
  },
  size: 'regular',
  borderStyle: 'shadow',
}

export default HeaderNav
