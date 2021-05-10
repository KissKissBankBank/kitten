import React, { useEffect, useState } from 'react'
import HeaderNav from '../index'
import { LendopolisLogo } from '../../../../components/graphics/logos/lendopolis-logo'
import { KissKissBankBankLogo } from '../../../../components/graphics/logos/kisskissbankbanklogo'
import { HeaderMenu } from '../../../../components/menus/header-menu'
import COLORS from '../../../../constants/colors-config'
import { Text } from '../../../../components/atoms/typography/text'
import { AvatarWithTextAndBadge } from '../../../../components/atoms/avatar-with-text-and-badge'
import { LoginIcon } from '../../../../components/graphics/icons/login-icon'
import domElementHelper from '../../../../helpers/dom/element-helper'
import { pxToRem } from '../../../../helpers/utils/typography'

const HEADER_NAV_ID = 'kkbbAndCoHeaderNav'
const getElementById = id => document.getElementById(id)
const getComputedWidthElement = id =>
  domElementHelper.getComputedWidth(getElementById(id))
const getComputedLeft = id =>
  domElementHelper.getComputedLeft(getElementById(id))

const InnerBurgerMenu = () => (
  <HeaderMenu borderSide="right" borderSideOnHover={false} largeItem noBorder>
    <HeaderNav.Hidden min="l">
      <HeaderMenu.Item href="#comment_investir">
        Comment investir
      </HeaderMenu.Item>
      <HeaderMenu.Item href="#decouvrez_les_projets">
        Découvrez les projets
      </HeaderMenu.Item>
    </HeaderNav.Hidden>

    <HeaderMenu.Item href="#comment_emprunter">
      Comment emprunter
    </HeaderMenu.Item>
    <HeaderMenu.Item href="#a_propos" isSelected>
      À propos
    </HeaderMenu.Item>
    <HeaderMenu.Item href="#blog">Blog</HeaderMenu.Item>
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
    <HeaderNav.Nav.Item href="#" isSelected>
      Découvrez les projets
    </HeaderNav.Nav.Item>
  </>
)

const InnerUserMenu = () => (
  <HeaderMenu
    noBorder
    borderSide={false}
    backgroundColors={{
      hover: COLORS.background1,
    }}
  >
    <HeaderMenu.Item href="#">
      Mon espace personnel
      <HeaderMenu.Badge a11yText="2 notifications">2</HeaderMenu.Badge>
      <div className="k-u-hidden@xs-up--important k-u-margin-top-noneHalf">
        <Text weight="light">Solde&nbsp;: 24&nbsp;093,39&nbsp;€</Text>
      </div>
    </HeaderMenu.Item>
    <HeaderMenu.Item
      className="k-u-background-color-background3--important"
      href="#"
    >
      Déconnexion
    </HeaderMenu.Item>
  </HeaderMenu>
)

const InnerAnonymousMenu = () => (
  <HeaderMenu
    noBorder
    borderSide={false}
    backgroundColors={{
      hover: COLORS.background1,
    }}
  >
    <HeaderMenu.Item href="#">Se connecter</HeaderMenu.Item>
    <HeaderMenu.Item href="#">S'inscrire</HeaderMenu.Item>
  </HeaderMenu>
)

export const LendopolisHeaderNavStory = ({
  isLogged,
  isFixed,
  stickyProps,
}) => {
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
        href: '#view',
        text: 'Aller au contenu',
        zIndex: 300,
      }}
      stickyProps={stickyProps}
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
        <HeaderNav.Logged>
          <HeaderNav.UserMenu dropdownContentWidth={pxToRem(userMenuWidth)}>
            <HeaderNav.UserMenu.Button>
              <AvatarWithTextAndBadge>
                <AvatarWithTextAndBadge.Image
                  text="JC"
                  backgroundColor="#002e7d"
                >
                  <AvatarWithTextAndBadge.Badge a11yText="2 notifications">
                    2
                  </AvatarWithTextAndBadge.Badge>
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
                    24&nbsp;093,39&nbsp;€
                  </Text>
                </AvatarWithTextAndBadge.Text>
              </AvatarWithTextAndBadge>
            </HeaderNav.UserMenu.Button>

            <HeaderNav.UserMenu.Navigation>
              <InnerUserMenu />
            </HeaderNav.UserMenu.Navigation>
          </HeaderNav.UserMenu>
        </HeaderNav.Logged>

        <HeaderNav.LoggedOut>
          <HeaderNav.Hidden max="xxs">
            <HeaderNav.Button
              backgroundColor={COLORS.background3}
              backgroundColorHover={COLORS.line1}
              color={COLORS.font1}
              colorHover={COLORS.font1}
              text="Se connecter"
              href="#"
            />
            <HeaderNav.Button
              backgroundColor={COLORS.primary1}
              backgroundColorHover={COLORS.primary2}
              color={COLORS.background1}
              colorHover={COLORS.background1}
              text="S'inscrire"
              href="#"
            />
          </HeaderNav.Hidden>

          <HeaderNav.Hidden min="xs">
            <HeaderNav.UserMenu
              dropdownContentWidth={pxToRem(userMenuWidth)}
              padding={false}
            >
              <HeaderNav.UserMenu.Button>
                <HeaderNav.Button
                  icon={<LoginIcon />}
                  a11yText="Se connecter / S'inscrire"
                  backgroundColor={COLORS.primary1}
                  backgroundColorHover={COLORS.primary2}
                  color={COLORS.background1}
                  colorHover={COLORS.background1}
                  as="span"
                />
              </HeaderNav.UserMenu.Button>

              <HeaderNav.UserMenu.Navigation>
                <InnerAnonymousMenu />
              </HeaderNav.UserMenu.Navigation>
            </HeaderNav.UserMenu>
          </HeaderNav.Hidden>
        </HeaderNav.LoggedOut>
      </HeaderNav.Right>
    </HeaderNav>
  )
}
