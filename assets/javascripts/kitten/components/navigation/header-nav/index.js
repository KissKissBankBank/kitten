import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import { Button } from './components/button'
import { Logo } from './components/logo'
import { BurgerMenu } from './components/burger-menu'
import { Nav } from './components/nav'
import { UserMenu } from './components/user-menu'
import { Context } from './components/context'
import { Right } from './components/right'
import { Centered } from './components/centered'
import { Unlogged } from './components/unlogged'
import { Logged } from './components/logged'
import { Hidden } from './components/hidden'
import { QuickAccessLink } from './components/quick-access-link'
import {
  MOBILE_HEADER_HEIGHT,
  TABLET_HEADER_HEIGHT,
  DESKTOP_HEADER_HEIGHT,
} from './config'
import { StickyContainer } from '../../../components/grid/sticky-container'
import COLORS from '../../../constants/colors-config'

const StyledStickyContainer = styled(StickyContainer)`
  ${({ isMenuExpanded }) =>
    isMenuExpanded &&
    css`
      transition: none;
    `}
`

const Container = styled.div`
  position: relative;
  z-index: ${({ isMenuExpanded, zIndex }) =>
    isMenuExpanded ? zIndex.headerWithOpenMenu : zIndex.header};
`

const Header = styled.header`
  width: 100vw;
  overflow: hidden;
  box-sizing: border-box;

  &,
  .quickAccessLink {
    height: ${MOBILE_HEADER_HEIGHT};
    background: ${({ updateBackground }) =>
      updateBackground ? COLORS.background3 : COLORS.background1};

    @media (min-width: ${ScreenConfig.S.min}px) {
      height: ${TABLET_HEADER_HEIGHT};
    }

    @media (min-width: ${ScreenConfig.L.min}px) {
      height: ${DESKTOP_HEADER_HEIGHT};
    }
  }
`

const HeaderNav = ({
  children,
  id,
  isFixed,
  isLogged,
  quickAccessProps,
  zIndexConfig,
  ...props
}) => {
  const [isLoggedState, setIsLogged] = useState(isLogged)
  const [idState, setId] = useState(id)
  const [isMenuExpanded, setMenuExpanded] = useState(false)
  const [menuExpandBy, setMenuExpandBy] = useState(null)
  const stickyContainerRef = useRef(null)

  useEffect(() => {
    setIsLogged(isLogged)
  }, [isLogged])

  useEffect(() => {
    setId(idState)
  }, [id])

  const updateHeaderBackground = () => /UserMenu/.test(menuExpandBy)

  const callOnToggle = ({ isExpanded, expandBy }) => {
    if (!isExpanded) stickyContainerRef.current.setSticky()

    setMenuExpanded(isExpanded)
    setMenuExpandBy(expandBy)
  }

  return (
    <Context.Provider
      value={{
        isLogged: isLoggedState,
        id: idState,
        expandBy: menuExpandBy,
        callOnToggle,
      }}
    >
      <Container zIndex={zIndexConfig}>
        <StyledStickyContainer
          ref={stickyContainerRef}
          isSticky={isFixed || isMenuExpanded ? 'always' : 'topOnScrollUp'}
          isMenuExpanded={isMenuExpanded}
        >
          <Header
            role="banner"
            id={idState}
            className="k-HeaderNav"
            updateBackground={updateHeaderBackground()}
          >
            <QuickAccessLink
              className="quickAccessLink"
              {...quickAccessProps}
            />
            {children}
          </Header>
        </StyledStickyContainer>
      </Container>
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
HeaderNav.Unlogged = Unlogged
HeaderNav.Logged = Logged
HeaderNav.Hidden = Hidden

HeaderNav.propTypes = {
  id: PropTypes.string,
  isFixed: PropTypes.bool,
  isLogged: PropTypes.bool,
  quickAccessProps: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
    zIndex: PropTypes.number,
  }),
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
  zIndexConfig: {
    header: 1,
    headerWithOpenMenu: 3,
  },
}

export default HeaderNav
