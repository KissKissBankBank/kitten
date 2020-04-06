import React from 'react'
import { TagButton } from '../../components/buttons/tag-button'
import { ScrollableContainer } from '../../components/grid/scrollable-container'

const items = [
  { key: '1', children: 'Example 1', href: '#example-1' },
  { key: '2', children: 'Example 2', href: '#example-2' },
  { key: '3', children: 'Example 3', href: '#example-3', selected: true },
  { key: '4', children: 'Example 4', href: '#example-4' },
  { key: '5', children: 'Example 5', href: '#example-5' },
]

export const KarlScrollableContainer = () => {
  return (
    <ScrollableContainer>
      <nav>
        <ul style={styles.list}>
          {items.map(item => (
            <li key={item.key} style={styles.item}>
              <TagButton {...item} modifier="carbon" style={styles.item} />
            </li>
          ))}
        </ul>
      </nav>
    </ScrollableContainer>
  )
}

const styles = {
  list: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: '0 20px',
  },

  item: {
    flex: '0 0 auto',
  },
}
