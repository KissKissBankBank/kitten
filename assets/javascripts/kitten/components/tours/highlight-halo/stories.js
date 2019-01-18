import React from 'react'
import { storiesOf } from '@storybook/react'
import { HighlightHalo } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="10">{children}</Marger>
  </Container>
)

storiesOf('Tour/HighlightHalo', module).add('default', () => {
  return (
    <StoryContainer>
      <HighlightHalo />
    </StoryContainer>
  )
})
