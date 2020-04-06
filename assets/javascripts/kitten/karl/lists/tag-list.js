import React from 'react'
import { TagList } from '../../components/lists/tag-list'
import { TypologyTagIcon } from '../../components/icons/typology-tag-icon'
import { InstrumentTagIcon } from '../../components/icons/instrument-tag-icon'

export const KarlTagList = () => {
  const typologyItems = [
    { key: 'tag-1', item: 'Tag 1' },
    { key: 'tag-2', item: 'Tag 2' },
    { key: 'tag-3', item: 'Tag 3' },
  ]

  const instrumentItems = [
    { key: 'tag-4', item: 'Tag 4' },
    { key: 'tag-5', item: 'Tag 5' },
    { key: 'tag-6', item: 'Tag 6' },
  ]

  return (
    <div>
      <TagList items={typologyItems} />
      <TagList icon={TypologyTagIcon} items={typologyItems} />
      <TagList icon={InstrumentTagIcon} items={instrumentItems} />
    </div>
  )
}
