import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { StickyContainer } from '../../layout/sticky-container'
import { Button } from './components/button'
import { Logo } from './components/logo'
import { BurgerMenu } from './components/burger-menu'
import { Nav } from './components/nav'
import { UserMenu } from './components/user-menu'
import { Context } from './components/context'
import { Right } from './components/right'
import { Centered } from './components/centered'
import { LoggedOut } from './components/logged-out'
import { Logged } from './components/logged'
import { Hidden } from './components/hidden'
import { QuickAccessLink } from './components/quick-access-link'
import { SearchInput } from './components/search-input'

import { usePrevious } from '../../../helpers/hooks/use-previous'

import { StyledHeader } from './styles'

const HeaderNav = ({
  children,
  id,
  isFixed,
  isLogged,
  quickAccessProps,
  stickyProps,
  zIndexConfig,
  className,
  navProps,
  headerProps,
}) => {
  const [isMenuExpanded, setMenuExpanded] = useState(false)
  const [menuExpandBy, setMenuExpandBy] = useState(null)
  const [stickyState, setStickyState] = useState(null)
  const [stuckState, setStuckState] = useState(false)
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

  const handleStickyChange = ({ isStuck }) => setStuckState(isStuck)

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
        {...headerProps}
        style={{
          '--HeaderNav-zIndex': zIndexConfig.header,
          '--HeaderNav-zIndex-openMenu': zIndexConfig.headerWithOpenMenu,
          ...headerProps?.style,
        }}
        zIndex={zIndexConfig}
        className={classNames('k-HeaderNav__wrapper', headerProps?.className, {
          'k-HeaderNav--menuIsExpanded': isMenuExpanded,
          'k-HeaderNav--isStuck': stuckState,
        })}
      >
        <StickyContainer
          ref={stickyContainerRef}
          isSticky={stickyState}
          {...stickyProps}
          className={classNames(
            'k-HeaderNav__stickyContainer',
            stickyProps?.className,
          )}
          onChange={handleStickyChange}
        >
          <nav
            ref={headerRef}
            {...navProps}
            id={id}
            className={classNames('k-HeaderNav', className, navProps.className)}
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
HeaderNav.Nav = Nav
HeaderNav.UserMenu = UserMenu
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
  headerProps: PropTypes.object,
  navProps: PropTypes.object,
  zIndexConfig: PropTypes.shape({
    header: PropTypes.number,
    headerWithOpenMenu: PropTypes.number,
  }),
}

HeaderNav.defaultProps = {
  id: 'kkbbAndCoHeaderNav',
  isFixed: false,
  isLogged: false,
  quickAccessProps: {},
  stickyProps: {},
  headerProps: {},
  navProps: {},
  zIndexConfig: {
    header: 1,
    headerWithOpenMenu: 3,
  },
}

export default HeaderNav
