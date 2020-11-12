import React, { createContext, useContext, useState, useEffect } from 'react'
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
    error: () => null,
  },
  number: {
    label: 'Card Number',
    customComponents: {},
  },
  expiry: {
    label: 'Expiry',
    customComponents: {},
  },
  cvc: {
    label: 'CVC',
    customComponents: {},
  },
  values: {
    number: '',
    expiry: '',
    cvc: '',
  },
  onChange: _values => {},
}

const FormContext = createContext(defaultProps)
export const useFormContext = () => useContext(FormContext)

export const CreditCardForm = props => {
  const [inputValues, updateInputValues] = useState(
    merge(defaultProps.values)(props.values),
  )
  const contextValues = merge(defaultProps)({
    ...props,
    values: inputValues,
    setInputValues: v => {
      updateInputValues(merge(inputValues)(v))
    },
  })

  useEffect(() => {
    contextValues.onChange(inputValues)
  }, [inputValues])

  return (
    <FormContext.Provider value={contextValues}>
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
