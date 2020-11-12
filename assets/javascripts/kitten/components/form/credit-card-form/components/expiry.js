import React from 'react'
import NumberFormat from 'react-number-format'
import { useFormContext } from '../'

export const Expiry = () => {
  const {
    customComponents: {
      field: globalField,
      label: globalLabel,
      input: globalInput,
      error: globalError,
    },
    expiry: { label, customComponents },
    values: { expiry },
    setInputValues,
  } = useFormContext()
  const Field = customComponents.field || globalField
  const Label = customComponents.label || globalLabel
  const Input = customComponents.input || globalInput
  const Error = customComponents.error || globalError

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
