import React from 'react'
import { storiesOf } from '@storybook/react'
import { HighlightHalo } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="10" style={{ marginLeft: 60 }}>
      {children}
    </Marger>
  </Container>
)

storiesOf('Tour/HighlightHalo', module).add('default', () => {
  return (
    <StoryContainer>
      <HighlightHalo animationDelay={1} animationCycles="infinite" />
    </StoryContainer>
  )
})
