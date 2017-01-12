import React from 'react'
import classNames from 'classnames'

export class RadioButton extends React.Component {
  renderContent() {
    if (!this.props.content)
      return

    const labelContentsClassNames = classNames(
      'k-RadioButton__labelContents',
      { 'k-RadioButton__labelContents--large': this.props.contentLarge }
    )
    return (
      <div className={ labelContentsClassNames }>
        <p>{ this.props.content }</p>
      </div>
    )
  }

  render() {
    let radioButtonClassNames = classNames (
      'k-RadioButton__label',
      { 'k-RadioButton__label--large': this.props.large },
    )

    return (
      <div className="k-RadioButton">
        <input id={ this.props.id }
               type="radio"
               name={ this.props.name }
               className="k-RadioButton__input"
               value={ this.props.value }
               defaultChecked={ this.props.checked }
               disabled={ this.props.disabled } />

        <label htmlFor={ this.props.id }
               className={ radioButtonClassNames } >
          { this.props.text }
        </label>
          { this.renderContent() }
      </div>
    )
  }
}

RadioButton.defaultProps = {
  id: 'karl-radio-button-1',
  name: 'karl-radio-button',
  value: 'ok',
  text: 'Default',
  large: false,
  contentLarge: false,
  content: ' ',
  checked: false,
  disabled: false,
}
