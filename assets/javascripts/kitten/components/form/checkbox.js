import React, { Component } from 'react'
import classNames from 'classnames'
import { Text } from '../../components/typography/text'

export class Checkbox extends Component {
  componentDidMount = () => {
    this.el.indeterminate = this.props.indeterminate
  }

  componentDidUpdate = prevProps => {
    if (prevProps.indeterminate !== this.props.indeterminate) {
      this.el.indeterminate = this.props.indeterminate
    }
  }

  render() {
    const {
      className,
      id,
      children,
      inputClassName,
      error,
      textProps,
      onLabelClick,
      indeterminate,
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
          ref={el => (this.el = el)}
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
  indeterminate: false,
}
