import React from 'react'
import { SearchInput } from './index'

export default {
  title: 'Search/SearchInput',
  component: SearchInput,
  decorators: [
    Story => (
      <div className="story-Container">
        <Story />
      </div>
    ),
  ],
}

export const Default = () => {
  return <SearchInput placeholder="Recherchez un projet, un porteur…" />
}
