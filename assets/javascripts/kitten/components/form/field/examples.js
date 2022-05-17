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
  helpMessage,
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
    {help && <Field.HelpMessage>{helpMessage}</Field.HelpMessage>}
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
  helpMessage,
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
    helpMessage={helpMessage}
  >
    <Field.Input
      id={id}
      size={size}
      limit={limit}
      unit={unit}
      name="field"
      placeholder={placeholder}
      error={error}
      help={help}
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
  helpMessage,
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
    helpMessage={helpMessage}
  >
    <Field.Password
      id={id}
      size={size}
      name="field"
      iconLabel="Show password"
      hiddenIconLabel="Hide password"
      placeholder={placeholder}
      error={error}
      help={help}
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
  helpMessage,
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
    helpMessage={helpMessage}
  >
    <Field.RadioButtonSet
      name="radio"
      items={items}
      error={error}
      help={help}
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
  helpMessage,
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
    helpMessage={helpMessage}
  >
    <Field.RadioSet
      name="radio"
      items={items}
      error={error}
      help={help}
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
  helpMessage,
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
    helpMessage={helpMessage}
  >
    <Field.Autocomplete
      id={id}
      size={size}
      name="field"
      placeholder={placeholder}
      error={error}
      help={help}
      items={items}
    />
  </FieldBase>
)
