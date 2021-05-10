import React from 'react'
import { CreditCardForm } from './index'
import { Marger } from '../../structure/marger'
import { Container } from '../../structure/container'
import { DefaultExample, CustomExample } from './examples'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

export default {
  title: 'Form/CreditCardForm',
  component: CreditCardForm,
}

export const Default = () => {
  return (
    <StoryContainer>
      <DefaultExample />
    </StoryContainer>
  )
}

export const withCustomComponents = () => {
  return (
    <StoryContainer>
      <CustomExample />
    </StoryContainer>
  )
}
