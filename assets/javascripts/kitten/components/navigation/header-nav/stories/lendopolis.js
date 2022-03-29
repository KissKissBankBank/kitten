import React, { useEffect, useState } from 'react'
import HeaderNav from '../index'
import {
  LendopolisLogo,
  HeaderMenu,
  COLORS,
  Text,
  AvatarWithTextAndBadge,
  LoginIcon,
  domElementHelper,
  pxToRem,
  Badge,
  Button,
  KissKissBankBankLogo,
  MicrodonLogo,
  GoodeedLogo,
} from 'kitten'

const HEADER_NAV_ID = 'kkbbAndCoHeaderNav'
const getElementById = id => document.getElementById(id)
const getComputedWidthElement = id =>
  domElementHelper.getComputedWidth(getElementById(id))
const getComputedLeft = id =>
  domElementHelper.getComputedLeft(getElementById(id))

const InnerBurgerMenu = ({ isLogged }) => (
  <HeaderMenu borderSide="right" borderSideOnHover={false} noBorder>
    {!isLogged && (
      <>
        <HeaderMenu.Item
          href="#64435"
          className="k-u-background-color-primary6 k-u-hidden@s-up"
        >
          Se connecter
        </HeaderMenu.Item>
        <HeaderMenu.Item href="#54354" className="k-u-hidden@s-up">
          S'inscrire
        </HeaderMenu.Item>
      </>
    )}

    <HeaderMenu.Item href="5441" className="k-u-hidden@l-up">
      Découvrir les projets
    </HeaderMenu.Item>
    <HeaderMenu.Item href="5442" className="k-u-hidden@l-up">
      Comment investir
    </HeaderMenu.Item>

    <HeaderMenu.Item href="#987641" target="_blank" rel="noopener">
      Vos questions
    </HeaderMenu.Item>
    <HeaderMenu.Item href="#987642" target="_blank" rel="noopener">
      Blog
    </HeaderMenu.Item>
    <HeaderMenu.Item href="#987643">Le crowdequity</HeaderMenu.Item>
    <HeaderMenu.Item href="#987644">
      Le financement participatif
    </HeaderMenu.Item>
    <HeaderMenu.Item
      external
      size="tiny"
      href="#EXTERNAL_KISSKISSBANKBANK"
      target="_blank"
      rel="noopener"
    >
      <KissKissBankBankLogo />
    </HeaderMenu.Item>
    <HeaderMenu.Item
      external
      size="tiny"
      href="#EXTERNAL_MICRODON"
      target="_blank"
      rel="noopener"
    >
      <MicrodonLogo />
    </HeaderMenu.Item>
    <HeaderMenu.Item
      external
      size="tiny"
      href="#EXTERNAL_GOODEED"
      target="_blank"
      rel="noopener"
    >
      <GoodeedLogo />
    </HeaderMenu.Item>
  </HeaderMenu>
)

const Navigation = ({ isLogged, isPreRegistered }) => (
  <>
    <HeaderNav.Nav.Item href="#">Comment investir</HeaderNav.Nav.Item>
    <HeaderNav.Nav.Item href="#">Découvrir les projets</HeaderNav.Nav.Item>
    {isLogged && !isPreRegistered && (
      <HeaderNav.Nav.Item href="#">
        Parrainage&nbsp;
        <Badge color={COLORS.primary1}>OFFRE</Badge>
      </HeaderNav.Nav.Item>
    )}
  </>
)

const LoggedOutMenu = () => (
  <>
    <Button
      as="a"
      fit="content"
      size="tiny"
      modifier="calcium"
      borderRadius={100}
      href="#87641"
      className="k-u-hidden@xs-down"
    >
      Se connecter
    </Button>

    <Button
      as="a"
      fit="content"
      size="tiny"
      modifier="helium"
      borderRadius={100}
      href="#87642"
      className="k-u-hidden@xs-down"
    >
      S'inscrire
    </Button>
  </>
)

const PreRegisteredMenu = () => (
  <>
    <Button
      as="a"
      fit="content"
      size="tiny"
      modifier="helium"
      className="k-u-hidden@m-down"
      borderRadius={100}
      href="#6684654"
    >
      Mon inscription
    </Button>

    <HeaderNav.UserMenu dropdownAnchorSide="right">
      <HeaderNav.UserMenu.Button
        backgroundColor={COLORS.background1}
        backgroundColorHover="transparent"
        backgroundColorActive="transparent"
      >
        <Button
          as="span"
          icon={true}
          size="tiny"
          rounded={true}
          modifier="hydrogen"
          aria-label="Menu"
        >
          <LoginIcon width={15} height={16} />
        </Button>
      </HeaderNav.UserMenu.Button>

      <HeaderNav.UserMenu.Navigation>
        <HeaderMenu
          noBorder
          borderSide={false}
          backgroundColors={{
            hover: COLORS.background1,
          }}
          position="right"
        >
          <HeaderMenu.Item className="k-u-hidden@l-up" href="#64">
            Compléter mon profil
          </HeaderMenu.Item>
          <HeaderMenu.Item
            className="k-u-background-color-background3"
            href="#68464"
          >
            Déconnexion
          </HeaderMenu.Item>
        </HeaderMenu>
      </HeaderNav.UserMenu.Navigation>
    </HeaderNav.UserMenu>
  </>
)
const LoggedInMenu = () => (
  <>
    <HeaderNav.UserMenu dropdownAnchorSide="right">
      <HeaderNav.UserMenu.Button
        backgroundColor={COLORS.background1}
        backgroundColorHover="transparent"
        backgroundColorActive="transparent"
        color={COLORS.font1}
        colorHover={COLORS.primary1}
        colorActive={COLORS.font1}
      >
        <AvatarWithTextAndBadge>
          <AvatarWithTextAndBadge.Image text="JR" src="/kitten.jpg" alt="">
            <AvatarWithTextAndBadge.Badge a11yText="1 notification">
              1
            </AvatarWithTextAndBadge.Badge>
          </AvatarWithTextAndBadge.Image>

          <AvatarWithTextAndBadge.Text
            className="k-u-hidden@xs-down"
            withEllipsisOverflow
          >
            <Text
              lineHeight="normal"
              weight="regular"
              tag="div"
              style={{ marginBottom: pxToRem(2) }}
            >
              Hello world
            </Text>
            <span className="k-u-weight-light">
              <span className="k-u-weight-light k-u-hidden@xs-down">
                Solde&nbsp;:
              </span>
              {` 15 2568 €`}
            </span>
          </AvatarWithTextAndBadge.Text>
        </AvatarWithTextAndBadge>
      </HeaderNav.UserMenu.Button>

      <HeaderNav.UserMenu.Navigation>
        <HeaderMenu
          noBorder
          borderSide={false}
          backgroundColors={{ hover: COLORS.background1 }}
        >
          <HeaderMenu.Item href="#643435">
            Compléter mon profil
            <HeaderMenu.Badge a11yText="1 notification">1</HeaderMenu.Badge>
          </HeaderMenu.Item>

          <HeaderMenu.Item href="#5354354">Espace personnel</HeaderMenu.Item>

          <HeaderMenu.Item
            className="k-u-background-color-background3"
            href="#logout"
          >
            Déconnexion
          </HeaderMenu.Item>
        </HeaderMenu>
      </HeaderNav.UserMenu.Navigation>
    </HeaderNav.UserMenu>
  </>
)

export const LendopolisHeaderNavStory = ({
  isLogged,
  isPreRegistered,
  ...args
}) => {
  const [burgerMenuWidth, setBurgerMenuWidth] = useState(null)

  useEffect(() => {
    setBurgerMenuWidth(
      getComputedLeft(`${HEADER_NAV_ID}PlateformMenu`) +
        getComputedWidthElement(`${HEADER_NAV_ID}PlateformMenu`) +
        getComputedWidthElement(`${HEADER_NAV_ID}Logo`),
    )
  }, [isLogged])

  return (
    <HeaderNav
      id={HEADER_NAV_ID}
      quickAccessProps={{
        href: '#view',
        text: 'Aller au contenu',
        zIndex: 300,
      }}
      isLogged={isLogged}
      {...args}
    >
      <HeaderNav.BurgerMenu dropdownContentWidth={pxToRem(burgerMenuWidth)}>
        <InnerBurgerMenu isLogged={isLogged} />
      </HeaderNav.BurgerMenu>

      <HeaderNav.Logo href="#">
        <LendopolisLogo primaryColor="#000" />
      </HeaderNav.Logo>

      <HeaderNav.Nav className="k-u-hidden@m-down">
        <Navigation isLogged={isLogged} isPreRegistered={isPreRegistered} />
      </HeaderNav.Nav>

      <HeaderNav.Right>
        {!isLogged && <LoggedOutMenu />}
        {isLogged &&
          (isPreRegistered ? <PreRegisteredMenu /> : <LoggedInMenu />)}
      </HeaderNav.Right>
    </HeaderNav>
  )
}
