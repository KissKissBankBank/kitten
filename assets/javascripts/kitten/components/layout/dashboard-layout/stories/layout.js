import React, { useState } from 'react'

import {
  DashboardLayout,
  useWindowWidth,
  useDeepCompareEffect,
  HeaderNav,
  KissKissBankBankLogo,
  COLORS,
  AvatarWithTextAndBadge,
  Text,
  StatusWithBullet,
  Button,
  PasswordIcon,
  Alert,
  HeaderMenu,
  domElementHelper,
} from 'kitten'

import { StoryMenu, StoryMultiMenu } from './menu'

const HEADER_NAV_ID = 'kkbbAndCoHeaderNav'
const getElementById = id => document.getElementById(id)
const getComputedWidthElement = id =>
  domElementHelper.getComputedWidth(getElementById(id))

const SiteHeaderComponent = () => {
  const [userMenuWidth, setUserMenuWidth] = useState(null)
  const windowWidth = useWindowWidth()

  useDeepCompareEffect(() => {
    setTimeout(() => {
      setUserMenuWidth(
        getComputedWidthElement(`${HEADER_NAV_ID}UserMenu`) || '0',
      )
    }, 100)
  }, [windowWidth])

  return (
    <HeaderNav
      id={HEADER_NAV_ID}
      isLogged={true}
      isFixed={true}
      quickAccessProps={{
        href: '#mainContent',
        text: 'Aller au contenu principal',
        zIndex: 300,
      }}
      size="small"
      borderStyle="border"
      zIndexConfig={{
        header: 102,
        headerWithOpenMenu: 105,
      }}
    >
      <HeaderNav.Logo href="#">
        <KissKissBankBankLogo height="25" className="k-u-margin-left-double" />
      </HeaderNav.Logo>

      <HeaderNav.Right>
        <HeaderNav.Logged>
          <HeaderNav.UserMenu dropdownContentWidth={userMenuWidth}>
            <HeaderNav.UserMenu.Button
              hasArrow
              backgroundColor={COLORS.background1}
              backgroundColorHover={COLORS.line1}
              backgroundColorActive={COLORS.line1}
            >
              <AvatarWithTextAndBadge>
                <AvatarWithTextAndBadge.Image
                  src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
                >
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
            </HeaderNav.UserMenu.Button>

            <HeaderNav.UserMenu.Navigation>
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
                <HeaderMenu.Item
                  href="#"
                  className="k-u-background-color-background3"
                >
                  Déconnexion
                </HeaderMenu.Item>
              </HeaderMenu>
            </HeaderNav.UserMenu.Navigation>
          </HeaderNav.UserMenu>
        </HeaderNav.Logged>

        <HeaderNav.LoggedOut>
          <HeaderNav.Button
            icon={<>🐱</>}
            backgroundColor={COLORS.primary1}
            backgroundColorHover={COLORS.primary2}
            color={COLORS.background1}
            text="Se connecter"
            href="#"
            hiddenText={{ max: 'xs' }}
          />
        </HeaderNav.LoggedOut>
      </HeaderNav.Right>
    </HeaderNav>
  )
}

export const StoryLayout = ({
  flowProps,
  status,
  selectedView,
  displayAlerts,
  displayHeader,
  children,
  multiMenu,
  ...args
}) => {
  return (
    <DashboardLayout {...args}>
      {displayHeader && (
        <DashboardLayout.SiteHeader className="k-u-hidden@m-down">
          <SiteHeaderComponent />
        </DashboardLayout.SiteHeader>
      )}

      <DashboardLayout.Header>
        <AvatarWithTextAndBadge>
          <AvatarWithTextAndBadge.Image
            className="k-u-hidden@l-up"
            src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
            alt=""
          />
          <AvatarWithTextAndBadge.Image
            className="k-u-hidden@m-down"
            src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
            alt=""
            size="big"
          />

          <AvatarWithTextAndBadge.Text
            withEllipsisOverflow
            className="k-u-color-background1"
          >
            <Text lineHeight="normal" weight="regular">
              T-shirts brodés Free Boobs Club
            </Text>
            <br />
            <StatusWithBullet
              as="span"
              weight="light"
              size="micro"
              statusType={status}
            >
              Prêt a être partagé avec un texte long pour tester l’ellipse
            </StatusWithBullet>
          </AvatarWithTextAndBadge.Text>
        </AvatarWithTextAndBadge>
      </DashboardLayout.Header>
      <DashboardLayout.SideContent>
        {multiMenu ? <StoryMultiMenu /> : <StoryMenu />}
      </DashboardLayout.SideContent>
      <DashboardLayout.SideFooter>
        <Button modifier="boron" fit="fluid">
          <PasswordIcon />
          <span>Voir ma page projet</span>
        </Button>
      </DashboardLayout.SideFooter>

      {displayAlerts && (
        <DashboardLayout.Alerts>
          <Alert closeButton info>
            Voilà une info
          </Alert>
          <Alert closeButton error>
            Voilà une alerte
          </Alert>
        </DashboardLayout.Alerts>
      )}

      {children}
    </DashboardLayout>
  )
}
