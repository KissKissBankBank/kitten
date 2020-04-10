import React from 'react'
import { TextInputAndSelect } from '../../components/form/text-input-and-select'

export const FormAmountAndCurrency = props => {
  const {
    currencyOptions,
    currencyName,
    currencyValue,
    ...textInputAndSelectProps
  } = props

  return (
    <TextInputAndSelect
      selectOptions={currencyOptions}
      selectName={currencyName}
      selectValue={currencyValue}
      key={currencyName}
      type="number"
      {...textInputAndSelectProps}
    />
  )
}

FormAmountAndCurrency.defaultProps = {
  tiny: false,
  disabled: false,
  currencyOptions: [{ value: 'eur', label: 'EUR' }],
  currencyName: null,
  currencyValue: null,
  digits: null, // 2 or 12 for now
}
