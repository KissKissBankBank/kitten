import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import NumberFormat from 'react-number-format'
import { useFormContext } from '../'
import { pxToRem } from '../../../../helpers/utils/typography'
import {
  getCreditCardType,
  getCreditCardFormat,
  getIconSvgStringByType,
} from './helpers'

const StyledNumberFormat = styled(({ iconSvg, ...others }) => (
  <NumberFormat {...others} />
))`
  padding-right: ${pxToRem(45)};

  ${({ iconSvg }) =>
    iconSvg &&
    css`
    background: transparent no-repeat;
    background-image: url("data:image/svg+xml,${iconSvg}");
    background-position: calc(100% - ${pxToRem(5)}) center;
  `}
`

export const Number = ({ value: defaultValue }) => {
  const [value, setValue] = useState(defaultValue)
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
  const ccType = getCreditCardType(value)
  const ccFormat = getCreditCardFormat(ccType)
  const ccIconSvg = getIconSvgStringByType(ccType.type)

  return (
    <Field>
      <Label htmlFor="frmCCNum">{label}</Label>

      <StyledNumberFormat
        name="cardnumber"
        id="frmCCNum"
        autoComplete="cc-number"
        format={ccFormat}
        inputMode="numeric"
        placeholder="#### #### #### ####"
        customInput={Input}
        iconSvg={ccIconSvg}
        onValueChange={({ value }) => {
          setValue(value)
        }}
      />
    </Field>
  )
}
