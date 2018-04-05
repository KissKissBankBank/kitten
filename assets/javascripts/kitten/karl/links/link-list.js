import React from 'react'
import { LinkList } from 'kitten/components/links/link-list'

export const KarlLinkList = () => {
  const linkListItems = [
    { key: 'key1', item: 'Litterae', href: '#' },
    { key: 'key2', item: 'Notae', href: '#' },
    { key: 'key3', item: 'Bibliographia', href: '#' },
    { key: 'key4', item: 'Nexus', href: '#' },
  ]

  return <LinkList items={linkListItems} />
}

export const KarlLinkListSelectedItem = () => {
  const linkListSelectedItem = [
    { key: 'key1', item: 'Litterae', href: '#' },
    { key: 'key2', item: 'Notae', href: '#' },
    { key: 'key3', item: 'Bibliographia', href: '#', active: true },
    { key: 'key4', item: 'Nexus', href: '#' },
  ]

  return <LinkList items={linkListSelectedItem} />
}

export const KarlLinkListDark = () => {
  const linkListItems = [
    { key: 'key1', item: 'Litterae', href: '#' },
    { key: 'key2', item: 'Notae', href: '#', active: true },
    { key: 'key3', item: 'Bibliographia', href: '#' },
    { key: 'key4', item: 'Nexus', href: '#' },
  ]

  return (
    <LinkList
      style={{ backgroundColor: '#222' }}
      color="light"
      items={linkListItems}
    />
  )
}
