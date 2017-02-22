import React from 'react'
import classNames from 'classnames'
import SelectWithState from 'kitten/components/form/select-with-state'
import { TextInput } from 'kitten/components/form/text-input'

export const FormAmountAndCurrency = props => {
  const { className,
          tiny,
          disabled,
          currencyOptions,
          currencyName,
          currencyValue,
          ...textInputProps } = props

  return (
    <div className="k-FormComposer">
      <div className="k-FormComposer__element
                      k-FormComposer__element--main
                      k-FormAmountAndCurrency">
        <TextInput tiny={ tiny }
                   disabled={ disabled }
                   { ...textInputProps }
                   type='number' />
      </div>

      <div className="k-FormComposer__element">
        <SelectWithState name={ currencyName }
                         options={ currencyOptions }
                         value={ currencyValue }
                         tiny={ tiny }
                         disabled={ disabled } />
      </div>
    </div>
  )
}

FormAmountAndCurrency.defaultProps = {
  tiny: false,
  disabled: false,
  currencyOptions: [{ value: 'eur', label: 'EUR' }],
  currencyName: null,
  currencyValue: null,
}
