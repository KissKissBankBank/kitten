import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'
import { useFormContext } from '../'
import { withCode, getCodeFormat } from './helpers'

export const Cvc = ({
  label,
  fieldComponent: Field,
  labelComponent: Label,
  inputComponent: Input,
  errorComponent: Error,
}) => {
  const {
    values: { number, cvc },
    setInputValues,
  } = useFormContext()
  const withCvc = withCode(number)

  const handleChange = ({ value }) => {
    setInputValues({ cvc: value })
  }

  useEffect(() => {
    if (withCvc) return

    setInputValues({ cvc: '' })
  }, [withCvc])

  if (!withCode(number)) return null

  return (
    <Field>
      <Label htmlFor="frmCCCVC">{label}</Label>

      <NumberFormat
        name="cvc"
        id="frmCCCVC"
        autoComplete="cc-csc"
        format={getCodeFormat(number)}
        inputMode="numeric"
        placeholder={getCodeFormat(number)}
        customInput={Input}
        value={cvc}
        onValueChange={handleChange}
      />

      <Error />
    </Field>
  )
}

Cvc.propTypes = {
  label: PropTypes.string,
  fieldComponent: PropTypes.elementType,
  labelComponent: PropTypes.elementType,
  inputComponent: PropTypes.elementType,
  errorComponent: PropTypes.elementType,
}

Cvc.defaultProps = {
  label: 'Card Number',
  fieldComponent: props => <div {...props} />,
  labelComponent: props => <label {...props} />,
  inputComponent: props => <input {...props} />,
  errorComponent: () => null,
}
