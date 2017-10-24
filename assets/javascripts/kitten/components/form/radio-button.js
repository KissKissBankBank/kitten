import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export class RadioButton extends React.Component {
  renderContent() {
    const { children, largeContent } = this.props

    if (!children) return

    const labelContentsClassNames = classNames(
      'k-RadioButton__labelContents',
      { 'k-RadioButton__labelContents--large': largeContent }
    )
    return (
      <div className={ labelContentsClassNames }>
        { children }
      </div>
    )
  }

  renderLabel() {
    const { children,
            id,
            large,
            text,
            strong } = this.props

    const radioButtonLabelClassNames = classNames(
      'k-RadioButton__label',
      { 'k-RadioButton__label--large': large },
      { 'k-u-weight-bold': !!children },
    )

    return (
      <div>
        <label
          htmlFor={ id }
          className={ radioButtonLabelClassNames }
        >
          { text }
        </label>
      </div>
    )
  }

  render() {
    const { className,
            id,
            content,
            children,
            inputClassName,
            large,
            largeContent,
            strong,
            text,
            error,
            ...inputProps } = this.props

    const radioButtonInputClassNames = classNames(
      'k-RadioButton__input',
      inputClassName,
      { 'is-error': error },
    )

    return (
      <div className={ classNames('k-RadioButton', className) }>
        <input
          id={ id }
          type="radio"
          className={ radioButtonInputClassNames }
          { ...inputProps }
        />
        { this.renderLabel() }
        { this.renderContent() }
      </div>
    )
  }
}

RadioButton.defaultProps = {
  text: null,
  large: false,
  largeContent: false,
  strong: false,
}
