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
      <div className={ labelContentsClassNames }>{ children }</div>
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
            inputClassName,
            error,
            ...inputProps } = this.props

    const radioButtonLabelClassNames = classNames(
      'k-RadioButton__label',
      { 'k-RadioButton__label--large': large },
    )

    const radioButtonInputClassNames = classNames(
      'k-RadioButton__input',
      inputClassName,
      { 'is-error': error },
    )

    return (
      <div className={ classNames('k-RadioButton', className) }>
        <input id={ id }
               type="radio"
               className={ radioButtonInputClassNames }
               { ...inputProps } />

        <label htmlFor={ id }
               className={ radioButtonLabelClassNames } >
          { text }
        </label>
        { this.renderContent() }
      </div>
    )
  }
}

RadioButton.defaultProps = {
  text: null,
  large: false,
  largeContent: false,
}
