import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import styled, { css } from 'styled-components'
import NumberFormat from 'react-number-format'
import creditCardType from 'credit-card-type'
import { useFormContext } from '../'
import { pxToRem } from '../../../../helpers/utils/typography'
import { VisaIcon } from '../../../icons/visa-icon'

creditCardType.addCard({
  niceType: 'Bancontact',
  type: 'bcmc',
  patterns: [6703],
  gaps: [4, 8, 12],
  lengths: [16],
  code: null,
})

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

  const svgString = encodeURIComponent(
    renderToStaticMarkup(<VisaIcon height="15" />),
  )

  return (
    <Field>
      <Label htmlFor="frmCCNum">{label}</Label>

      <StyledNumberFormat
        name="cardnumber"
        id="frmCCNum"
        autoComplete="cc-number"
        format="#### #### #### ####"
        inputMode="numeric"
        placeholder="#### #### #### ####"
        customInput={Input}
        iconSvg={svgString}
        onValueChange={({ value }) => {
          console.warn(value)
          console.warn(creditCardType(value))
        }}
      />
    </Field>
  )
}
