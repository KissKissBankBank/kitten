import React, { Component } from 'react'
import { HorizontalNav } from 'kitten/components/navigation/horizontal-nav'
import { Row } from 'kitten/components/grid/row'

export const KarlHorizontalNav = props => {
  const horizontalNavItems = [
    { text: 'Nav link 1', href: '#', selected: true },
    { text: 'Nav link 2', href: '#' },
    { text: 'Nav link 3', href: '#' },
    { text: 'Nav link 4', href: '#' },
  ]

  return (
    <HorizontalNav items={ horizontalNavItems } />
  )
}

export const KarlHorizontalNavBrowsing = props => {
  const rowStyles = {
    backgroundColor: '#f6f6f6',
    borderTop: '1px solid #eee',
  }

  const horizontalNavItems = [
    { text: 'Projet d’entreprise', href: '#', selected: true },
    { text: 'Énergies renouvelables', href: '#' },
    { text: 'Immobilier', href: '#' },
  ]

  return (
    <Row style={ rowStyles }>
      <HorizontalNav
        items={ horizontalNavItems }
        height="96px"
        center
      />
    </Row>
  )
}
