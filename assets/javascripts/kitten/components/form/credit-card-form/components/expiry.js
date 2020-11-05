import React from 'react'
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
  const year = val.substring(2, 4)

  return month + (year.length ? '/' + year : '')
}

export const Expiry = () => {
  const {
    customComponents: { field: Field, label: Label, input: Input },
  } = useFormContext()

  return (
    <Field>
      <Label htmlFor="frmCCExp">Expiry</Label>

      <NumberFormat
        name="cc-exp"
        id="frmCCExp"
        autoComplete="cc-exp"
        format={cardExpiry}
        inputMode="numeric"
        placeholder="MM/YY"
        customInput={Input}
      />
    </Field>
  )
}
