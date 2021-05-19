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
  title: 'Steppers/VerticalProgress',
  component: VerticalProgress,
}

export const Default = () => {
  return (
    <StoryContainer>
      <VerticalProgress>
        <VerticalProgress.Step actions></VerticalProgress.Step>
        <VerticalProgress.Title actions>Brouillon</VerticalProgress.Title>
      </VerticalProgress>
    </StoryContainer>
  )
}
