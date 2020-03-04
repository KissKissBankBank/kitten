import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HeaderNav from '../index'
import { LendopolisLogo } from '../../../../components/logos/lendopolis-logo'
import { KissKissBankBankLogo } from '../../../../components/logos/kisskissbankbanklogo'
import { HeaderMenu } from '../../../../components/menus/header-menu'
import { SearchIcon } from '../../../../components/icons/search-icon'
import COLORS from '../../../../constants/colors-config'
import { Title } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'
import { AvatarWithTextAndBadge } from '../../../../components/avatar/avatar-with-text-and-badge'
import { LoginIcon } from '../../../../components/icons/login-icon'
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
      <HeaderMenu.Item href="#">Comment investir</HeaderMenu.Item>
      <HeaderMenu.Item href="#">Découvrez les projets</HeaderMenu.Item>
      <HeaderMenu.Item href="#">Blog</HeaderMenu.Item>
    </HeaderNav.Hidden>

    <HeaderMenu.Item href="#">Comment emprunter</HeaderMenu.Item>
    <HeaderMenu.Item href="#" isSelected>
      À propos
    </HeaderMenu.Item>
    <HeaderMenu.Item href="#">Blog</HeaderMenu.Item>
    <HeaderMenu.Item external href="#">
      <KissKissBankBankLogo />
    </HeaderMenu.Item>
    <HeaderMenu.Item external href="#">
      <KissKissBankBankLogo />
    </HeaderMenu.Item>
    <HeaderMenu.Item external href="#">
      <KissKissBankBankLogo />
    </HeaderMenu.Item>
  </HeaderMenu>
)

const Navigation = () => (
  <>
    <HeaderNav.Nav.Item href="#">Comment investir</HeaderNav.Nav.Item>
    <HeaderNav.Nav.Item href="#" className="is-selected">
      Découvrez les projets
    </HeaderNav.Nav.Item>
    <HeaderNav.Nav.Item href="#">Blog</HeaderNav.Nav.Item>
  </>
)

const InnerUserMenu = () => (
  <HeaderMenu noBorder borderSide={false}>
    <HeaderMenu.Item href="#">
      Mon espace personnel <span className="k-Badge">2</span>
    </HeaderMenu.Item>
    <HeaderMenu.Item href="#">Déconnexion</HeaderMenu.Item>
  </HeaderMenu>
)

export const LendopolisHeaderNavStory = ({ isLogged }) => {
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
      quickAccessProps={{
        href: '#mainContent',
        text: 'Aller au contenu principal',
        zIndex: 300,
      }}
    >
      <HeaderNav.BurgerMenu dropdownContentWidth={pxToRem(burgerMenuWidth)}>
        <InnerBurgerMenu />
      </HeaderNav.BurgerMenu>

      <HeaderNav.Logo href="#">
        <HeaderNav.Hidden min="xs">
          <LendopolisLogo height="25" primaryColor="#000" />
        </HeaderNav.Hidden>

        <HeaderNav.Hidden max="xxs">
          <LendopolisLogo primaryColor="#000" />
        </HeaderNav.Hidden>
      </HeaderNav.Logo>

      <HeaderNav.Hidden max="m">
        <HeaderNav.Nav>
          <Navigation />
        </HeaderNav.Nav>
      </HeaderNav.Hidden>

      <HeaderNav.Right>
        <HeaderNav.UserMenu dropdownContentWidth={pxToRem(userMenuWidth)}>
          <HeaderNav.UserMenu.Button>
            <AvatarWithTextAndBadge>
              <AvatarWithTextAndBadge.Image backgroundColor="#002e7d">
                JC
                <AvatarWithTextAndBadge.Badge>2</AvatarWithTextAndBadge.Badge>
              </AvatarWithTextAndBadge.Image>

              <AvatarWithTextAndBadge.Text
                textClassName="k-u-hidden@xxs-down"
                withEllipsisOverflow={true}
              >
                <Text lineHeight="normal" weight="regular">
                  Jean Charles Édouard
                </Text>
                <br />
                <Text weight="light">
                  <Text className="k-u-weight-light k-u-hidden@xs-down">
                    Solde&nbsp;:
                  </Text>{' '}
                  2&nbsp;000,97&nbsp;€
                </Text>
              </AvatarWithTextAndBadge.Text>
            </AvatarWithTextAndBadge>
          </HeaderNav.UserMenu.Button>

          <HeaderNav.UserMenu.Navigation>
            <InnerUserMenu />
          </HeaderNav.UserMenu.Navigation>
        </HeaderNav.UserMenu>

        <HeaderNav.Unlogged>
          <HeaderNav.Hidden max="xs">
            <HeaderNav.Button
              backgroundColor={COLORS.background3}
              backgroundColorHover={COLORS.line1}
              color={COLORS.font1}
              text="Se connecter"
              href="#"
            />
          </HeaderNav.Hidden>

          <HeaderNav.Hidden min="xs">
            <HeaderNav.Button
              icon={<LoginIcon />}
              backgroundColor={COLORS.primary1}
              backgroundColorHover={COLORS.primary2}
              color={COLORS.background1}
              as="span"
            />
          </HeaderNav.Hidden>

          <HeaderNav.Button
            icon={
              <HeaderNav.Hidden min="s">
                <SearchIcon
                  width="14"
                  height="14"
                  color={COLORS.background1}
                  title="Aller sur la page de recherche"
                />
              </HeaderNav.Hidden>
            }
            backgroundColor={COLORS.primary1}
            backgroundColorHover={COLORS.primary2}
            color={COLORS.background1}
            text="S'inscrire"
            href="#"
            hiddenText={{ max: 'xs' }}
          />
        </HeaderNav.Unlogged>
      </HeaderNav.Right>
    </HeaderNav>
  )
}
