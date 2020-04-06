import React from 'react'
import classNames from 'classnames'
import { SelectWithState } from '../../components/form/select-with-state'
import { TextInput } from '../../components/form/text-input'

export const TextInputAndSelect = props => {
  const {
    className,
    tiny,
    disabled,
    selectOptions,
    selectName,
    selectValue,
    onSelectChange,
    errorOnSelect,
    validOnSelect,
    appendSelect,
    ...textInputProps
  } = props

  // TODO: use another prop that digits to handle
  // `k-FormComposer__element--main` class.
  const inputWrapperClassName = classNames(
    'k-FormComposer__element',
    {
      'k-FormComposer__element--main': !props.digits,
    },
    className,
  )

  // TODO: handle key without currencyName prop
  const renderTextInputWrapper = () => {
    return (
      <div className={inputWrapperClassName} key={`${props.currencyName}1`}>
        <TextInput tiny={tiny} disabled={disabled} {...textInputProps} />
      </div>
    )
  }

  const renderSelectWrapper = () => {
    return (
      <div className="k-FormComposer__element" key={`${props.currencyName}2`}>
        <SelectWithState
          name={selectName}
          options={selectOptions}
          value={selectValue}
          tiny={tiny}
          onInputChange={onSelectChange}
          error={errorOnSelect}
          valid={validOnSelect}
          disabled={disabled}
        />
      </div>
    )
  }

  const renderTextInputAndSelect = () => {
    if (appendSelect) {
      return [renderSelectWrapper(), renderTextInputWrapper()]
    }

    return [renderTextInputWrapper(), renderSelectWrapper()]
  }

  return <div className="k-FormComposer">{renderTextInputAndSelect()}</div>
}

TextInputAndSelect.defaultProps = {
  tiny: false,
  disabled: false,
  selectOptions: [{ value: 'myValue', label: 'My label' }],
  selectName: null,
  selectValue: null,
  onSelectChange: function () {},
  errorOnSelect: false,
  validOnSelect: false,
  disabled: false,
  digits: null,
  appendSelect: false,
}
