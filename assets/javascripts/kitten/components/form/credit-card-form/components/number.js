import React from 'react'
import NumberFormat from 'react-number-format'
import { useFormContext } from '../'

export const Number = () => {
  const {
    customComponents: {
      field: globalField,
      label: globalLabel,
      input: globalInput,
    },
    number: { label, customComponents },
  } = useFormContext()
  const Field = customComponents.field || globalField
  const Label = customComponents.label || globalLabel
  const Input = customComponents.input || globalInput

  return (
    <Field>
      <Label htmlFor="frmCCNum">{label}</Label>

      <NumberFormat
        name="cardnumber"
        id="frmCCNum"
        autoComplete="cc-number"
        format="#### #### #### ####"
        inputMode="numeric"
        placeholder="#### #### #### ####"
        customInput={Input}
      />
    </Field>
  )
}
