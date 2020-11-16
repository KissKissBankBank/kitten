import React from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'
import { useFormContext } from '../'

export const Expiry = ({
  label,
  fieldComponent: Field,
  labelComponent: Label,
  inputComponent: Input,
  errorComponent: Error,
}) => {
  const {
    values: { expiry },
    setInputValues,
  } = useFormContext()

  const handleChange = ({ value }) => {
    const month = value.substring(0, 2)
    const year = value.substring(2, 4)
    const formattedValue = value ? month + '/' + year : ''

    setInputValues({ expiry: formattedValue })
  }

  return (
    <Field>
      <Label htmlFor="frmCCExp">{label}</Label>

      <NumberFormat
        name="cc-exp"
        id="frmCCExp"
        autoComplete="cc-exp"
        format="##/##"
        inputMode="numeric"
        placeholder="MM/YY"
        customInput={Input}
        value={expiry}
        onValueChange={handleChange}
      />

      <Error />
    </Field>
  )
}

Expiry.propTypes = {
  label: PropTypes.string,
  fieldComponent: PropTypes.elementType,
  labelComponent: PropTypes.elementType,
  inputComponent: PropTypes.elementType,
  errorComponent: PropTypes.elementType,
}

Expiry.defaultProps = {
  label: 'Card Number',
  fieldComponent: props => <div {...props} />,
  labelComponent: props => <label {...props} />,
  inputComponent: props => <input {...props} />,
  errorComponent: () => null,
}
