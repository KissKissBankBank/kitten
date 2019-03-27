import React from 'react'
import classNames from 'classnames'

export class Switch extends React.Component {
  render() {
    const { id, isChecked, disabled, label, big, ...others } = this.props

    const switchClassNames = classNames('k-Switch__label', {
      'k-Switch__label--big': big,
    })

    return (
      <div className="k-Switch">
        <input
          id={id}
          type="checkbox"
          className="k-Switch__input"
          defaultChecked={isChecked}
          disabled={disabled}
          {...others}
        />

        <label htmlFor={id} className={switchClassNames}>
          {label}
        </label>
      </div>
    )
  }
}

// DEPRECATED: do not use default export.
export default Switch
