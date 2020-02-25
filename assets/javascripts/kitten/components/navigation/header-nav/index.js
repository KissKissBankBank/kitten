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
import { Unlogged } from './components/unlogged'
import { Hidden } from './components/hidden'

export const MOBILE_HEADER_HEIGHT = pxToRem(65)
export const TABLET_HEADER_HEIGHT = pxToRem(80)
export const DESKTOP_HEADER_HEIGHT = pxToRem(80)

const Header = styled.header`
  height: ${MOBILE_HEADER_HEIGHT};
  display: flex;
  align-items: center;
  padding-left: ${pxToRem(20)};
  background: #fff;

  @media (min-width: ${ScreenConfig.S.min}px) {
    height: ${TABLET_HEADER_HEIGHT};
  }

  @media (min-width: ${ScreenConfig.L.min}px) {
    height: ${DESKTOP_HEADER_HEIGHT};
  }
`

const HeaderNav = ({ isLogged, id, children, ...props }) => {
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
      <Header role="banner" id={idState}>
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
HeaderNav.Unlogged = Unlogged
HeaderNav.Hidden = Hidden

HeaderNav.propTypes = {
  id: PropTypes.string,
}

HeaderNav.defaultProps = {
  id: 'kkbbAndCoHeaderNav',
}

export default HeaderNav
