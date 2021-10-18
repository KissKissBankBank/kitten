import React from 'react'
import { DashboardMenu } from './index'
import {
  HomeIcon,
  TagIcon,
  FilterIcon,
  FileIcon,
  LoudspeakerIcon,
  ShieldIcon,
  PeopleIcon,
  StatsIcon,
  SpeechBubbleIcon,
  Text,
  ButtonWithTooltip,
  COLORS,
  FlexWrapper,
  StatusWithBullet,
  LongArrowIcon,
} from 'kitten'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Organisms/DashboardMenu',
  component: DashboardMenu,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="DashboardMenu" />
      ),
    },
  },
  decorators: [
    story => (
      <div className="has-overrides dark-background story-Container story-Grid story-Grid--large">
        <div className="k-u-margin-vertical-triple">{story()}</div>
      </div>
    ),
  ],
}

export const Default = () => (
  <DashboardMenu>
    <DashboardMenu.List>
      <DashboardMenu.Item href="#" icon={<HomeIcon color="currentColor" />}>
        Accueil
      </DashboardMenu.Item>
      <DashboardMenu.Item href="#" icon={<PeopleIcon color="currentColor" />}>
        Contributeurs
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="#"
        isActive
        icon={<TagIcon color="currentColor" />}
      >
        Contreparties
      </DashboardMenu.Item>
      <DashboardMenu.Item href="#" icon={<FilterIcon color="currentColor" />}>
        Paramètres
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="https://www.kisskissbankbank.com"
        icon={<FileIcon color="currentColor" />}
      >
        Page Projet
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="https://www.kisskissbankbank.com"
        icon={<StatsIcon color="currentColor" />}
      >
        Statistiques
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="https://www.kisskissbankbank.com"
        icon={<LoudspeakerIcon color="currentColor" />}
      >
        Marketing
      </DashboardMenu.Item>
      <DashboardMenu.Expandable
        title="Admin"
        icon={<ShieldIcon color="currentColor" />}
      >
        <DashboardMenu.Item href="#">Destinataire des fonds</DashboardMenu.Item>
        <DashboardMenu.Item href="#" isActive>
          Confirmation d'identité
        </DashboardMenu.Item>
        <DashboardMenu.Item href="#">
          Documents justificatifs
        </DashboardMenu.Item>
      </DashboardMenu.Expandable>
      <DashboardMenu.Item
        href="https://www.kisskissbankbank.com"
        icon={<SpeechBubbleIcon color="currentColor" />}
      >
        Actualités
      </DashboardMenu.Item>
    </DashboardMenu.List>
  </DashboardMenu>
)

export const MultiMenu = () => (
  <DashboardMenu>
    <DashboardMenu.List>
      <DashboardMenu.Item
        size="small"
        href="#"
        icon={<HomeIcon color="currentColor" />}
      >
        Accueil
      </DashboardMenu.Item>
      <DashboardMenu.Item
        size="small"
        href="#"
        icon={<PeopleIcon color="currentColor" />}
      >
        Contributeurs
      </DashboardMenu.Item>
    </DashboardMenu.List>
    <DashboardMenu.Separator>
      <FlexWrapper
        className="k-u-flex-alignItems-center k-u-flex-justifyContent-sb"
        direction="row"
      >
        <Text
          weight="regular"
          size="nano"
          transform="uppercase"
          cssColor={COLORS.font3}
        >
          Projets
        </Text>
        <ButtonWithTooltip
          buttonProps={{
            fit: 'icon',
            size: 'nano',
            modifier: 'boron',
          }}
          tooltipProps={{
            className: 'k-u-avoid-click',
          }}
          tooltipText="Créer un nouveau projet"
        >
          +
        </ButtonWithTooltip>
      </FlexWrapper>
    </DashboardMenu.Separator>
    <DashboardMenu.Selector
      className="k-u-margin-bottom-singleHalf"
      data={[
        {
          href: '#',
          onClick: e => {
            e.preventDefault()
            action('Selector link click')(e)
          },
          children: (
            <FlexWrapper as="span" gap="0px">
              <Text
                weight="regular"
                size="nano"
                transform="uppercase"
                cssColor={COLORS.font3}
                lineHeight="1"
              >
                Campagne
              </Text>
              <Text
                weight="regular"
                size="tiny"
                cssColor={COLORS.background1}
              >
                Nom de la campagne
              </Text>
              <StatusWithBullet
                statusType="success"
                size="micro"
                weight="light"
              >
                En ligne
              </StatusWithBullet>
            </FlexWrapper>
          ),
          isActive: true,
          icon: <LoudspeakerIcon color="currentColor" />,
        },
      ]}
    />
    <DashboardMenu.Separator />
    <DashboardMenu.Selector
      className="k-u-margin-bottom-singleHalf"
      data={[
        {
          href: '#',
          onClick: e => {
            e.preventDefault()
            action('Selector link click')(e)
          },
          children: (
            <FlexWrapper as="span" gap="0px">
              <Text
                weight="regular"
                size="nano"
                transform="uppercase"
                cssColor={COLORS.font3}
                lineHeight="1"
              >
                Don permanent
              </Text>
              <Text
                weight="regular"
                size="tiny"
                cssColor={COLORS.background1}
              >
                Nom de la campagne 1
              </Text>
              <StatusWithBullet
                statusType="success"
                size="micro"
                weight="light"
              >
                En ligne
              </StatusWithBullet>
            </FlexWrapper>
          ),
          isActive: false,
          icon: <LoudspeakerIcon color="currentColor" />,
        },
        {
          href: '#',
          onClick: e => {
            e.preventDefault()
            action('Selector link click')(e)
          },
          children: (
            <FlexWrapper as="span" gap="0px">
              <Text
                weight="regular"
                size="nano"
                transform="uppercase"
                cssColor={COLORS.font3}
                lineHeight="1"
              >
                Campagne
              </Text>
              <Text
                weight="regular"
                size="tiny"
                cssColor={COLORS.background1}
              >
                Nom de la campagne 2
              </Text>
              <StatusWithBullet
                statusType="success"
                size="micro"
                weight="light"
              >
                En ligne
              </StatusWithBullet>
            </FlexWrapper>
          ),
          isActive: true,
          icon: <LoudspeakerIcon color="currentColor" />,
        },
        {
          href: '#',
          onClick: e => {
            e.preventDefault()
            action('Selector link click')(e)
          },
          children: (
            <FlexWrapper as="span" gap="0px">
              <Text
                weight="regular"
                size="nano"
                transform="uppercase"
                cssColor={COLORS.font3}
                lineHeight="1"
              >
                Campagne
              </Text>
              <Text
                weight="regular"
                size="tiny"
                cssColor={COLORS.background1}
              >
                Un très très long nom de la campagne 3
              </Text>
              <StatusWithBullet statusType="none" size="micro" weight="light">
                Terminé
              </StatusWithBullet>
            </FlexWrapper>
          ),
          isActive: false,
          icon: <LoudspeakerIcon color="currentColor" />,
        },
        {
          href: '#',
          onClick: e => {
            e.preventDefault()
            action('Selector link click')(e)
          },
          children: (
            <FlexWrapper as="span" gap="0px">
              <Text
                weight="regular"
                size="nano"
                transform="uppercase"
                cssColor={COLORS.font3}
                lineHeight="1"
              >
                Campagne
              </Text>
              <Text
                weight="regular"
                size="tiny"
                cssColor={COLORS.background1}
              >
                Nom de la campagne 4
              </Text>
              <StatusWithBullet
                statusType="success"
                size="micro"
                weight="light"
              >
                En ligne
              </StatusWithBullet>
            </FlexWrapper>
          ),
          isActive: false,
          icon: <LoudspeakerIcon color="currentColor" />,
        },
        {
          href: '#',
          onClick: e => {
            e.preventDefault()
            action('Selector link click')(e)
          },
          children: (
            <FlexWrapper as="span" gap="0px">
              <Text
                weight="regular"
                size="nano"
                transform="uppercase"
                cssColor={COLORS.font3}
                lineHeight="1"
              >
                Campagne
              </Text>
              <Text
                weight="regular"
                size="tiny"
                cssColor={COLORS.background1}
              >
                Nom de la campagne 5
              </Text>
              <StatusWithBullet statusType="none" size="micro" weight="light">
                Terminé
              </StatusWithBullet>
            </FlexWrapper>
          ),
          isActive: false,
          icon: <LoudspeakerIcon color="currentColor" />,
        },
        {
          href: '#',
          onClick: e => {
            e.preventDefault()
            action('Selector link click')(e)
          },
          children: (
            <FlexWrapper as="span" gap="0px">
              <Text
                weight="regular"
                size="nano"
                transform="uppercase"
                cssColor={COLORS.font3}
                lineHeight="1"
              >
                Campagne
              </Text>
              <Text
                weight="regular"
                size="tiny"
                cssColor={COLORS.background1}
              >
                Nom de la campagne 6
              </Text>
              <StatusWithBullet
                statusType="success"
                size="micro"
                weight="light"
              >
                En ligne
              </StatusWithBullet>
            </FlexWrapper>
          ),
          isActive: false,
          icon: <LoudspeakerIcon color="currentColor" />,
        },
        {
          href: '#',
          onClick: e => {
            e.preventDefault()
            action('Selector link click')(e)
          },
          children: (
            <FlexWrapper as="span" gap="0px">
              <Text
                weight="regular"
                size="nano"
                transform="uppercase"
                cssColor={COLORS.font3}
                lineHeight="1"
              >
                Campagne
              </Text>
              <Text
                weight="regular"
                size="tiny"
                cssColor={COLORS.background1}
              >
                Nom de la campagne 7
              </Text>
              <StatusWithBullet statusType="none" size="micro" weight="light">
                Terminé
              </StatusWithBullet>
            </FlexWrapper>
          ),
          isActive: false,
          icon: <LoudspeakerIcon color="currentColor" />,
        },
      ]}
    />
    <DashboardMenu.List subList hideable>
      <DashboardMenu.Item
        size="small"
        href="#"
        isActive
        icon={<TagIcon color="currentColor" />}
      >
        Contreparties
      </DashboardMenu.Item>
      <DashboardMenu.Item
        size="small"
        href="#"
        icon={<FilterIcon color="currentColor" />}
      >
        Paramètres
      </DashboardMenu.Item>
      <DashboardMenu.Item
        size="small"
        href="https://www.kisskissbankbank.com"
        icon={<FileIcon color="currentColor" />}
      >
        Page Projet
      </DashboardMenu.Item>
      <DashboardMenu.Item
        size="small"
        href="https://www.kisskissbankbank.com"
        icon={<StatsIcon color="currentColor" />}
      >
        Statistiques
      </DashboardMenu.Item>
      <DashboardMenu.Item
        size="small"
        href="https://www.kisskissbankbank.com"
        icon={<LoudspeakerIcon color="currentColor" />}
      >
        Marketing
      </DashboardMenu.Item>
      <DashboardMenu.Item
        size="small"
        href="https://www.kisskissbankbank.com"
        icon={<SpeechBubbleIcon color="currentColor" />}
      >
        Actualités
      </DashboardMenu.Item>
      <DashboardMenu.Item
        size="small"
        href="https://www.kisskissbankbank.com"
        icon={<SpeechBubbleIcon color="currentColor" />}
        endIcon={<LongArrowIcon direction="right" color="currentColor" />}
      >
        Voir ma page projet
      </DashboardMenu.Item>
    </DashboardMenu.List>
  </DashboardMenu>
)
