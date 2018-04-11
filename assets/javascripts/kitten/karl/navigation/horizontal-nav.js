import React, { Component } from 'react'
import { HorizontalNav } from 'kitten/components/navigation/horizontal-nav'
import { Row } from 'kitten/components/grid/row'
import COLORS from 'kitten/constants/colors-config'

export const KarlHorizontalNav = props => {
  const horizontalNavItems = [
    { key: 'key1', text: 'Nav link 1', href: '#', selected: true },
    { key: 'key2', text: 'Nav link 2', href: '#' },
    { key: 'key3', text: 'Nav link 3', href: '#' },
    { key: 'key4', text: 'Nav link 4', href: '#' },
  ]

  return <HorizontalNav items={horizontalNavItems} />
}

export const KarlTouchHorizontalNav = props => {
  const rowStyles = {
    backgroundColor: COLORS.background3,
  }

  const horizontalNavItems = [
    { key: 'key1', text: 'Projet d’entreprise', href: '#', selected: true },
    { key: 'key2', text: 'Énergies renouvelables', href: '#' },
    { key: 'key3', text: 'Immobilier', href: '#' },
  ]

  return (
    <Row style={rowStyles}>
      <HorizontalNav items={horizontalNavItems} height="96px" center />
    </Row>
  )
}

export const KarlTouchHorizontalNavWithNotification = props => {
  const rowStyles = {
    backgroundColor: COLORS.background3,
  }

  const horizontalNavItems = [
    {
      key: 'key1',
      text: 'Projet d’entreprise',
      href: '#',
      selected: true,
      badge: 3,
    },
    { key: 'key2', text: 'Énergies renouvelables', href: '#', badge: 2 },
    { key: 'key3', text: 'Immobilier', href: '#', badge: 10 },
  ]

  return (
    <Row style={rowStyles}>
      <HorizontalNav items={horizontalNavItems} height="96px" center />
    </Row>
  )
}
