import React from 'react'
import classNames from 'classnames'

export class Checkbox extends React.Component {
  render() {
    const { id, text, ...others } = this.props

    return (
      <div className="k-Checkbox">
        <input id={ id }
               type="checkbox"
               className="k-Checkbox__input"
               { ...others } />

        <label htmlFor={ id } className="k-Checkbox__label">
          { text }
        </label>
      </div>
    )
  }
}

Checkbox.defaultProps = {
  text: 'Filter 1',
}
