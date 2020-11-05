import React from 'react'
import NumberFormat from 'react-number-format'
import { useFormContext } from '../'

export const Number = () => {
  const {
    customComponents: { field: Field, label: Label, input: Input },
  } = useFormContext()

  return (
    <Field>
      <Label htmlFor="frmCCNum">Card Number</Label>

      <NumberFormat
        name="cardnumber"
        id="frmCCNum"
        autoComplete="cc-number"
        format="#### #### #### ####"
        inputMode="numeric"
        customInput={Input}
      />
    </Field>
  )
}
