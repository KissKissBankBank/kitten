import React from 'react'
import { DashboardMenu } from './index'
import {
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
  Text,
  ButtonWithTooltip,
  COLORS,
  FlexWrapper,
  StatusWithBullet,
  LongArrowIcon,
  pxToRem,
} from 'kitten'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

export default {
  title: 'Navigation/DashboardMenu',
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

const StyledSelectorButton = styled(props => (
  <FlexWrapper as="span" {...props} />
))`
  .selectorButton-supTitle {
    letter-spacing: 0.1em;
    line-height: 1em;
  }
  .selectorButton-title {
    line-height: calc(1em + ${pxToRem(10)});
  }
`

const SelectorButton = ({ supTitle, title, statusProps }) => (
  <StyledSelectorButton gap="0px">
    <Text
      weight="400"
      size="nano"
      transform="uppercase"
      cssColor={COLORS.font3}
      className="selectorButton-supTitle"
    >
      {supTitle}
    </Text>
    <Text
      weight="500"
      size="small"
      cssColor={COLORS.background1}
      className="selectorButton-title"
    >
      {title}
    </Text>
    <StatusWithBullet size="micro" weight="400" {...statusProps} />
  </StyledSelectorButton>
)

export const Default = () => (
  <DashboardMenu>
    <DashboardMenu.List>
      <DashboardMenu.Item href="#" icon={<HomeIconNext color="currentColor" />}>
        Accueil
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="#"
        icon={<UsersIconNext color="currentColor" />}
      >
        Contributions
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="#"
        isActive
        icon={<TagIconNext color="currentColor" />}
      >
        Contreparties
      </DashboardMenu.Item>
      <DashboardMenu.Item href="#" icon={<CogIconNext color="currentColor" />}>
        Paramètres
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="https://www.kisskissbankbank.com"
        icon={<WindowEditIconNext color="currentColor" />}
      >
        Page Projet
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="https://www.kisskissbankbank.com"
        icon={<StatsIconNext color="currentColor" />}
      >
        Statistiques
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="https://www.kisskissbankbank.com"
        icon={<ThumbUpIconNext color="currentColor" />}
      >
        Marketing
      </DashboardMenu.Item>
      <DashboardMenu.Expandable
        title="Admin"
        icon={<CheckedShieldIconNext color="currentColor" />}
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
        icon={<SpeechBubbleIconNext color="currentColor" />}
      >
        Actualités
      </DashboardMenu.Item>
    </DashboardMenu.List>
  </DashboardMenu>
)

export const SimpleMultiMenu = () => (
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
        padding={{ right: pxToRem(15) }}
      >
        <Text
          weight="500"
          size="nano"
          transform="uppercase"
          cssColor={COLORS.font3}
          style={{ letterSpacing: 1 }}
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
              title="Nom de la campagne"
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
        Voir ma page
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
        padding={{ right: pxToRem(15) }}
      >
        <Text
          weight="500"
          size="nano"
          transform="uppercase"
          cssColor={COLORS.font3}
          style={{ letterSpacing: 1 }}
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
      <DashboardMenu.Expandable
        title="Admin"
        size="small"
        icon={<CheckedShieldIconNext color="currentColor" />}
      >
        <DashboardMenu.Item href="#">Destinataire des fonds</DashboardMenu.Item>
        <DashboardMenu.Item href="#">
          Confirmation d'identité
        </DashboardMenu.Item>
        <DashboardMenu.Item href="#">
          Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac
          cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat
          porttitor ligula, eget lacinia odio sem nec elit.
        </DashboardMenu.Item>
      </DashboardMenu.Expandable>
      <DashboardMenu.Item
        size="small"
        href="https://www.kisskissbankbank.com"
        icon={<EyeIconNext color="currentColor" />}
        endIcon={<LongArrowIcon direction="right" color="currentColor" />}
      >
        Voir ma page
      </DashboardMenu.Item>
    </DashboardMenu.List>
  </DashboardMenu>
)
