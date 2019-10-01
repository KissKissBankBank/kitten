import React, { useRef, useEffect } from 'react'
import classNames from 'classnames'
import { Text } from '../../components/typography/text'

export const Checkbox = ({
  className,
  id,
  children,
  inputClassName,
  error,
  textProps,
  onLabelClick,
  indeterminate,
  ...inputProps
}) => {
  const inputElement = useRef(null)

  useEffect(() => {
    if (inputElement.current != null) {
      inputElement.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  const checkboxInputClassNames = classNames(
    'k-Checkbox__input',
    inputClassName,
    { 'is-error': error },
  )

  return (
    <div className={classNames('k-Checkbox', className)}>
      <input
        ref={inputElement}
        id={id}
        type="checkbox"
        className={checkboxInputClassNames}
        {...inputProps}
      />

      <label htmlFor={id} className="k-Checkbox__label" onClick={onLabelClick}>
        <Text {...textProps}>{children}</Text>
      </label>
    </div>
  )
}

Checkbox.defaultProps = {
  children: 'Filter 1',
  textProps: {},
  indeterminate: false,
}
