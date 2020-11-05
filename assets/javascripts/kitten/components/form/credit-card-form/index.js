import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { Number } from './components/number'
import { Expiry } from './components/expiry'
import { Cvc } from './components/cvc'

const FormContext = createContext()
export const useFormContext = () => useContext(FormContext)

export const CreditCardForm = props => {
  return (
    <FormContext.Provider value={props}>
      <Number />
      <Expiry />
      <Cvc />
    </FormContext.Provider>
  )
}

CreditCardForm.propTypes = {
  customComponents: PropTypes.objectOf(PropTypes.element),
}

CreditCardForm.defaultProps = {
  customComponents: {
    field: props => <div {...props} />,
    label: props => <label {...props} />,
    input: props => <input {...props} />,
  },
}
