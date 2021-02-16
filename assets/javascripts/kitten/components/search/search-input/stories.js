import React from 'react'
import { SearchInput } from './index'

const StoryContainer = ({ children }) => (
  <div className="story-Container">{children}</div>
)

export default {
  title: 'Search/SearchInput',
  component: SearchInput,
}

export const Default = () => {
  return (
    <StoryContainer>
      <SearchInput placeholder="Recherchez un projet, un porteur…" />
    </StoryContainer>
  )
}
