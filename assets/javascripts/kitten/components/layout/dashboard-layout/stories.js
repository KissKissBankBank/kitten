import React from 'react'
import styled from 'styled-components'
import { select, boolean, number } from '@storybook/addon-knobs'

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
  title: 'WIP',
  component: DashboardLayout,
}

export const ProjectAdminLayout = () => {
  const col1Percent = number('1. Menu %', null)
  const col1PercentValue = (col1Percent && col1Percent > 0) ? `${col1Percent}vw` : 'auto'

  const col2Percent = number('2. Marge gauche %', null)
  const col2PercentValue = (col1Percent && col2Percent > 0) ? `${col2Percent}vw` : 'auto'

  const col3Percent = number('3. Contenu %', null)
  const col3PercentValue = (col1Percent && col3Percent > 0) ? `${col3Percent}vw` : 'auto'

  const col4Percent = number('4. Gouttière %', null)
  const col4PercentValue = (col1Percent && col4Percent > 0) ? `${col4Percent}vw` : 'auto'

  const col5Percent = number('5. Aide %', null)
  const col5PercentValue = (col1Percent && col5Percent > 0) ? `${col5Percent}vw` : 'auto'

  const col6Percent = number('6. Marge droite %', null)
  const col6PercentValue = (col1Percent && col6Percent > 0) ? `${col6Percent}vw` : 'auto'


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
      fullHeightContent
      style={{
        '--col1': col1PercentValue,
        '--col2': col2PercentValue,
        '--col3': col3PercentValue,
        '--col4': col4PercentValue,
        '--col5': col5PercentValue,
        '--col6': col6PercentValue,
      }}
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
              statusType='success'
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
                href="#"
                icon={() => <HomeIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Accueil
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="#"
                icon={() => <PeopleIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Contributeurs
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="#"
                icon={() => <TagIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Contreparties
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="#"
                icon={() => <FilterIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Paramètres
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="#"
                icon={() => <FileIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Page Projet
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="#"
                icon={() => <StatsIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Statistiques
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="#"
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
                  href="#"
                  onClick={() => closeSideBar()}
                >
                  Destinataire des fonds
                </DashboardMenu.Item>
                <DashboardMenu.Item
                  href="#"
                  onClick={() => closeSideBar()}
                >
                  Confirmation d'identité
                </DashboardMenu.Item>
                <DashboardMenu.Item
                  href="#"
                  onClick={() => closeSideBar()}
                >
                  Documents justificatifs
                </DashboardMenu.Item>
              </DashboardMenu.Expandable>
              <DashboardMenu.Item
                href="#"
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
                Pourcentage
              </Text>
              <br />
              <Text weight="light" color="background1" size="tiny">
                  {
                    (col1Percent || 0) +
                    (col2Percent || 0) +
                    (col3Percent || 0) +
                    (col4Percent || 0) +
                    (col5Percent || 0) +
                    (col6Percent || 0)
                  } % ont été remplis

              </Text>
              <br />
              <Text weight="light" color="background1" size="tiny">
                  reste {
                    100 - (
                    (col1Percent || 0) +
                    (col2Percent || 0) +
                    (col3Percent || 0) +
                    (col4Percent || 0) +
                    (col5Percent || 0) +
                    (col6Percent || 0))
                  } % à remplir

              </Text>
            </AvatarWithTextAndBadge.Text>
          </AvatarWithTextAndBadge>
        </HelpBox>
      </DashboardLayout.SideFooter>

      <FlowExample />
    </DashboardLayout>
  )
}

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

    {boolean('Montrer l’aide', true) &&
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
    }

    <DashboardLayout.Flow.Nav>
      {boolean('Show 2 buttons', true) &&
        <Button
          modifier="hydrogen"
          variant="orion"
          size="big"
          type="button"
          disabled={boolean('loading', false)}
        >
          Back
        </Button>
      }
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
