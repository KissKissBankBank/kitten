import React from 'react'
import PropTypes from 'prop-types'
import { Number } from './components/number'
import { Expiry } from './components/expiry'
import { Cvc } from './components/cvc'

export const CreditCardForm = ({ customComponents }) => {
  return (
    <>
      <Number customComponents={customComponents} />
      <Expiry customComponents={customComponents} />
      <Cvc customComponents={customComponents} />
    </>
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
