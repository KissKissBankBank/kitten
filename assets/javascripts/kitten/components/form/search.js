import React from 'react'
import classNames from 'classnames'
import domElementHelper from 'kitten/helpers/dom/element-helper'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      focus: false,
      hover: false
    }

    this.handleSubmitFocus = this.handleSubmitFocus.bind(this)
    this.handleSubmitBlur = this.handleSubmitBlur.bind(this)
    this.handleSubmitMouseOver = this.handleSubmitMouseOver.bind(this)
    this.handleSubmitMouseOut = this.handleSubmitMouseOut.bind(this)
  }

  componentDidMount() {
    if (domElementHelper.canUseDom()) {
      // These listeners helps us to handle the text input display depending on
      // the submit input state (as we cannot handle it directly in css).
      this.refs.submit.addEventListener('focus', this.handleSubmitFocus)
      this.refs.submit.addEventListener('blur', this.handleSubmitBlur)
      this.refs.submit.addEventListener('mouseover', this.handleSubmitMouseOver)
      this.refs.submit.addEventListener('mouseout', this.handleSubmitMouseOut)
    }
  }

  // Component listeners callbacks.

  handleSubmitFocus() {
    this.setState({ focus: true })
  }

  handleSubmitBlur() {
    this.setState({ focus: false })
  }

  handleSubmitMouseOver() {
    this.setState({ hover: true })
  }

  handleSubmitMouseOut() {
    this.setState({ hover: false })
  }

  // Rendering.

  render() {
    let inputClassName = classNames(
      'k-TextInput ',
      'k-TextInput--tiny',
      'k-SearchInput__input',
      { 'is-active': this.state.focus },
      { 'is-hover': this.state.hover },
    )

    return (
      <form className="k-SearchInput"
                  role="search"
                  action={ this.props.actionUrl }
                  acceptCharset="UTF-8"
                  method="get">
        <input ref="input"
               className={ inputClassName }
               type="text"
               id={ this.props.inputId }
               name={ this.props.inputName }
               placeholder={ this.props.inputPlaceholder } />

        <button ref="submit"
                type="submit"
                aria-label={ this.props.submitLabel }
                className="k-SearchInput__submit">
          <svg width="17"
               height="17"
               viewBox="-0.7 -0.7 18 18"
               xmlns="http://www.w3.org/2000/svg">
            <circle className="k-SearchInput__submit__svgCircle"
                    cx="7"
                    cy="7"
                    r="7"
                    stroke="#333"
                    strokeWidth="1.1"
                    fill="none" />
            <path className="k-SearchInput__submit__svgPath"
                  fill="#333"
                  d="M13 11 L17 15 L15.5 16.5 L11.5 12.7z" />
          </svg>
        </button>
      </form>)
  }
}

export default Search
