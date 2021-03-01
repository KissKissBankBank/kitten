import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { StickyContainer } from '../../../components/grid/sticky-container'
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

import {
  getFocusableElementsFrom,
  keyboardNavigation,
} from '../../../helpers/dom/a11y'
import domEvents, {
  DROPDOWN_FIRST_FOCUS_REACHED_EVENT,
  DROPDOWN_LAST_FOCUS_REACHED_EVENT,
  TOGGLE_DROPDOWN_EVENT,
} from '../../../helpers/dom/events'
import emitter from '../../../helpers/utils/emitter'
import { DROPDOWN_ANIMATED_DELAY } from '../../../constants/dropdown-config'
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
}) => {
  const [isMenuExpanded, setMenuExpanded] = useState(false)
  const [menuExpandBy, setMenuExpandBy] = useState(null)
  const [stickyState, setStickyState] = useState(null)
  const [isBackgroundInactive, setBackgroundInactive] = useState(null)
  const stickyContainerRef = useRef(null)
  const headerRef = useRef(null)
  const previousStickyState = usePrevious(stickyState)

  const focusDropdown = ({ detail: dropdown }) => {
    emitter.emit(TOGGLE_DROPDOWN_EVENT, false)
    dropdown.focus()
  }

  const focusElementNextToDropdown = ({ detail: dropdown }) => {
    emitter.emit(TOGGLE_DROPDOWN_EVENT, false)

    if (!headerRef.current) return

    setTimeout(() => {
      const focusableElements = getFocusableElementsFrom(headerRef.current)

      if (focusableElements.length < 1) return

      const currentElementIndex = focusableElements.indexOf(dropdown)
      const nextElement = focusableElements[currentElementIndex + 1] || dropdown

      nextElement.focus()
    }, DROPDOWN_ANIMATED_DELAY)
  }

  useEffect(() => {
    if (!headerRef.current) return

    headerRef.current.addEventListener('keydown', handleKeyboardNavigation)
    window.addEventListener(DROPDOWN_FIRST_FOCUS_REACHED_EVENT, focusDropdown)
    window.addEventListener(
      DROPDOWN_LAST_FOCUS_REACHED_EVENT,
      focusElementNextToDropdown,
    )

    return () => {
      if (!headerRef.current) return

      headerRef.current.removeEventListener('keydown', handleKeyboardNavigation)
      window.removeEventListener(
        DROPDOWN_FIRST_FOCUS_REACHED_EVENT,
        focusDropdown,
      )
      window.removeEventListener(
        DROPDOWN_LAST_FOCUS_REACHED_EVENT,
        focusElementNextToDropdown,
      )
    }
  }, [isMenuExpanded])

  const { keyboard } = domEvents

  const isArrowKeyCode = keycode =>
    [keyboard.left, keyboard.up, keyboard.right, keyboard.down].includes(
      keycode,
    )

  const handleKeyboardNavigation = event => {
    if (isArrowKeyCode(event.keyCode)) {
      event.preventDefault()

      const focusableElements = getFocusableElementsFrom(headerRef.current)
      const kbdNav = keyboardNavigation(focusableElements)

      if ([keyboard.right, keyboard.tab].includes(event.keyCode)) {
        return kbdNav.next()
      }
      if (event.keyCode === keyboard.left || keyboard.shiftTab(event)) {
        return kbdNav.prev()
      }
    }
  }

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

  useEffect(() => {
    setBackgroundInactive(/UserMenu/.test(menuExpandBy))
  }, [menuExpandBy])

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
        className={classNames('k-HeaderNav__wrapper', {
          'k-HeaderNav--menuIsExpanded': isMenuExpanded,
          'k-HeaderNav--inactiveBackground': isBackgroundInactive,
        })}
      >
        <StickyContainer
          ref={stickyContainerRef}
          isSticky={stickyState}
          {...stickyProps}
          className={classNames(
            'k-HeaderNav__stickyContainer',
            stickyProps.className,
          )}
        >
          <nav ref={headerRef} role="banner" id={id} className="k-HeaderNav">
            <QuickAccessLink
              className="quickAccessLink"
              {...quickAccessProps}
            />
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
}

export default HeaderNav
