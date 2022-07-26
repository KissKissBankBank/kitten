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
  tag,
}) => (
  <Field tag={tag}>
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
  tag,
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
    tag={tag}
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
  tag,
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
    tag={tag}
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
  tag,
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
    tag={tag}
  >
    <Field.RadioButtonSet name="radio" items={items} error={error} />
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
  tag,
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
    tag={tag}
  >
    <Field.RadioSet name="radio" items={items} error={error} />
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
  tag,
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
    tag={tag}
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
