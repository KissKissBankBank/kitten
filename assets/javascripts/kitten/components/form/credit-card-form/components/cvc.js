import React from 'react'
import NumberFormat from 'react-number-format'
import { useFormContext } from '../'

export const Cvc = () => {
  const {
    customComponents: { field: Field, label: Label, input: Input },
  } = useFormContext()

  return (
    <Field>
      <Label htmlFor="frmCCCVC">CVC</Label>

      <NumberFormat
        name="cvc"
        id="frmCCCVC"
        autoComplete="cc-csc"
        format="###"
        inputMode="numeric"
        placeholder="CVC"
        customInput={Input}
      />
    </Field>
  )
}
