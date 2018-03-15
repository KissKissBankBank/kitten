import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Text } from 'kitten/components/typography/text'

export class Checkbox extends Component {
  render() {
    const {
      className,
      id,
      children,
      inputClassName,
      error,
      ...inputProps,
    } = this.props

    const checkboxInputClassNames = classNames(
      'k-Checkbox__input',
      inputClassName,
      { 'is-error': error },
    )

    return (
      <div className={ classNames('k-Checkbox', className) }>
        <input
          id={ id }
          type="checkbox"
          className={ checkboxInputClassNames }
          { ...inputProps }
        />

        <label
          htmlFor={ id }
          className="k-Checkbox__label"
        >
          <Text { ...this.props.textProps }>
            { children }
          </Text>
        </label>
      </div>
    )
  }
}

Checkbox.defaultProps = {
  children: 'Filter 1',
  textProps: {},
}
