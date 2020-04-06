import React, { Component } from 'react'
import classNames from 'classnames'

export class RadioButton extends Component {
  renderContent() {
    const { children, largeContent } = this.props

    if (!children) return

    const labelContentsClassNames = classNames('k-RadioButton__labelContents', {
      'k-RadioButton__labelContents--large': largeContent,
    })
    return <div className={labelContentsClassNames}>{children}</div>
  }

  renderLabel() {
    const { children, id, large, text } = this.props

    const radioButtonLabelClassNames = classNames(
      'k-RadioButton__label',
      { 'k-RadioButton__label--large': large },
      { 'k-RadioButton__label--withContents': !!children },
    )

    return (
      <label htmlFor={id} className={radioButtonLabelClassNames}>
        {text}
      </label>
    )
  }

  render() {
    const {
      className,
      id,
      children,
      inputClassName,
      large,
      largeContent,
      text,
      error,
      style,
      ...inputProps
    } = this.props

    const radioButtonInputClassNames = classNames(
      'k-RadioButton__input',
      inputClassName,
      { 'is-error': error },
    )

    return (
      <div className={classNames('k-RadioButton', className)} style={style}>
        <input
          id={id}
          type="radio"
          className={radioButtonInputClassNames}
          {...inputProps}
        />
        {this.renderLabel()}
        {this.renderContent()}
      </div>
    )
  }
}

RadioButton.defaultProps = {
  text: null,
  large: false,
  largeContent: false,
}
