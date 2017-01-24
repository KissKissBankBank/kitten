import React from 'react'
import classNames from 'classnames'

export class RadioButton extends React.Component {
  renderContent() {
    if (!this.props.children && !this.props.content)
      return

    const labelContentsClassNames = classNames(
      'k-RadioButton__labelContents',
      { 'k-RadioButton__labelContents--large': this.props.largeContent }
    )
    return (
      <div className={ labelContentsClassNames }>
        { this.props.children || this.props.content }
      </div>
    )
  }

  render() {
    const { className,
            id,
            text,
            large,
            largeContent,
            children,
            content,
            ...others } = this.props

    let radioButtonClassNames = classNames (
      'k-RadioButton__label',
      { 'k-RadioButton__label--large': large },
    )

    return (
      <div className={ classNames('k-RadioButton', className) }>
        <input id={ id }
               type="radio"
               className="k-RadioButton__input"
               { ...others } />

        <label htmlFor={ id }
               className={ radioButtonClassNames } >
          { text }
        </label>

        { this.renderContent() }
      </div>
    )
  }
}

RadioButton.defaultProps = {
  text: 'Default',
  large: false,
  largeContent: false,
  // DEPRECATED.
  content: '',
}
