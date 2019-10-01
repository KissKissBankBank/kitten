import React, { Component } from 'react'
import classNames from 'classnames'
import { Text } from '../../components/typography/text'

export class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.el = React.createRef()
  }

  componentDidMount() {
    if (this.el.current != null) {
      this.el.current.indeterminate = this.props.indeterminate
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.el.current != null &&
      prevProps.indeterminate !== this.props.indeterminate
    ) {
      this.el.current.indeterminate = this.props.indeterminate
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
          ref={this.el}
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
  indeterminate: false,
}
