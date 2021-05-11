import React from 'react'
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
} from '../../..'

import { Default as Table } from '../../tables/list-table/list-table.stories.js'

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
  title: 'Structure/DashboardLayout',
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
        children: 'Retour',
      }}
      buttonProps={{
        openLabel: 'Ouvrir le menu',
        closeLabel: 'Fermer le menu',
      }}
      quickAccessLinkText="Accéder au contenu"
      fullHeightContent={selectedView === 'flow'}
    >
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