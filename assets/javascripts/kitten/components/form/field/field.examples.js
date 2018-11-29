import React from 'react'
import { Field } from '../field'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'

const FieldBase = ({
  tooltip,
  tooltipId,
  label,
  id,
  error,
  errorMessage,
  children,
}) => (
  <Container>
    <Grid>
      <GridCol col="3">
        <Marger top="5" bottom="5">
          <Field>
            <Field.Label
              labelProps={{ htmlFor: id }}
              tooltip={tooltip}
              tooltipId={tooltipId}
            >
              {label}
            </Field.Label>

            {children}
            {error && <Field.Error>{errorMessage}</Field.Error>}
          </Field>
        </Marger>
      </GridCol>
    </Grid>
  </Container>
)

export const FieldInputExample = ({
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
    <Field.Input id={id} name="field" placeholder={placeholder} error={error} />
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
