import React from 'react'
import { SearchInput } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../layout/container'
import { DocsPage } from 'storybook/docs-page'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

export default {
  title: 'Molecules/SearchInput',
  component: SearchInput,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="SearchInput" />,
    },
  },
}

export const Default = () => {
  return (
    <StoryContainer>
      <SearchInput placeholder="Recherchez un projet, un porteur…" />
    </StoryContainer>
  )
}
