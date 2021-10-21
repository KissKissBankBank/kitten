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
  pxToRem,
} from 'kitten'
import styled from 'styled-components'

const StyledSelectorButton = styled(props => <FlexWrapper as="span" {...props} />)`
  .selectorButton-supTitle {
    letter-spacing: 0.1em;
    line-height: 1em;
  }
  .selectorButton-title {
    line-height: calc(1em + ${pxToRem(10)});
  }
`

const SelectorButton = ({supTitle, title, statusProps}) => (
  <StyledSelectorButton gap="0px">
    <Text
      weight="light"
      size="nano"
      transform="uppercase"
      cssColor={COLORS.font3}
      className="selectorButton-supTitle"
    >
      {supTitle}
    </Text>
    <Text weight="regular" size="tiny" cssColor={COLORS.background1} className="selectorButton-title">
      {title}
    </Text>
    <StatusWithBullet size="micro" weight="light" {...statusProps} />
  </StyledSelectorButton>
)

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
        padding={{right:pxToRem(15)}}
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
            modifier: 'scandium',
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
      data={[
        {
          href: '#',
          onClick: e => {
            e.preventDefault()
            action('Selector link click')(e)
          },
          children: (
            <SelectorButton
              title="Nom de la campagne 1"
              supTitle="Don permanent"
              statusProps={{
                statusType: 'warning',
                children: 'Brouillon',
              }}
            />
          ),
          isActive: false,
          icon: <InfiniteIconNext color={COLORS.background1} />,
        },
        {
          href: '#',
          onClick: e => {
            e.preventDefault()
            action('Selector link click')(e)
          },
          children: (
            <SelectorButton
              title="Nom de la campagne 2"
              supTitle="Campagne"
              statusProps={{
                statusType: 'success',
                children: 'En ligne',
              }}
            />
          ),
          isActive: true,
          icon: <ChronoIconNext color={COLORS.background1} />,
        },
        {
          href: '#',
          onClick: e => {
            e.preventDefault()
            action('Selector link click')(e)
          },
          children: (
            <SelectorButton
              title="Un très très long nom de la campagne 3 qui va dépasser de la largeur du menu allez encore un effort lorem ipsum"
              supTitle="Campagne"
              statusProps={{
                statusType: 'neutral',
                children: 'Prêt à être partagé',
              }}
            />
          ),
          isActive: false,
          icon: <ChronoIconNext color={COLORS.background1} />,
        },
        {
          href: '#',
          onClick: e => {
            e.preventDefault()
            action('Selector link click')(e)
          },
          children: (
            <SelectorButton
              title="Nom de la campagne 4"
              supTitle="Campagne"
              statusProps={{
                statusType: 'none',
                children: 'Terminé',
              }}
            />
          ),
          isActive: false,
          icon: <ChronoIconNext color={COLORS.background1} />,
        },
        {
          href: '#',
          onClick: e => {
            e.preventDefault()
            action('Selector link click')(e)
          },
          children: (
            <SelectorButton
              title="Nom de la campagne 5"
              supTitle="Campagne"
              statusProps={{
                statusType: 'none',
                children: 'Terminé',
              }}
            />
          ),
          isActive: false,
          icon: <ChronoIconNext color={COLORS.background1} />,
        },
        {
          href: '#',
          onClick: e => {
            e.preventDefault()
            action('Selector link click')(e)
          },
          children: (
            <SelectorButton
              title="Nom de la campagne 6"
              supTitle="Campagne"
              statusProps={{
                statusType: 'success',
                children: 'En ligne',
              }}
            />

          ),
          isActive: false,
          icon: <ChronoIconNext color={COLORS.background1} />,
        },
        {
          href: '#',
          onClick: e => {
            e.preventDefault()
            action('Selector link click')(e)
          },
          children: (
            <SelectorButton
              title="Nom de la campagne 7"
              supTitle="Campagne"
              statusProps={{
                statusType: 'success',
                children: 'En ligne',
              }}
            />
          ),
          isActive: false,
          icon: <ChronoIconNext color={COLORS.background1} />,
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
