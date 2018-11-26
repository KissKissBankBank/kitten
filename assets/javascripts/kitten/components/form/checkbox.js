import React, { Component } from 'react'
import classNames from 'classnames'
import { Text } from '../../components/typography/text'

export class Checkbox extends Component {
  render() {
    const {
      className,
      id,
      children,
      inputClassName,
      error,
      textProps,
      onLabelClick,
      ...inputProps
    } = this.props

    const checkboxInputClassNames = classNames(
      'k-Checkbox__input',
      inputClassName,
      { 'is-error': error },
    )

    return (
      <div className={classNames('k-Checkbox', className)}>
        <input
          id={id}
          type="checkbox"
          className={checkboxInputClassNames}
          {...inputProps}
        />

        <label
          htmlFor={id}
          className="k-Checkbox__label"
          onClick={onLabelClick}
        >
          <Text {...textProps}>{children}</Text>
        </label>
      </div>
    )
  }
}

Checkbox.defaultProps = {
  children: 'Filter 1',
  textProps: {},
}
