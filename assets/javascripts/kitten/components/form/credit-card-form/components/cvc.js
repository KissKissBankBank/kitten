import React, { useEffect } from 'react'
import NumberFormat from 'react-number-format'
import { useFormContext } from '../'
import { withCode, getCodeFormat } from './helpers'

export const Cvc = () => {
  const {
    customComponents: {
      field: globalField,
      label: globalLabel,
      input: globalInput,
      error: globalError,
    },
    cvc: { label, customComponents },
    values: { number, cvc },
    setInputValues,
  } = useFormContext()
  const Field = customComponents.field || globalField
  const Label = customComponents.label || globalLabel
  const Input = customComponents.input || globalInput
  const Error = customComponents.error || globalError
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
