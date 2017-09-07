import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export class Checkbox extends React.Component {
  render() {
    const { className,
            id,
            children,
            inputClassName,
            error,
            ...inputProps } = this.props

    const checkboxInputClassNames = classNames(
      'k-Checkbox__input',
      inputClassName,
      { 'is-error': error },
    )

    return (
      <div className={ classNames('k-Checkbox', className) }>
        <input id={ id }
               type="checkbox"
               className={ checkboxInputClassNames }
               { ...inputProps } />

        <label htmlFor={ id } className="k-Checkbox__label">
          { children }
        </label>
      </div>
    )
  }
}

Checkbox.defaultProps = {
  children: 'Filter 1',
}
