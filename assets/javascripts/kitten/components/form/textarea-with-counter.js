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
      limit: this.props.limit,
      counter: this.props.limit
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.getLimit()
  }

  handleChange() {
    this.setState({
      counter: this.charactersRemaining()
    })
  }

  getLimit() {
    fetch('/kitten/projects/default-props')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          limit: data.limit,
          counter: data.limit
        })
      })
  }

  charactersRemaining() {
    if (!this.refs.textareaWithCounter.value)
      return this.state.limit

    return this.state.limit - this.refs.textareaWithCounter.value.length
  }

  render() {
    const { id, label, rows, placeholder, textareaValue } = this.props

    return (
      <div>
        <label htmlFor={ id }>{ label }</label>
        <textarea ref="textareaWithCounter"
                  id={ id }
                  className="k-TextInput"
                  rows={ rows }
                  maxLength={ this.state.limit }
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
