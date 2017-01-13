import React from 'react'
import classNames from 'classnames'

export class Checkbox extends React.Component {
  render() {
    return (
      <div className="k-Checkbox">
        <input id={ this.props.id }
               type="checkbox"
               className="k-Checkbox__input"
               value={ this.props.value }
               defaultChecked={ this.props.checked }
               disabled={ this.props.disabled } />

        <label htmlFor={ this.props.id } className="k-Checkbox__label">
          { this.props.text }
        </label>
      </div>
    )
  }
}

Checkbox.defaultProps = {
  id: 'input-1',
  value: 'null',
  text: 'Filter 1',
  disabled: false,
  checked: false,
}
