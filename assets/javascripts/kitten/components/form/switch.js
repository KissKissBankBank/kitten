import React from 'react'
import classNames from 'classnames'

export default class Switch extends React.Component {
  render() {
    let SwitchClassNames = classNames(
      'k-Switch__label',
      { 'k-Switch__label--big': this.props.big },
    )

    return (
      <div className="k-Switch">
        <input id={ this.props.id }
                type="checkbox"
                className="k-Switch__input"
                defaultChecked={ this.props.isChecked }
                disabled={ this.props.disabled } />

        <label htmlFor={ this.props.id }
               className={ SwitchClassNames } >
          { this.props.label}
        </label>
      </div>
    )
  }
}
