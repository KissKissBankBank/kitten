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
} from '../../..'

export default {
  title: 'Menus/DashboardMenu',
  component: DashboardMenu,
}

export const Default = () => (
  <DashboardMenu>
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
  </DashboardMenu>
)
