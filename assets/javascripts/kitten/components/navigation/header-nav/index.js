import React, { useState, useEffect } from 'react'
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
import { Hidden } from './components/hidden'
import { QuickAccessLink } from './components/quick-access-link'
import {
  MOBILE_HEADER_HEIGHT,
  TABLET_HEADER_HEIGHT,
  DESKTOP_HEADER_HEIGHT,
} from './config'

const Header = styled.header`
  &,
  .quickAccessLink {
    height: ${MOBILE_HEADER_HEIGHT};
    background: #fff;

    @media (min-width: ${ScreenConfig.S.min}px) {
      height: ${TABLET_HEADER_HEIGHT};
    }

    @media (min-width: ${ScreenConfig.L.min}px) {
      height: ${DESKTOP_HEADER_HEIGHT};
    }
  }
`

const HeaderNav = ({ isLogged, id, children, quickAccessProps, ...props }) => {
  const [isLoggedState, setIsLogged] = useState(isLogged)
  const [idState, setId] = useState(id)

  useEffect(() => {
    setIsLogged(isLogged)
  }, [isLogged])

  useEffect(() => {
    setId(idState)
  }, [id])

  return (
    <Context.Provider value={{ isLogged: isLoggedState, id: idState }}>
      <Header role="banner" id={idState} className="k-HeaderNav">
        <QuickAccessLink className="quickAccessLink" {...quickAccessProps} />
        {children}
      </Header>
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
HeaderNav.Hidden = Hidden

HeaderNav.propTypes = {
  id: PropTypes.string,
}

HeaderNav.defaultProps = {
  id: 'kkbbAndCoHeaderNav',
}

export default HeaderNav
