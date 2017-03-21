import React from 'react'
import { TagList } from 'kitten/components/lists/tag-list'

export const KarlTagList = props => {
  const items = [
    "TPE / PME",
    "Green",
  ]

  return (
    <TagList items={ items } />
  )
}
