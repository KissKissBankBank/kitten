import React from 'react'
import classNames from 'classnames'

export default class RadioButton extends React.Component {
  render() {
    let radioButtonClassNames = classNames (
      'k-RadioButton__label',
      { 'k-RadioButton__label--large': this.props.large },
    )

    let labelContentsClassNames = classNames (
      'k-RadioButton__labelContents',
      { 'k-RadioButton__labelContents--large': this.props.contentLarge }
    )

    return (
      <div className="k-RadioButton">
        <input id={ this.props.id }
               type="radio"
               name={ this.props.name }
               className="k-RadioButton__input"
               defaultChecked={ this.props.isChecked }
               disabled={ this.props.disabled } />

        <label htmlFor={ this.props.id }
               className={ radioButtonClassNames } >
          { this.props.text }
        </label>
        <div className={ labelContentsClassNames } >
          <p> { this.props.content } </p>
        </div>
      </div>
    )
  }
}
