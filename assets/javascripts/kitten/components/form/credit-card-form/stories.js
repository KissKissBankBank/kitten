import React, { useState } from 'react'
import { CreditCardForm } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Field } from '../field'
import isEmpty from 'lodash/fp/isEmpty'

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
  const [errors, setErrors] = useState({
    number: false,
    expiry: false,
    cvc: false,
  })

  const handleNumberBlur = e => {
    setErrors({ ...errors, number: isEmpty(e.target.value) })
  }

  const handleExpiryBlur = e => {
    setErrors({ ...errors, expiry: isEmpty(e.target.value) })
  }

  const handleCvcBlur = e => {
    setErrors({ ...errors, cvc: isEmpty(e.target.value) })
  }

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
          input: props => <Field.Input {...props} />,
        }}
        number={{
          label: 'Numéro de carte',
          customComponents: {
            input: props => (
              <Field.Input
                {...props}
                onBlur={handleNumberBlur}
                error={errors.number}
              />
            ),
            error: () => {
              if (!errors.number) return null

              return (
                <Field.ErrorMessage>Le champ est requis.</Field.ErrorMessage>
              )
            },
          },
        }}
        expiry={{
          label: 'Date de validité',
          customComponents: {
            input: props => (
              <Field.Input
                {...props}
                placeholder="MM/AA"
                digits={6}
                onBlur={handleExpiryBlur}
                error={errors.expiry}
              />
            ),
            error: () => {
              if (!errors.expiry) return null

              return (
                <Field.ErrorMessage>Le champ est requis.</Field.ErrorMessage>
              )
            },
          },
        }}
        cvc={{
          label: 'Cryptogramme visuel',
          customComponents: {
            input: props => (
              <Field.Input
                {...props}
                digits={6}
                onBlur={handleCvcBlur}
                error={errors.cvc}
              />
            ),
            error: () => {
              if (!errors.cvc) return null

              return (
                <Field.ErrorMessage>Le champ est requis.</Field.ErrorMessage>
              )
            },
          },
        }}
        onChange={values => console.warn(values)}
      />
    </StoryContainer>
  )
}
