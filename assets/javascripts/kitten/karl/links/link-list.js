import React from 'react'
import { LinkList } from 'kitten/components/links/link-list'

export const KarlLinkList = () => {
  const linkListItems = [
    { key: 'key1', item: 'Litterae', href: '#', title: 'Litterae' },
    { key: 'key2', item: 'Notae', href: '#', title: 'Notae' },
    { key: 'key3', item: 'Bibliographia', href: '#', title: 'Bibliographia' },
    { key: 'key4', item: 'Nexus', href: '#', title: 'Nexus' },
  ]

  return (
    <LinkList
      items={ linkListItems }
    />
  )
}

export const KarlLinkListSelectedItem = () => {
  const linkListSelectedItem = [
    { key: 'key1', item: 'Litterae', href: '#', title: 'Litterae' },
    { key: 'key2', item: 'Notae', href: '#', title: 'Notae' },
    {
      key: 'key3',
      item: 'Bibliographia',
      href: '#',
      title: 'Bibliographia',
      active: true,
    },
    { key: 'key4', item: 'Nexus', href: '#', title: 'Nexus' },
  ]

  return (
    <LinkList
      items={ linkListSelectedItem }
    />
  )
}

export const KarlLinkListDark = () => {
  const linkListItems = [
    { key: 'key1', item: 'Litterae', href: '#', title: 'Litterae' },
    { key: 'key2', item: 'Notae', href: '#', title: 'Notae', active: true },
    { key: 'key3', item: 'Bibliographia', href: '#', title: 'Bibliographia' },
    { key: 'key4', item: 'Nexus', href: '#', title: 'Nexus' },
  ]

  return (
    <LinkList
      style= {{ backgroundColor: '#222' }}
      color="light"
      items={ linkListItems }
    />
  )
}
