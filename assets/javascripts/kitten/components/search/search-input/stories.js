import React from 'react'
import { storiesOf } from '@storybook/react'
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

storiesOf('Search/SearchInput', module).add('default', () => {
  return (
    <StoryContainer>
      <SearchInput placeholder="Recherchez un projet, un porteur…" />
    </StoryContainer>
  )
})
