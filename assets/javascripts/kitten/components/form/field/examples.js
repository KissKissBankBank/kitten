import React from 'react'
import { Field } from '.'

const FieldBase = ({
  tooltip,
  tooltipId,
  tooltipProps,
  label,
  id,
  error,
  errorMessage,
  help,
  helpHiddenOnBlur,
  children,
}) => (
  <Field>
    <Field.Label
      labelProps={{ htmlFor: id }}
      tooltip={tooltip}
      tooltipProps={tooltipProps}
      tooltipId={tooltipId}
    >
      {label}
    </Field.Label>

    {children}
    {error && <Field.ErrorMessage>{errorMessage}</Field.ErrorMessage>}
    {help && <Field.Help hiddenOnBlur={helpHiddenOnBlur}>{help}</Field.Help>}
  </Field>
)

export const FieldInputExample = ({
  id,
  label,
  tooltip,
  tooltipId,
  tooltipProps,
  placeholder,
  error,
  errorMessage,
  help,
  helpHiddenOnBlur,
  limit,
  unit,
  size,
  noMargin,
}) => (
  <FieldBase
    id={id}
    label={label}
    tooltip={tooltip}
    tooltipProps={tooltipProps}
    tooltipId={tooltipId}
    error={error}
    errorMessage={errorMessage}
    help={help}
    helpHiddenOnBlur={helpHiddenOnBlur}
  >
    <Field.Input
      id={id}
      size={size}
      limit={limit}
      unit={unit}
      name="field"
      placeholder={placeholder}
      error={error}
      noMargin={noMargin}
    />
  </FieldBase>
)

export const FieldPasswordExample = ({
  id,
  label,
  tooltip,
  tooltipId,
  tooltipProps,
  placeholder,
  error,
  errorMessage,
  help,
  helpHiddenOnBlur,
  size,
}) => (
  <FieldBase
    id={id}
    label={label}
    tooltip={tooltip}
    tooltipProps={tooltipProps}
    tooltipId={tooltipId}
    error={error}
    errorMessage={errorMessage}
    help={help}
    helpHiddenOnBlur={helpHiddenOnBlur}
  >
    <Field.Password
      id={id}
      size={size}
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
  tooltipProps,
  items,
  error,
  errorMessage,
  help,
  helpHiddenOnBlur,
  variant,
}) => (
  <FieldBase
    id={id}
    label={label}
    tooltip={tooltip}
    tooltipProps={tooltipProps}
    tooltipId={tooltipId}
    error={error}
    errorMessage={errorMessage}
    help={help}
    helpHiddenOnBlur={helpHiddenOnBlur}
  >
    <Field.RadioButtonSet
      name="radio"
      items={items}
      error={error}
      variant={variant}
    />
  </FieldBase>
)

export const FieldRadioSetExample = ({
  id,
  label,
  tooltip,
  tooltipId,
  tooltipProps,
  items,
  error,
  errorMessage,
  help,
  helpHiddenOnBlur,
  variant,
}) => (
  <FieldBase
    id={id}
    label={label}
    tooltip={tooltip}
    tooltipProps={tooltipProps}
    tooltipId={tooltipId}
    error={error}
    errorMessage={errorMessage}
    help={help}
    helpHiddenOnBlur={helpHiddenOnBlur}
  >
    <Field.RadioSet
      name="radio"
      items={items}
      error={error}
      variant={variant}
    />
  </FieldBase>
)

export const FieldAutocompleteExample = ({
  id,
  label,
  tooltip,
  tooltipId,
  tooltipProps,
  placeholder,
  error,
  errorMessage,
  help,
  helpHiddenOnBlur,
  items,
  size,
}) => (
  <FieldBase
    id={id}
    label={label}
    tooltip={tooltip}
    tooltipProps={tooltipProps}
    tooltipId={tooltipId}
    error={error}
    errorMessage={errorMessage}
    help={help}
    helpHiddenOnBlur={helpHiddenOnBlur}
  >
    <Field.Autocomplete
      id={id}
      size={size}
      name="field"
      placeholder={placeholder}
      error={error}
      items={items}
    />
  </FieldBase>
)
