import React from 'react'
import { Field } from '../field'

const FieldBase = ({
  tooltip,
  tooltipId,
  label,
  id,
  error,
  errorMessage,
  children,
}) => (
  <Field>
    <Field.Label
      labelProps={{ htmlFor: id }}
      tooltip={tooltip}
      tooltipId={tooltipId}
    >
      {label}
    </Field.Label>

    {children}
    {error && <Field.ErrorMessage>{errorMessage}</Field.ErrorMessage>}
  </Field>
)

export const FieldInputExample = ({
  id,
  label,
  tooltip,
  tooltipId,
  placeholder,
  error,
  errorMessage,
  limit,
  unit,
}) => (
  <FieldBase
    id={id}
    label={label}
    tooltip={tooltip}
    tooltipId={tooltipId}
    error={error}
    errorMessage={errorMessage}
  >
    <Field.Input
      id={id}
      limit={limit}
      unit={unit}
      name="field"
      placeholder={placeholder}
      error={error}
    />
  </FieldBase>
)

export const FieldPasswordExample = ({
  id,
  label,
  tooltip,
  tooltipId,
  placeholder,
  error,
  errorMessage,
}) => (
  <FieldBase
    id={id}
    label={label}
    tooltip={tooltip}
    tooltipId={tooltipId}
    error={error}
    errorMessage={errorMessage}
  >
    <Field.Password
      id={id}
      name="field"
      iconLabel="Show password"
      hiddenIconLabel="Hide password"
      placeholder={placeholder}
      error={error}
    />
  </FieldBase>
)

export const FieldRadioButtonSetExample = ({
  id,
  label,
  tooltip,
  tooltipId,
  items,
  error,
  errorMessage,
}) => (
  <FieldBase
    id={id}
    label={label}
    tooltip={tooltip}
    tooltipId={tooltipId}
    error={error}
    errorMessage={errorMessage}
  >
    <Field.RadioButtonSet name="radio" items={items} error={error} />
  </FieldBase>
)

export const FieldSelectExample = ({
  id,
  label,
  tooltip,
  tooltipId,
  placeholder,
  options,
  error,
  errorMessage,
}) => (
  <FieldBase
    id={id}
    label={label}
    tooltip={tooltip}
    tooltipId={tooltipId}
    error={error}
    errorMessage={errorMessage}
  >
    <Field.Select
      id={id}
      name="select"
      placeholder={placeholder}
      options={options}
      error={error}
    />
  </FieldBase>
)

export const FieldAutocompleteExample = ({
  id,
  label,
  tooltip,
  tooltipId,
  placeholder,
  error,
  errorMessage,
  items,
}) => (
  <FieldBase
    id={id}
    label={label}
    tooltip={tooltip}
    tooltipId={tooltipId}
    error={error}
    errorMessage={errorMessage}
  >
    <Field.Autocomplete
      id={id}
      name="field"
      placeholder={placeholder}
      error={error}
      items={items}
    />
  </FieldBase>
)
