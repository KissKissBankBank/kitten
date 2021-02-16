import React from 'react'
import { CreditCardForm } from './index'
import { DefaultExample, CustomExample } from './examples'

const StoryContainer = ({ children }) => (
  <div className="story-Container story-Grid">
    <div>{children}</div>
  </div>
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
