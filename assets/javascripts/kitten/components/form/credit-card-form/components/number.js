import React from 'react'
import NumberFormat from 'react-number-format'

export const Number = ({
  customComponents: { field: Field, label: Label, input: Input },
}) => {
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
