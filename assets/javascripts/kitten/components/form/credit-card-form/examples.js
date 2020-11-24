import React, { useState } from 'react'
import { CreditCardForm } from './index'
import { Field } from '../field'
import isEmpty from 'lodash/fp/isEmpty'

export const DefaultExample = () => {
  return (
    <CreditCardForm>
      <CreditCardForm.Number />
      <CreditCardForm.Expiry />
      <CreditCardForm.Cvc />
    </CreditCardForm>
  )
}

export const CustomExample = () => {
  const handleChange = values => {
    console.warn('Values:', values)
  }

  return (
    <CreditCardForm onChange={handleChange}>
      <Number />
      <Expiry />
      <Cvc />
    </CreditCardForm>
  )
}

const Number = () => {
  const [error, setError] = useState(false)

  const handleBlur = e => {
    setError(isEmpty(e.target.value))
  }

  return (
    <CreditCardForm.Number
      label="Numéro de carte"
      fieldComponent={props => (
        <div {...props} className="k-u-margin-bottom-triple" />
      )}
      labelComponent={({ children, ...props }) => (
        <Field.Label labelProps={props} children={children} />
      )}
      inputComponent={props => (
        <Field.Input {...props} error={error} onBlur={handleBlur} />
      )}
      errorComponent={() => {
        if (!error) return null

        return <Field.ErrorMessage>Le champ est requis.</Field.ErrorMessage>
      }}
    />
  )
}

const Expiry = () => {
  const [error, setError] = useState(false)

  const handleBlur = e => {
    setError(isEmpty(e.target.value))
  }

  return (
    <CreditCardForm.Expiry
      label="Date de validité"
      fieldComponent={props => (
        <div {...props} className="k-u-margin-bottom-triple" />
      )}
      labelComponent={({ children, ...props }) => (
        <Field.Label labelProps={props} children={children} />
      )}
      inputComponent={props => (
        <Field.Input
          {...props}
          placeholder="MM/AA"
          digits={6}
          error={error}
          onBlur={handleBlur}
        />
      )}
      errorComponent={() => {
        if (!error) return null

        return <Field.ErrorMessage>Le champ est requis.</Field.ErrorMessage>
      }}
    />
  )
}

const Cvc = () => {
  const [error, setError] = useState(false)

  const handleBlur = e => {
    setError(isEmpty(e.target.value))
  }

  return (
    <CreditCardForm.Cvc
      label="Cryptogramme visuel"
      fieldComponent={props => (
        <div {...props} className="k-u-margin-bottom-triple" />
      )}
      labelComponent={({ children, ...props }) => (
        <Field.Label labelProps={props} children={children} />
      )}
      inputComponent={props => (
        <Field.Input {...props} digits={6} error={error} onBlur={handleBlur} />
      )}
      errorComponent={() => {
        if (!error) return null

        return <Field.ErrorMessage>Le champ est requis.</Field.ErrorMessage>
      }}
    />
  )
}
