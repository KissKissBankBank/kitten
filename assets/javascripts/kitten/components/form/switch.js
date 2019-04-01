import React from 'react'
import classNames from 'classnames'

export const Switch = ({ id, isChecked, disabled, label, big, ...others }) => {
  const { id, isChecked, disabled, label, big, ...others } = props

  return (
    <div className="k-Switch">
      <input
        {...others}
        id={id}
        type="checkbox"
        className="k-Switch__input"
        defaultChecked={isChecked}
        disabled={disabled}
      />

      <label
        htmlFor={id}
        className={classNames('k-Switch__label', {
          'k-Switch__label--big': big,
        })}
      >
        {label}
      </label>
    </div>
  )
}
