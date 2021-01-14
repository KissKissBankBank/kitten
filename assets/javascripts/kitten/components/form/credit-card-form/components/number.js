import React from 'react'
import PropTypes from 'prop-types'
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

export const Number = ({
  label,
  fieldComponent: Field,
  labelComponent: Label,
  inputComponent: Input,
  errorComponent: Error,
}) => {
  const {
    values: { number },
    setInputValues,
  } = useFormContext()
  const ccType = getCreditCardType(number)
  const ccFormat = getCreditCardFormat(ccType)
  const ccIconSvg = getIconSvgStringByType(ccType.type)

  const handleChange = ({ value }) => {
    const { type } = getCreditCardType(value)
    setInputValues({ number: value, type })
  }

  return (
    <Field>
      <Label htmlFor="frmCCNum">{label}</Label>

      <StyledNumberFormat
        name="cardnumber"
        id="frmCCNum"
        autoComplete="cc-number"
        format={ccFormat}
        inputMode="numeric"
        placeholder={ccFormat}
        customInput={Input}
        iconSvg={ccIconSvg}
        value={number}
        onValueChange={handleChange}
      />

      <Error />
    </Field>
  )
}

Number.propTypes = {
  label: PropTypes.string,
  fieldComponent: PropTypes.elementType,
  labelComponent: PropTypes.elementType,
  inputComponent: PropTypes.elementType,
  errorComponent: PropTypes.elementType,
}

Number.defaultProps = {
  label: 'Card Number',
  fieldComponent: props => <div {...props} />,
  labelComponent: props => <label {...props} />,
  inputComponent: props => <input {...props} />,
  errorComponent: () => null,
}
