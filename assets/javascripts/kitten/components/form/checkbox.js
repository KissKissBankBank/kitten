import React from 'react'
import classNames from 'classnames'

export default class Checkbox extends React.Component {
  render() {
    return (
      <div className="k-Checkbox">
        <input id={ this.prop.id }
               type="checkbox"
               className="k-Checkbox__input"
               isChecked={ this.props.isChecked }
               disabled={ this.props.disabled } />

        <label htmlFor={ this.prop.id } className="k-Checkbox__label">
          { this.prop.text }
        </label>
      </div>
    )
  }
}
