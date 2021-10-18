import React from 'react'
import {
  DashboardMenu,
  SpeechBubbleIcon,
  HomeIcon,
  PeopleIcon,
  TagIcon,
  FilterIcon,
  FileIcon,
  StatsIcon,
  LoudspeakerIcon,
  ShieldIcon,
  COLORS,
  FlexWrapper,
  StatusWithBullet,
  ButtonWithTooltip,
  Text,
  LongArrowIcon,
} from 'kitten'

export const StoryMenu = ({ closeSideBar }) => (
  <DashboardMenu>
    <DashboardMenu.List>
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
        <DashboardMenu.Item href="#" onClick={() => closeSideBar()}>
          Destinataire des fonds
        </DashboardMenu.Item>
        <DashboardMenu.Item href="#" onClick={() => closeSideBar()}>
          Confirmation d'identité
        </DashboardMenu.Item>
        <DashboardMenu.Item href="#" onClick={() => closeSideBar()}>
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
    </DashboardMenu.List>
  </DashboardMenu>
)


export const StoryMultiMenu = () => (
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
          position="left"
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
            action('selectorClick')
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
            action('selectorClick')
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
            action('selectorClick')
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
                Un très long nom de la campagne 3
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
            action('selectorClick')
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
            action('selectorClick')
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
            action('selectorClick')
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
            action('selectorClick')
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
