import React from 'react'
import classNames from 'classnames'
import deprecated from 'react-prop-types/lib/deprecated'

export class RadioButton extends React.Component {
  renderContent() {
    // `content` prop is DEPRECATED.
    const content = this.props.children || this.props.content
    if (!content) return

    const labelContentsClassNames = classNames(
      'k-RadioButton__labelContents',
      { 'k-RadioButton__labelContents--large': this.props.largeContent }
    )
    return (
      <div className={ labelContentsClassNames }>{ content }</div>
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
            contentLarge,
            inputClassName,
            error,
            ...others } = this.props

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
               { ...others } />

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

RadioButton.propTypes = {
  content: deprecated(React.PropTypes.string, 'Use `children` prop instead')
}
