import React from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'
import { useFormContext } from '../'

const limit = (val, max) => {
  if (val.length === 1 && val[0] > max[0]) {
    val = '0' + val
  }

  if (val.length === 2) {
    if (Number(val) === 0) {
      val = '01'
    } else if (val > max) {
      val = max
    }
  }

  return val
}

const cardExpiry = val => {
  const month = limit(val.substring(0, 2), '12')
  const fullYear = val.substring(2, 6)
  const year =
    fullYear.length === 4 ? fullYear.substring(2, 4) : fullYear.substring(0, 2)

  return val ? month + '/' + year : ''
}

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
        format={cardExpiry}
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
