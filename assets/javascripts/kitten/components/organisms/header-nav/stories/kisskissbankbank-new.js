import React, { useState, useEffect, useRef } from 'react'
import HeaderNav from '../index'
import {
  LendopolisLogo,
  KissKissBankBankLogo,
  HeaderMenu,
  SearchIcon,
  COLORS,
  Text,
  AvatarWithTextAndBadge,
  domElementHelper,
  useWindowWidth,
  useDeepCompareEffect,
  Button,
  LoaderWithParagraph,
  Overlay,
} from '../../../..'

const HEADER_NAV_ID = 'kkbbAndCoHeaderNav'
const getElementById = id => document.getElementById(id)
const getComputedWidthElement = id =>
  domElementHelper.getComputedWidth(getElementById(id))
const getComputedLeft = id =>
  domElementHelper.getComputedLeft(getElementById(id))

const InnerBurgerMenu = () => (
  <HeaderMenu borderSide="right" largeItem noBorder>
    <HeaderNav.Hidden min="l">
      <HeaderMenu.Item href="#">Lancez votre projet</HeaderMenu.Item>
      <HeaderMenu.Item href="#">Découvrez les projets</HeaderMenu.Item>
    </HeaderNav.Hidden>

    <HeaderMenu.Item href="#" isSelected>
      Vos questions
    </HeaderMenu.Item>
    <HeaderMenu.Item href="#">Blog</HeaderMenu.Item>
    <HeaderMenu.Item external href="#">
      <LendopolisLogo primaryColor="#000" />
    </HeaderMenu.Item>
    <HeaderMenu.Item external href="#">
      <LendopolisLogo primaryColor="#000" />
    </HeaderMenu.Item>
    <HeaderMenu.Item external href="#">
      <LendopolisLogo primaryColor="#000" />
    </HeaderMenu.Item>
  </HeaderMenu>
)

const InnerUserMenu = () => (
  <HeaderMenu
    noBorder
    borderSide={false}
    backgroundColors={{
      hover: COLORS.background1,
    }}
  >
    <HeaderMenu.Item href="#">Mon espace personnel</HeaderMenu.Item>
    <HeaderMenu.Item href="#">Mes projets</HeaderMenu.Item>
    <HeaderMenu.Item size="tiny" href="#">
      Gluten Mag
    </HeaderMenu.Item>
    <HeaderMenu.Item size="tiny" href="#">
      Kallix — Mobilier de bureau pour le télétravail
    </HeaderMenu.Item>
    <HeaderMenu.Item size="tiny" href="#">
      Mon premier court-métrage
    </HeaderMenu.Item>
    <HeaderMenu.Item href="#">Mes contributions</HeaderMenu.Item>
    <HeaderMenu.Item href="#">Mes messages</HeaderMenu.Item>
    <HeaderMenu.Item href="#">Modifier mon profil</HeaderMenu.Item>
    <HeaderMenu.Item button modifier="helium" href="#">
      Mon projet en cours
    </HeaderMenu.Item>
    <HeaderMenu.Item href="#" className="k-u-background-color-background3">
      Déconnexion
    </HeaderMenu.Item>
  </HeaderMenu>
)

const Navigation = () => (
  <>
    <HeaderNav.Nav.Item href="#">Lancez votre projet</HeaderNav.Nav.Item>
    <HeaderNav.Nav.Item href="#" className="is-selected">
      Découvrez les projets
    </HeaderNav.Nav.Item>
  </>
)

const closeEvent = 'searchInput-overlay-close'
const openEvent = 'searchInput-overlay-open'

const SearchInput = () => {
  const [isSearchMenuOpen, openSearchMenu] = useState(false)
  const inputWrapperRef = useRef(null)

  const handleSearchInputChange = (changeEvent) => {
    openSearchMenu(changeEvent.target.value.length > 0)
  }

  useEffect(() => {
    window.dispatchEvent(new Event(isSearchMenuOpen ? openEvent : closeEvent))
    inputWrapperRef?.current.querySelector('#search-input').focus()

    if (isSearchMenuOpen) {
      inputWrapperRef.current.addEventListener('focusout', handleFocusOut)
    } else {
      inputWrapperRef.current.addEventListener('focusin', handleFocusIn)
    }

    return () => {
      inputWrapperRef.current.removeEventListener('focusout', handleFocusOut)
      inputWrapperRef.current.removeEventListener('focusin', handleFocusIn)
    }
  }, [isSearchMenuOpen])

  const handleFocusOut = event => {
    if (!inputWrapperRef.current || inputWrapperRef.current.contains(event.relatedTarget)) return

    openSearchMenu(false)
  }

  const handleFocusIn = event => {
    openSearchMenu(inputWrapperRef.current.querySelector('input').value.length > 0)
  }

  return (
    <HeaderNav.SearchInput
      inputProps={{
        onChange: handleSearchInputChange,
        id: 'search-input',
      }}
      expanded={isSearchMenuOpen}
      buttonProps={{
        type: 'submit',
        'aria-label': 'Voir les résultats de la recherche'
      }}
      ref={inputWrapperRef}
      openSearchMenu={openSearchMenu}
    >
      <HeaderNav.FloatingDropdown visible={isSearchMenuOpen}>
        <LoaderWithParagraph
          loaderPosition="top"
          className="k-u-margin-bottom-double k-u-horizontal-auto"
        >
          Chargement
        </LoaderWithParagraph>
        <Button size="tiny" fluid variant="orion" type="submit">
          Voir les résultats de la recherche
        </Button>
      </HeaderNav.FloatingDropdown>
    </HeaderNav.SearchInput>
  )
}

export const KissKissBankBankHeaderNavStoryNew = ({
  isLogged,
  isFixed,
  size,
  borderStyle,
}) => {
  const [burgerMenuWidth, setBurgerMenuWidth] = useState(null)
  const windowWidth = useWindowWidth()

  useDeepCompareEffect(() => {
    setBurgerMenuWidth(
      getComputedLeft(`${HEADER_NAV_ID}PlateformMenu`) +
        getComputedWidthElement(`${HEADER_NAV_ID}PlateformMenu`) +
        getComputedWidthElement(`${HEADER_NAV_ID}Logo`),
    )
  }, [isLogged, windowWidth])

  return (
    <>
      <Overlay
        zIndex={1}
        closeEvent={closeEvent}
        openEvent={openEvent}
        position="fixed"
      />

      <HeaderNav
        id={HEADER_NAV_ID}
        isLogged={isLogged}
        isFixed={isFixed}
        quickAccessProps={{
          href: '#mainContent',
          text: 'Aller au contenu principal',
          zIndex: 300,
        }}
        size={size}
        borderStyle={borderStyle}
      >
        <HeaderNav.BurgerMenuNext dropdownContentWidth={burgerMenuWidth}>
          <InnerBurgerMenu />
        </HeaderNav.BurgerMenuNext>

        <HeaderNav.Logo href="#">
          <HeaderNav.Hidden min="xs">
            <KissKissBankBankLogo height="25" />
          </HeaderNav.Hidden>

          <HeaderNav.Hidden max="xxs">
            <KissKissBankBankLogo />
          </HeaderNav.Hidden>
        </HeaderNav.Logo>

        <HeaderNav.Hidden max="m">
          <HeaderNav.Nav>
            <Navigation />
          </HeaderNav.Nav>
        </HeaderNav.Hidden>

        <HeaderNav.Right padded>
          <SearchInput />

          <HeaderNav.Logged>
            <HeaderNav.UserMenuNext
              dropdownAnchorSide="right"
              padding={false}
            >
              <HeaderNav.UserMenuNext.Button
                hasArrow
                backgroundColor={COLORS.background1}
                backgroundColorHover="transparent"
                backgroundColorActive="transparent"
                color={COLORS.font1}
                colorHover={COLORS.primary1}
                colorActive={COLORS.font1}
              >
                <AvatarWithTextAndBadge className="k-u-margin-left-single@xs-down">
                  <AvatarWithTextAndBadge.Image src="/kitten.jpg">
                    <AvatarWithTextAndBadge.Badge>2</AvatarWithTextAndBadge.Badge>
                  </AvatarWithTextAndBadge.Image>

                  <AvatarWithTextAndBadge.Text
                    className="k-u-hidden@xs-down"
                    withEllipsisOverflow={true}
                  >
                    <Text lineHeight="normal" weight="regular">
                      Jean Charles Édouard
                    </Text>
                  </AvatarWithTextAndBadge.Text>
                </AvatarWithTextAndBadge>
              </HeaderNav.UserMenuNext.Button>

              <HeaderNav.UserMenuNext.Navigation>
                <InnerUserMenu />
              </HeaderNav.UserMenuNext.Navigation>
            </HeaderNav.UserMenuNext>
          </HeaderNav.Logged>

          <HeaderNav.LoggedOut>
            <HeaderNav.Button
              icon={
                <HeaderNav.Hidden min="s">
                  <SearchIcon />
                </HeaderNav.Hidden>
              }
              backgroundColor={COLORS.primary1}
              backgroundColorHover={COLORS.primary2}
              color={COLORS.background1}
              text="Se connecter / S'inscrire"
              href="#"
              hiddenText={{ max: 'xs' }}
            />
          </HeaderNav.LoggedOut>
        </HeaderNav.Right>
      </HeaderNav>
    </>
  )
}
