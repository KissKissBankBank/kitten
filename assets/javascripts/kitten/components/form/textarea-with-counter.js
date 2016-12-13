import React from 'react'

class Counter extends React.Component {
  render() {
    return (
      <span className="k-TextareaWithCounter__counter">
        { this.props.counter }
      </span>
    )
  }
}

class TextareaWithCounter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: this.props.limit
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.setState({
      counter: this.charactersRemaining()
    })
  }

  charactersRemaining() {
    if (!this.refs.textareaWithCounter.value)
      return this.props.limit

    return this.props.limit - this.refs.textareaWithCounter.value.length
  }

  render() {
    const { id, label, rows, placeholder, textareaValue, limit } = this.props

    return (
      <div>
        <label htmlFor={ id }>{ label }</label>
        <textarea ref="textareaWithCounter"
                  className="k-TextInput"
                  rows={ rows }
                  maxLength={ limit }
                  placeholder={ placeholder }
                  onChange={ this.handleChange }>{ textareaValue }</textarea>
        <Counter counter={ this.state.counter } />
      </div>
    )
  }
}

TextareaWithCounter.defaultProps = {
  id: null,
  label: null,
  rows: 7,
  placeholder: null,
  value: null,
  limit: 200,
}

export default TextareaWithCounter
