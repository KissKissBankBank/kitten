import React from 'react'
import {
  DashboardMenu,
  CheckedShieldIconNext,
  ChronoIconNext,
  CogIconNext,
  EyeIconNext,
  HomeIconNext,
  InfiniteIconNext,
  PlusIconNext,
  SpeechBubbleIconNext,
  StatsIconNext,
  TagIconNext,
  ThumbUpIconNext,
  UsersIconNext,
  WindowEditIconNext,
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
        icon={() => <HomeIconNext color="currentColor" />}
        onClick={() => closeSideBar()}
      >
        Accueil
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="#"
        icon={() => <UsersIconNext color="currentColor" />}
        onClick={() => closeSideBar()}
      >
        Contributions
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="#"
        icon={() => <TagIconNext color="currentColor" />}
        onClick={() => closeSideBar()}
      >
        Contreparties
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="#"
        icon={() => <CogIconNext color="currentColor" />}
        onClick={() => closeSideBar()}
      >
        Paramètres
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="#"
        icon={() => <WindowEditIconNext color="currentColor" />}
        onClick={() => closeSideBar()}
      >
        Page Projet
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="#"
        icon={() => <StatsIconNext color="currentColor" />}
        onClick={() => closeSideBar()}
      >
        Statistiques
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="#"
        icon={() => <ThumbUpIconNext color="currentColor" />}
        onClick={() => closeSideBar()}
      >
        Marketing
      </DashboardMenu.Item>
      <DashboardMenu.Expandable
        title="Admin"
        icon={() => <CheckedShieldIconNext color="currentColor" />}
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
        icon={() => <SpeechBubbleIconNext color="currentColor" />}
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
        icon={<CogIconNext color="currentColor" />}
      >
        Paramètres et membres
      </DashboardMenu.Item>
      <DashboardMenu.Item
        size="small"
        href="#"
        icon={<CheckedShieldIconNext color="currentColor" />}
      >
        Admin
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
            style: { zIndex: 3 },
          }}
          tooltipText="Créer un nouveau projet"
        >
          <PlusIconNext color="currentColor" />
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
              <Text weight="regular" size="tiny" cssColor={COLORS.background1}>
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
          icon: <InfiniteIconNext color="currentColor" />,
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
              <Text weight="regular" size="tiny" cssColor={COLORS.background1}>
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
          icon: <ChronoIconNext color="currentColor" />,
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
              <Text weight="regular" size="tiny" cssColor={COLORS.background1}>
                Un très long nom de la campagne 3
              </Text>
              <StatusWithBullet statusType="none" size="micro" weight="light">
                Terminé
              </StatusWithBullet>
            </FlexWrapper>
          ),
          isActive: false,
          icon: <ChronoIconNext color="currentColor" />,
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
              <Text weight="regular" size="tiny" cssColor={COLORS.background1}>
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
          icon: <ChronoIconNext color="currentColor" />,
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
              <Text weight="regular" size="tiny" cssColor={COLORS.background1}>
                Nom de la campagne 5
              </Text>
              <StatusWithBullet statusType="none" size="micro" weight="light">
                Terminé
              </StatusWithBullet>
            </FlexWrapper>
          ),
          isActive: false,
          icon: <ChronoIconNext color="currentColor" />,
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
              <Text weight="regular" size="tiny" cssColor={COLORS.background1}>
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
          icon: <ChronoIconNext color="currentColor" />,
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
              <Text weight="regular" size="tiny" cssColor={COLORS.background1}>
                Nom de la campagne 7
              </Text>
              <StatusWithBullet statusType="none" size="micro" weight="light">
                Terminé
              </StatusWithBullet>
            </FlexWrapper>
          ),
          isActive: false,
          icon: <ChronoIconNext color="currentColor" />,
        },
      ]}
    />
    <DashboardMenu.List subList hideable>
      <DashboardMenu.Item
        size="small"
        href="#"
        icon={<HomeIconNext color="currentColor" />}
      >
        Accueil
      </DashboardMenu.Item>
      <DashboardMenu.Item
        size="small"
        href="#"
        icon={<UsersIconNext color="currentColor" />}
      >
        Contributions
      </DashboardMenu.Item>
      <DashboardMenu.Item
        size="small"
        href="#"
        isActive
        icon={<TagIconNext color="currentColor" />}
      >
        Contreparties
      </DashboardMenu.Item>
      <DashboardMenu.Item
        size="small"
        href="#"
        icon={<CogIconNext color="currentColor" />}
      >
        Paramètres
      </DashboardMenu.Item>
      <DashboardMenu.Item
        size="small"
        href="https://www.kisskissbankbank.com"
        icon={<WindowEditIconNext color="currentColor" />}
      >
        Page Projet
      </DashboardMenu.Item>
      <DashboardMenu.Item
        size="small"
        href="https://www.kisskissbankbank.com"
        icon={<StatsIconNext color="currentColor" />}
      >
        Statistiques
      </DashboardMenu.Item>
      <DashboardMenu.Item
        size="small"
        href="https://www.kisskissbankbank.com"
        icon={<ThumbUpIconNext color="currentColor" />}
      >
        Marketing
      </DashboardMenu.Item>
      <DashboardMenu.Item
        size="small"
        href="https://www.kisskissbankbank.com"
        icon={<SpeechBubbleIconNext color="currentColor" />}
      >
        Actualités
      </DashboardMenu.Item>
      <DashboardMenu.Item
        size="small"
        href="https://www.kisskissbankbank.com"
        icon={<CheckedShieldIconNext color="currentColor" />}
      >
        Admin
      </DashboardMenu.Item>
      <DashboardMenu.Item
        size="small"
        href="https://www.kisskissbankbank.com"
        icon={<EyeIconNext color="currentColor" />}
        endIcon={<LongArrowIcon direction="right" color="currentColor" />}
      >
        Voir ma page projet
      </DashboardMenu.Item>
    </DashboardMenu.List>
  </DashboardMenu>
)
