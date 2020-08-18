import React from 'react'
import { SearchInput } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
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
