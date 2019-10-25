import React from 'react'
import classNames from 'classnames'

export const Switch = ({ id, isChecked, disabled, label, big, ...others }) => (
  <div className="k-Switch">
    <input
      {...others}
      id={id}
      type="checkbox"
      className={classNames('k-Switch__input', others.className)}
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