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
            inputClassName,
            ...inputProps } = this.props

    let radioButtonClassNames = classNames (
      'k-RadioButton__label',
      { 'k-RadioButton__label--large': large },
    )

    return (
      <div className={ classNames('k-RadioButton', className) }>
        <input id={ id }
               type="radio"
               className={ classNames('k-RadioButton__input', inputClassName) }
               { ...inputProps } />

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
  text: null,
  large: false,
  largeContent: false,
}

RadioButton.propTypes = {
  content: deprecated(React.PropTypes.string, 'Use `children` prop instead')
}
