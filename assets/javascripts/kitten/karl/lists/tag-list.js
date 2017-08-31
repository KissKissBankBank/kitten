import React from 'react'
import { TagList } from 'kitten/components/lists/tag-list'

export const KarlTagList = props => {
  const typologyTag = {
    icon: 'TypologyTagIcon',
    items: [
      { key: 'tag1', item: 'Tag 1' },
      { key: 'tag2w2', item: 'Tag 2' },
      { key: 'tag-e2e2', item: 'Tag 3' },
    ],
  }

  const instrumentTag = {
    icon: 'InstrumentTagIcon',
    items: [
      { key: 'tag-4', item: 'Tag 4' },
      { key: 'tag-5', item: 'Tag 5' },
      { key: 'tag-6', item: 'Tag 6' },
    ],
  }

  return (
    <div>
      <TagList tags={ typologyTag } />
      <TagList tags={ instrumentTag } />
    </div>
  )
}
