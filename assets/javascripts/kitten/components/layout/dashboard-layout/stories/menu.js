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
} from 'kitten'

export const StoryMenu = ({ closeSideBar }) => (
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
  </DashboardMenu>
)
