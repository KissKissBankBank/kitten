import React from 'react'
import NumberFormat from 'react-number-format'
import { useFormContext } from '../'

// TODO: Validation sur 3 caractères.

export const Cvc = () => {
  const {
    customComponents: {
      field: globalField,
      label: globalLabel,
      input: globalInput,
    },
    cvc: { label, customComponents },
  } = useFormContext()
  const Field = customComponents.field || globalField
  const Label = customComponents.label || globalLabel
  const Input = customComponents.input || globalInput

  return (
    <Field>
      <Label htmlFor="frmCCCVC">{label}</Label>

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
