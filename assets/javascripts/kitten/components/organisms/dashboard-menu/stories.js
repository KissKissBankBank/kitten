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
  FlexWrapper
} from 'kitten'
import { DocsPage } from 'storybook/docs-page'

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
      <DashboardMenu.Item href="#" icon={() => <HomeIcon color="currentColor" />}>
        Accueil
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="#"
        icon={() => <PeopleIcon color="currentColor" />}
      >
        Contributeurs
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="#"
        isActive
        icon={() => <TagIcon color="currentColor" />}
      >
        Contreparties
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="#"
        icon={() => <FilterIcon color="currentColor" />}
      >
        Paramètres
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="https://www.kisskissbankbank.com"
        icon={() => <FileIcon color="currentColor" />}
      >
        Page Projet
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="https://www.kisskissbankbank.com"
        icon={() => <StatsIcon color="currentColor" />}
      >
        Statistiques
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="https://www.kisskissbankbank.com"
        icon={() => <LoudspeakerIcon color="currentColor" />}
      >
        Marketing
      </DashboardMenu.Item>
      <DashboardMenu.Expandable
        title="Admin"
        icon={() => <ShieldIcon color="currentColor" />}
      >
        <DashboardMenu.Item href="#">Destinataire des fonds</DashboardMenu.Item>
        <DashboardMenu.Item href="#" isActive>
          Confirmation d'identité
        </DashboardMenu.Item>
        <DashboardMenu.Item href="#">Documents justificatifs</DashboardMenu.Item>
      </DashboardMenu.Expandable>
      <DashboardMenu.Item
        href="https://www.kisskissbankbank.com"
        icon={() => <SpeechBubbleIcon color="currentColor" />}
      >
        Actualités
      </DashboardMenu.Item>
    </DashboardMenu.List>
  </DashboardMenu>
)


export const MultiMenu = () => (
  <DashboardMenu>
    <DashboardMenu.List>
      <DashboardMenu.Item href="#" icon={() => <HomeIcon color="currentColor" />}>
        Accueil
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="#"
        icon={() => <PeopleIcon color="currentColor" />}
      >
        Contributeurs
      </DashboardMenu.Item>
    </DashboardMenu.List>
    <DashboardMenu.Separator>
      <FlexWrapper className="k-u-flex-alignItems-center k-u-flex-justifyContent-sb" direction="row">
        <Text weight="regular" size="nano" transform="uppercase" cssColor={COLORS.font3}>
          Projets
        </Text>
        <ButtonWithTooltip
          buttonProps={{
            fit:'icon',
            size:'nano',
            modifier:'boron',
          }}
          tooltipProps={{
            className: 'k-u-avoid-click'
          }}
          tooltipText="Créer un nouveau projet"
        >
          +
        </ButtonWithTooltip>
      </FlexWrapper>
    </DashboardMenu.Separator>
    <DashboardMenu.Selector />
    <DashboardMenu.List>
      <DashboardMenu.Item
        href="#"
        isActive
        icon={() => <TagIcon color="currentColor" />}
        subItem
      >
        Contreparties
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="#"
        icon={() => <FilterIcon color="currentColor" />}
        subItem
      >
        Paramètres
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="https://www.kisskissbankbank.com"
        icon={() => <FileIcon color="currentColor" />}
        subItem
      >
        Page Projet
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="https://www.kisskissbankbank.com"
        icon={() => <StatsIcon color="currentColor" />}
        subItem
      >
        Statistiques
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="https://www.kisskissbankbank.com"
        icon={() => <LoudspeakerIcon color="currentColor" />}
        subItem
      >
        Marketing
      </DashboardMenu.Item>
      <DashboardMenu.Item
        href="https://www.kisskissbankbank.com"
        icon={() => <SpeechBubbleIcon color="currentColor" />}
        subItem
      >
        Actualités
      </DashboardMenu.Item>
    </DashboardMenu.List>
  </DashboardMenu>
)
