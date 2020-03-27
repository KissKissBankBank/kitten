import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HeaderNav from '../index'
import { LendopolisLogo } from '../../../../components/logos/lendopolis-logo'
import { KissKissBankBankLogo } from '../../../../components/logos/kisskissbankbanklogo'
import { HeaderMenu } from '../../../../components/menus/header-menu'
import { SearchIcon } from '../../../../components/icons/search-icon'
import COLORS from '../../../../constants/colors-config'
import { Text } from '../../../../components/typography/text'
import { AvatarWithTextAndBadge } from '../../../../components/avatar/avatar-with-text-and-badge'
import domElementHelper from '../../../../helpers/dom/element-helper'
import { pxToRem } from '../../../../helpers/utils/typography'

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
    <HeaderMenu.Item href="#">Mes contributions</HeaderMenu.Item>
    <HeaderMenu.Item href="#">Mes messages</HeaderMenu.Item>
    <HeaderMenu.Item href="#">Modifier mon profil</HeaderMenu.Item>
    <HeaderMenu.Item button modifier="helium" href="#">
      Mon projet en cours
    </HeaderMenu.Item>
    <HeaderMenu.Item
      href="#"
      className="k-u-background-color-background3--important"
    >
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

export const KissKissBankBankHeaderNavStory = ({ isLogged, isFixed }) => {
  const [burgerMenuWidth, setBurgerMenuWidth] = useState(null)
  const [userMenuWidth, setUserMenuWidth] = useState(null)

  useEffect(() => {
    setBurgerMenuWidth(
      getComputedLeft(`${HEADER_NAV_ID}PlateformMenu`) +
        getComputedWidthElement(`${HEADER_NAV_ID}PlateformMenu`) +
        getComputedWidthElement(`${HEADER_NAV_ID}Logo`),
    )

    if (isLogged) {
      setTimeout(() => {
        setUserMenuWidth(getComputedWidthElement(`${HEADER_NAV_ID}UserMenu`))
      }, 100)
    }
  }, [isLogged])

  return (
    <HeaderNav
      id={HEADER_NAV_ID}
      isLogged={isLogged}
      isFixed={isFixed}
      quickAccessProps={{
        href: '#mainContent',
        text: 'Aller au contenu principal',
        zIndex: 300,
      }}
    >
      <HeaderNav.BurgerMenu>
        <InnerBurgerMenu />
      </HeaderNav.BurgerMenu>

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

      <HeaderNav.Right>
        <HeaderNav.Button
          icon={
            <SearchIcon
              width="14"
              height="14"
              color={COLORS.font1}
              title="Aller sur la page de recherche"
            />
          }
          backgroundColor={COLORS.background3}
          backgroundColorHover={COLORS.line1}
          color={COLORS.font1}
          text="Rechercher"
          href="#"
          hiddenText={{ max: 'm' }}
        />

        <HeaderNav.Logged>
          <HeaderNav.UserMenu dropdownContentWidth={pxToRem(userMenuWidth)}>
            <HeaderNav.UserMenu.Button>
              <AvatarWithTextAndBadge>
                <AvatarWithTextAndBadge.Image src="https://via.placeholder.com/40x40.png">
                  <AvatarWithTextAndBadge.Badge>2</AvatarWithTextAndBadge.Badge>
                </AvatarWithTextAndBadge.Image>

                <AvatarWithTextAndBadge.Text
                  textClassName="k-u-hidden@xxs-down"
                  withEllipsisOverflow={true}
                >
                  <Text lineHeight="normal" weight="regular">
                    Jean Charles Édouard
                  </Text>
                </AvatarWithTextAndBadge.Text>
              </AvatarWithTextAndBadge>
            </HeaderNav.UserMenu.Button>

            <HeaderNav.UserMenu.Navigation>
              <InnerUserMenu />
            </HeaderNav.UserMenu.Navigation>
          </HeaderNav.UserMenu>
        </HeaderNav.Logged>

        <HeaderNav.Unlogged>
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
        </HeaderNav.Unlogged>
      </HeaderNav.Right>
    </HeaderNav>
  )
}
