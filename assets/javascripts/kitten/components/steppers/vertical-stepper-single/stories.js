import React from 'react'
import { VerticalStepper } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Text } from '../../typography/text'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

export default {
  title: 'Steppers/VerticalStepperSingle',
  component: VerticalStepperSingle,
}

export const Default = () => {
  return (
    <StoryContainer>
      <VerticalStepperSingle>

      </VerticalStepperSingle>
    </StoryContainer>
  )
}
