import React, { Component } from 'react'
import { HorizontalNav } from 'kitten/components/navigation/horizontal-nav'
import { Row } from 'kitten/components/grid/row'

export const KarlHorizontalNav = props => {
  const horizontalNavItems = [
    { key: 'key1', text: 'Nav link 1', href: '#', selected: true },
    { key: 'key2', text: 'Nav link 2', href: '#' },
    { key: 'key3', text: 'Nav link 3', href: '#' },
    { key: 'key4', text: 'Nav link 4', href: '#' },
  ]

  return <HorizontalNav items={horizontalNavItems} />
}

export const KarlBrowsingHorizontalNav = props => {
  const rowStyles = {
    backgroundColor: '#f6f6f6',
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
