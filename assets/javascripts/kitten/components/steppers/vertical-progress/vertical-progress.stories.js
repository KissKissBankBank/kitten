import React from 'react'
import { VerticalProgress } from './index'
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
  title: 'Steppers/VerticalLoader',
  component: VerticalLoader,
}

export const Default = () => {
  return (
    <StoryContainer>
      <VerticalProgress/>
        
    </StoryContainer>
  )
}
