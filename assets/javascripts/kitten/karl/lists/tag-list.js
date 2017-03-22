import React from 'react'
import { TagList } from 'kitten/components/lists/tag-list'

export const KarlTagList = props => {
  const items = [
    "Tag 1",
    "Tag 2",
    "Tag 3",
  ]

  return (
    <TagList items={ items } />
  )
}
