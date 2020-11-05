import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash/fp/merge'
import { Number } from './components/number'
import { Expiry } from './components/expiry'
import { Cvc } from './components/cvc'

const defaultProps = {
  customComponents: {
    field: props => <div {...props} />,
    label: props => <label {...props} />,
    input: props => <input {...props} />,
  },
  number: {
    label: 'Card Number',
    customComponents: {},
    validate: () => {},
  },
  expiry: {
    label: 'Expiry',
    customComponents: {},
    validate: () => {},
  },
  cvc: {
    label: 'CVC',
    customComponents: {},
    validate: () => {},
  },
  onValidate: () => {},
}

const FormContext = createContext(defaultProps)
export const useFormContext = () => useContext(FormContext)

export const CreditCardForm = props => {
  const value = merge(defaultProps)(props)

  return (
    <FormContext.Provider value={value}>
      <Number />
      <Expiry />
      <Cvc />
    </FormContext.Provider>
  )
}

// TODO: Update me!
CreditCardForm.propTypes = {
  customComponents: PropTypes.objectOf(PropTypes.element),
}

CreditCardForm.defaultProps = defaultProps
