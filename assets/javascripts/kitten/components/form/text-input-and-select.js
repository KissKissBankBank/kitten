import React from 'react'
import classNames from 'classnames'
import SelectWithState from 'kitten/components/form/select-with-state'
import { TextInput } from 'kitten/components/form/text-input'

export const TextInputAndSelect = props => {
  const { className,
          tiny,
          disabled,
          selectOptions,
          selectName,
          selectValue,
          appendSelect,
          ...textInputProps } = props

  const inputWrapperClassName = classNames(
    'k-FormComposer__element',
    {
      'k-FormComposer__element--main': !props.digits
    }
  )

  const renderTextInputWrapper = () => {
    return (
      <div className={ inputWrapperClassName } key={ `${props.currencyName}1` }>
        <TextInput tiny={ tiny }
                   disabled={ disabled }
                   { ...textInputProps } />
      </div>
    )
  }

  const renderSelectWrapper = () => {
    return (
      <div className="k-FormComposer__element" key={ `${props.currencyName}2` }>
        <SelectWithState name={ selectName }
                         options={ selectOptions }
                         value={ selectValue }
                         tiny={ tiny }
                         disabled={ disabled } />
      </div>
    )
  }

  const renderTextInputAndSelect = () => {
    if (appendSelect) {
      return [renderSelectWrapper(), renderTextInputWrapper()]
    }

    return [renderTextInputWrapper(), renderSelectWrapper()]
  }

  return (
    <div className="k-FormComposer">
      { renderTextInputAndSelect() }
    </div>
  )
}

TextInputAndSelect.defaultProps = {
  tiny: false,
  disabled: false,
  selectOptions: [{ value: 'myValue', label: 'My label' }],
  selectName: null,
  selectValue: null,
  digits: null,
  appendSelect: false,
}
