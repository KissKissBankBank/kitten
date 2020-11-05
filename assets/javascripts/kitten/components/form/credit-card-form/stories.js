import React from 'react'
import { CreditCardForm } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Field } from '../field'

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
      <CreditCardForm />
    </StoryContainer>
  )
}

export const withCustomComponents = () => {
  return (
    <StoryContainer>
      <CreditCardForm
        customComponents={{
          field: props => (
            <div {...props} className="k-u-margin-bottom-triple" />
          ),
          label: ({ children, ...props }) => (
            <Field.Label labelProps={props} children={children} />
          ),
          input: Field.Input,
        }}
      />
    </StoryContainer>
  )
}
