import React from 'react'
import classNames from 'classnames'
import { domElementHelper } from 'kitten/helpers/dom/element-helper'
import { TextInput } from 'kitten/components/form/text-input'
import { SearchIcon } from 'kitten/components/icons/search-icon'

export class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      focus: false,
      hover: false
    }

    // These listeners help us to handle the text input display depending on the
    // submit input state (as we cannot handle it directly in css).
    this.handleSubmitFocus = this.handleSubmitFocus.bind(this)
    this.handleSubmitBlur = this.handleSubmitBlur.bind(this)
    this.handleSubmitMouseOver = this.handleSubmitMouseOver.bind(this)
    this.handleSubmitMouseOut = this.handleSubmitMouseOut.bind(this)
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
      'k-TextInput',
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
        <TextInput className={ inputClassName }
                   type="text"
                   id={ this.props.inputId }
                   name={ this.props.inputName }
                   placeholder={ this.props.inputPlaceholder } />

        <button type="submit"
                aria-label={ this.props.submitLabel }
                className="k-SearchInput__submit k-SearchInput__submit--tiny"
                onFocus={ this.handleSubmitFocus }
                onBlur={ this.handleSubmitBlur }
                onMouseOver={ this.handleSubmitMouseOver }
                onMouseOut={ this.handleSubmitMouseOut }>
          <SearchIcon
            width="14"
            height="14"
          />
        </button>
      </form>)
  }
}

// DEPRECATED: do not use default export.
export default Search
