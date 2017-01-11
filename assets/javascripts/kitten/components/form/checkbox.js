import React from 'react'
import classNames from 'classnames'

export default class Checkbox extends React.Component {
  render() {
    return (
      <div className="k-Checkbox">
        <input id={ this.props.id }
               type="checkbox"
               className="k-Checkbox__input"
               defaultChecked={ this.props.isChecked }
               disabled={ this.props.disabled } />

        <label htmlFor={ this.props.id } className="k-Checkbox__label">
          { this.props.text }
        </label>
      </div>
    )
  }
}
