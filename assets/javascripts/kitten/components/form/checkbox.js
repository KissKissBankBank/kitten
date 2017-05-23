import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import deprecated from 'prop-types-extra/lib/deprecated'

export class Checkbox extends React.Component {
  render() {
    const { className,
            id,
            children,
            text,
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
          { children || text }
        </label>
      </div>
    )
  }
}

Checkbox.defaultProps = {
  children: 'Filter 1',
}

Checkbox.propTypes = {
  text: deprecated(PropTypes.string, 'Use `children` prop instead')
}
