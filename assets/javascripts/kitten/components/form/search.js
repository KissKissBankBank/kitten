import React, { Component } from 'react'
import { TextInput } from '../../components/form/text-input'
import { SearchIcon } from '../../components/icons/search-icon'

export class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      focus: false,
      hover: false,
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
    const {
      actionUrl,
      inputId,
      inputName,
      inputPlaceholder,
      inputLabel,
      submitLabel,
    } = this.props

    let inputClassName = classNames(
      'k-TextInput',
      'k-TextInput--tiny',
      'k-SearchInput__input',
      { 'is-active': this.state.focus },
      { 'is-hover': this.state.hover },
    )

    return (
      <form
        className="k-SearchInput"
        role="search"
        action={actionUrl}
        acceptCharset="UTF-8"
        method="get"
      >
        <TextInput
          className={inputClassName}
          type="search"
          id={inputId}
          name={inputName}
          placeholder={inputPlaceholder}
          aria-label={inputLabel}
        />

        <button
          type="submit"
          aria-label={submitLabel}
          className="k-SearchInput__submit k-SearchInput__submit--tiny"
          onFocus={this.handleSubmitFocus}
          onBlur={this.handleSubmitBlur}
          onMouseOver={this.handleSubmitMouseOver}
          onMouseOut={this.handleSubmitMouseOut}
        >
          <SearchIcon
            width="14"
            height="14"
            circleProps={{ className: 'k-SearchInput__submit__svgCircle' }}
            pathProps={{ className: 'k-SearchInput__submit__svgPath' }}
          />
        </button>
      </form>
    )
  }
}

// DEPRECATED: do not use default export.
export default Search
