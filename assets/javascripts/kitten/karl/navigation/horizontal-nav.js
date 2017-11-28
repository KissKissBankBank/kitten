import React, { Component } from 'react'
import { HorizontalNav } from 'kitten/components/navigation/horizontal-nav'

export const KarlHorizontalNav = props => {
  const horizontalNavItems = [
    { text: 'Nav link 1', href: '#', selected: true },
    { text: 'Nav link 2', href: '#' },
    { text: 'Nav link 3', href: '#' },
    { text: 'Nav link 4', href: '#' },
  ]

  return (
    <HorizontalNav items= { horizontalNavItems } />
  )
}
