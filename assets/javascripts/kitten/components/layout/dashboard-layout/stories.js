import React from 'react'
import styled from 'styled-components'

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
} from '../../..'

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

  > div {
    align-self: initial;
  }
`

export default {
  title: 'Layout/DashboardLayout',
  component: DashboardLayout,
}

export const Default = () => (
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
  >
    <DashboardLayout.Header>
      <AvatarWithTextAndBadge>
        <AvatarWithTextAndBadge.Image
          src="/kitten.jpg"
          alt=""
          width={pxToRem(60)}
          height={pxToRem(60)}
        />

        <AvatarWithTextAndBadge.Text withEllipsisOverflow={true}>
          <Text lineHeight="normal" weight="regular" color="background1">
            T-shirts brodés Free Boobs Club
          </Text>
          <br />
          <Text
            lineHeight="normal"
            weight="light"
            size="nano"
            color="background1"
          >
            <StatusWithBullet as="span" />
            Prêt a être partagé avec mon coach
          </Text>
        </AvatarWithTextAndBadge.Text>
      </AvatarWithTextAndBadge>
    </DashboardLayout.Header>
    <DashboardLayout.SideContent>
      <ul className="k-u-margin-none">
        <li className="k-u-color-background1">Lien 1</li>
        <li className="k-u-color-background1">Lien 2</li>
        <li className="k-u-color-background1">Lien 3</li>
        <li className="k-u-color-background1">Lien 4</li>
      </ul>
    </DashboardLayout.SideContent>
    <DashboardLayout.SideFooter>
      <HelpBox>
        <AvatarWithTextAndBadge>
          <AvatarWithTextAndBadge.Image src="/kitten.jpg" alt="" />

          <AvatarWithTextAndBadge.Text>
            <Text
              lineHeight="normal"
              weight="bold"
              color="background1"
              size="tiny"
            >
              Besoin d’aide ?
            </Text>
            <br />
            <Text
              lineHeight="normal"
              weight="bold"
              color="primary1"
              size="tiny"
            >
              Contacter votre coach
            </Text>
          </AvatarWithTextAndBadge.Text>
        </AvatarWithTextAndBadge>
      </HelpBox>
    </DashboardLayout.SideFooter>

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
  </DashboardLayout>
)
