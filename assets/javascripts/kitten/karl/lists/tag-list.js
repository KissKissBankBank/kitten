import React from 'react'
import { TagList } from 'kitten/components/lists/tag-list'

export const KarlTagList = props => {
  const items = [
    { key: 'tag-1', item: 'Tag 1' },
    { key: 'tag-2', item: 'Tag 2' },
    { key: 'tag-3', item: 'Tag 3' },
  ]

  return (
    <TagList items={ items } />
  )
}
