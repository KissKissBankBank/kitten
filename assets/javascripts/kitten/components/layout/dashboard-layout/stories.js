import React, { useState } from 'react'
import styled from 'styled-components'
import { select, boolean } from '@storybook/addon-knobs'

import { DashboardLayout } from './index'

import {
  AvatarWithTextAndBadge,
  Text,
  Title,
  Button,
  GlobeIcon,
  COLORS,
  pxToRem,
  ScreenConfig,
  StatusWithBullet,
  DashboardMenu,
  HomeIcon,
  TagIcon,
  FilterIcon,
  FileIcon,
  LoudspeakerIcon,
  ShieldIcon,
  PeopleIcon,
  StatsIcon,
  SpeechBubbleIcon,
  HeaderNav,
  HeaderMenu,
  KissKissBankBankLogo,
  domElementHelper,
} from '../../..'

import { Default as Table } from '../../tables/list-table/list-table.stories.js'

import { useWindowWidth } from '../../../helpers/utils/use-window-width-hook'
import { useDeepCompareEffect } from '../../../helpers/utils/use-deep-compare-effect-hook'

const HEADER_NAV_ID = 'kkbbAndCoHeaderNav'
const getElementById = id => document.getElementById(id)
const getComputedWidthElement = id =>
  domElementHelper.getComputedWidth(getElementById(id))

const CardHolder = styled.div`
  display: grid;
  gap: ${pxToRem(10)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    gap: ${pxToRem(15)};
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${pxToRem(30)};
  }

  > div {
    border: ${pxToRem(2)} solid ${COLORS.line1};
    border-radius: ${pxToRem(6)};
    padding: ${pxToRem(20)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      border-radius: ${pxToRem(8)};
      padding: ${pxToRem(30)};
    }
  }
`

const HelpBox = styled.div`
  height: ${pxToRem(80)};
  background-color: rgb(255, 255, 255, 0.05);
  padding: 0 ${pxToRem(20)};
  display: flex;
  align-items: center;
  border-radius: ${pxToRem(8)};
`

export default {
  title: 'Layout/DashboardLayout',
  component: DashboardLayout,
}

export const Default = () => {
  const selectedView = select(
    'content_type',
    ['flow', 'dashboard', 'table'],
    'flow',
  )

  return (
    <DashboardLayout
      backLinkProps={{
        href: '#',
        children: 'Retour au site',
      }}
      buttonProps={{
        openLabel: 'Ouvrir le menu',
        closeLabel: 'Fermer le menu',
      }}
      quickAccessLinkText="Accéder au contenu"
      fullHeightContent={selectedView === 'flow'}
    >
      {boolean('Display SiteHeader', true) && (
        <DashboardLayout.SiteHeader className="k-u-hidden@m-down">
          <SiteHeaderComponent />
        </DashboardLayout.SiteHeader>
      )}

      <DashboardLayout.Header>
        <AvatarWithTextAndBadge>
          <AvatarWithTextAndBadge.Image src="/kitten.jpg" alt="" size="big" />

          <AvatarWithTextAndBadge.Text
            withEllipsisOverflow
            className="k-u-color-background1--important"
          >
            <Text lineHeight="normal" weight="regular">
              T-shirts brodés Free Boobs Club
            </Text>
            <br />
            <StatusWithBullet
              as="span"
              weight="light"
              size="micro"
              statusType={select(
                'Status type',
                ['danger', 'success', 'warning', 'neutral', 'none'],
                'success',
              )}
            >
              Prêt a être partagé avec un texte long pour tester l’ellipse
            </StatusWithBullet>
          </AvatarWithTextAndBadge.Text>
        </AvatarWithTextAndBadge>
      </DashboardLayout.Header>
      <DashboardLayout.SideContent>
        {({ closeSideBar }) => {
          return (
            <DashboardMenu>
              <DashboardMenu.Item
                href="?id=layout-dashboardlayout--default&knob-content_type=dashboard&viewMode=story"
                isActive={
                  window.location.search ===
                  '?id=layout-dashboardlayout--default&knob-content_type=dashboard&viewMode=story'
                }
                icon={() => <HomeIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Accueil
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="?id=layout-dashboardlayout--default&knob-content_type=table&viewMode=story"
                isActive={
                  window.location.search ===
                  '?id=layout-dashboardlayout--default&knob-content_type=table&viewMode=story'
                }
                icon={() => <PeopleIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Contributeurs
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="?id=layout-dashboardlayout--default&knob-content_type=table&viewMode=story&custom=a"
                isActive={
                  window.location.search ===
                  '?id=layout-dashboardlayout--default&knob-content_type=table&viewMode=story&custom=a'
                }
                icon={() => <TagIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Contreparties
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="?id=layout-dashboardlayout--default&knob-content_type=flow&viewMode=story&custom=b"
                isActive={
                  window.location.search ===
                  '?id=layout-dashboardlayout--default&knob-content_type=flow&viewMode=story&custom=b'
                }
                icon={() => <FilterIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Paramètres
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="?id=layout-dashboardlayout--default&knob-content_type=flow&viewMode=story"
                isActive={
                  window.location.search ===
                  '?id=layout-dashboardlayout--default&knob-content_type=flow&viewMode=story'
                }
                icon={() => <FileIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Page Projet
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="?id=layout-dashboardlayout--default&knob-content_type=flow&knob-loading=true&viewMode=story"
                isActive={
                  window.location.search ===
                  '?id=layout-dashboardlayout--default&knob-content_type=flow&knob-loading=true&viewMode=story'
                }
                icon={() => <StatsIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Statistiques
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="?id=layout-dashboardlayout--default&knob-content_type=flow&knob-loading=true&viewMode=story&custom=1"
                isActive={
                  window.location.search ===
                  '?id=layout-dashboardlayout--default&knob-content_type=flow&knob-loading=true&viewMode=story&custom=1'
                }
                icon={() => <LoudspeakerIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Marketing
              </DashboardMenu.Item>
              <DashboardMenu.Expandable
                title="Admin"
                icon={() => <ShieldIcon color="currentColor" />}
              >
                <DashboardMenu.Item
                  href="?id=layout-dashboardlayout--default&knob-content_type=flow&viewMode=story&custom=1"
                  isActive={
                    window.location.search ===
                    '?id=layout-dashboardlayout--default&knob-content_type=flow&viewMode=story&custom=1'
                  }
                  onClick={() => closeSideBar()}
                >
                  Destinataire des fonds
                </DashboardMenu.Item>
                <DashboardMenu.Item
                  href="?id=layout-dashboardlayout--default&knob-content_type=flow&viewMode=story&custom=2"
                  isActive={
                    window.location.search ===
                    '?id=layout-dashboardlayout--default&knob-content_type=flow&viewMode=story&custom=2'
                  }
                  onClick={() => closeSideBar()}
                >
                  Confirmation d'identité
                </DashboardMenu.Item>
                <DashboardMenu.Item
                  href="?id=layout-dashboardlayout--default&knob-content_type=flow&viewMode=story&custom=3"
                  isActive={
                    window.location.search ===
                    '?id=layout-dashboardlayout--default&knob-content_type=flow&viewMode=story&custom=3'
                  }
                  onClick={() => closeSideBar()}
                >
                  Documents justificatifs
                </DashboardMenu.Item>
              </DashboardMenu.Expandable>
              <DashboardMenu.Item
                href="?id=layout-dashboardlayout--default&knob-content_type=flow&viewMode=story&custom=4"
                isActive={
                  window.location.search ===
                  '?id=layout-dashboardlayout--default&knob-content_type=flow&viewMode=story&custom=4'
                }
                icon={() => <SpeechBubbleIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Actualités
              </DashboardMenu.Item>
            </DashboardMenu>
          )
        }}
      </DashboardLayout.SideContent>
      <DashboardLayout.SideFooter>
        <HelpBox>
          <AvatarWithTextAndBadge as="a" href="#">
            <AvatarWithTextAndBadge.Image src="/kitten.jpg" alt="" />

            <AvatarWithTextAndBadge.Text>
              <Text weight="bold" color="background1" size="tiny">
                Besoin d’aide ?
              </Text>
              <br />
              <Text weight="bold" color="primary1" size="tiny">
                Contacter votre coach
              </Text>
            </AvatarWithTextAndBadge.Text>
          </AvatarWithTextAndBadge>
        </HelpBox>
      </DashboardLayout.SideFooter>

      {selectedView === 'flow' && <FlowExample />}
      {selectedView === 'dashboard' && <DashExample />}
      {selectedView === 'table' && <TableExample />}
    </DashboardLayout>
  )
}

const DashExample = () => (
  <>
    <div
      className="k-u-flex k-u-flex-direction-column@m-down k-u-flex-alignItems-start k-u-flex-justifyContent-sb k-u-margin-bottom-triple"
      style={{ '--gap': '30px' }}
    >
      <Title modifier="quinary" className="k-u-margin-none">
        Curabitur blandit tempus porttitor.
      </Title>
      <Button borderRadius={6}>
        <GlobeIcon width="16" height="16" />
        <span>Voir ma page projet</span>
      </Button>
    </div>
    <CardHolder>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </CardHolder>
  </>
)

const TableExample = () => (
  <>
    <Title
      modifier="quinary"
      className="k-u-margin-none k-u-margin-bottom-triple"
    >
      Curabitur blandit tempus porttitor.
    </Title>
    <div className="k-DashboardLayout__fullWidth">
      <Table />
    </div>
  </>
)

const FlowExample = () => (
  <DashboardLayout.Flow loading={boolean('loading', false)}>
    <DashboardLayout.Flow.Content>
      <Title
        modifier="quinary"
        className="k-u-margin-none k-u-margin-bottom-triple"
      >
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </Title>
      <p className="k-u-weight-light">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel
        augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel
        augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p className="k-u-weight-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis,
        est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
        sem nec elit. Sed posuere consectetur est at lobortis. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus
        varius blandit sit amet non magna. Etiam porta sem malesuada magna
        mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p className="k-u-weight-light">
        Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
        augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta
        gravida at eget metus. Maecenas sed diam eget risus varius blandit sit
        amet non magna. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </p>
      <p className="k-u-weight-light">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
        risus varius blandit sit amet non magna. Maecenas sed diam eget risus
        varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed
        consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
        venenatis vestibulum.
      </p>
      <p className="k-u-weight-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo
        quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna
        mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris
        condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis,
        est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
        sem nec elit.
      </p>
      <p className="k-u-weight-light">
        Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
        augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta
        gravida at eget metus. Maecenas sed diam eget risus varius blandit sit
        amet non magna. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </p>
      <p className="k-u-weight-light">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
        risus varius blandit sit amet non magna. Maecenas sed diam eget risus
        varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed
        consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
        venenatis vestibulum.
      </p>
      <p className="k-u-weight-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo
        quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna
        mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris
        condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis,
        est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
        sem nec elit.
      </p>
    </DashboardLayout.Flow.Content>
    <DashboardLayout.Flow.Aside
      mobileAsideProps={{
        openLabel: 'Open help',
        closeLabel: 'Close help',
      }}
    >
      <DashboardLayout.Flow.AsideCard>
        <DashboardLayout.Flow.AsideCard.Title>
          Side content in Title
        </DashboardLayout.Flow.AsideCard.Title>
        <DashboardLayout.Flow.AsideCard.Paragraph>
          Side content in Paragraph
        </DashboardLayout.Flow.AsideCard.Paragraph>
        <DashboardLayout.Flow.AsideCard.List>
          <li className="k-u-weight-light">Side content in List (item 1)</li>
          <li className="k-u-weight-light">Side content in List (item 2)</li>
        </DashboardLayout.Flow.AsideCard.List>
      </DashboardLayout.Flow.AsideCard>
    </DashboardLayout.Flow.Aside>
    <DashboardLayout.Flow.Nav>
      {boolean('Show 2 buttons', true) && (
        <Button
          modifier="hydrogen"
          variant="orion"
          size="big"
          type="button"
          disabled={boolean('loading', false)}
        >
          Back
        </Button>
      )}
      <Button
        modifier="helium"
        variant="orion"
        size="big"
        type="button"
        disabled={boolean('loading', false)}
      >
        Save
      </Button>
    </DashboardLayout.Flow.Nav>
  </DashboardLayout.Flow>
)

const FlowStoryContainer = styled.div`
  width: 75%;
  margin: 0 auto;
`

export const Flow = () => (
  <FlowStoryContainer>
    <FlowExample />
  </FlowStoryContainer>
)

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
      isFixed="always"
      quickAccessProps={{
        href: '#mainContent',
        text: 'Aller au contenu principal',
        zIndex: 300,
      }}
      size="small"
    >
      <HeaderNav.Logo href="#">
        <KissKissBankBankLogo height="25" className="k-u-margin-left-double" />
      </HeaderNav.Logo>

      <HeaderNav.Right>
        <HeaderNav.Logged>
          <HeaderNav.UserMenu dropdownContentWidth={userMenuWidth} hasArrow>
            <HeaderNav.UserMenu.Button>
              <AvatarWithTextAndBadge>
                <AvatarWithTextAndBadge.Image src="https://via.placeholder.com/40x40.png">
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
                  className="k-u-background-color-background3--important"
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
            text="Se connecter / S'inscrire"
            href="#"
            hiddenText={{ max: 'xs' }}
          />
        </HeaderNav.LoggedOut>
      </HeaderNav.Right>
    </HeaderNav>
  )
}
