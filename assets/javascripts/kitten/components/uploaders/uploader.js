import React from 'react'
import classNames from 'classnames'

export class Uploader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: {
        extensionsError: false,
        sizeError: false,
        hasError: false,
      },
    }

    this.handleChange = this.handleChange.bind(this)
  }

  checkExtensions(file) {
    if (!this.props.acceptedFiles) return

    const extensions = this.props.acceptedFiles.split(',')
    const regex = new RegExp(`(${ extensions.join('|') })`)

    this.setState({
      errors: {
        ...this.state.errors,
        extensionsError: file.type.search(regex) < 1,
      }
    })
  }

  checkSize(file) {
    this.setState({
      errors: {
        ...this.state.errors,
        sizeError: this.props.maxSize && file.size > this.props.maxSize,
      }
    })
  }

  updateHasError() {
    const errors = this.state.errors

    this.setState({
      errors: {
        ...errors,
        hasError: errors.extensionsError || errors.sizeError,
      }
    })
  }

  handleChange(event) {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = event => {
      this.checkExtensions(file)
      this.checkSize(file)
      this.updateHasError()

      this.props.onError(this.state.errors)

      if (!this.state.errors.hasError) {
        this.props.onChange(event)
      }
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  render() {
    return (
      <input
        type="file"
        name={ this.props.name }
        accept={ this.props.acceptedFiles }
        onChange={ this.handleChange } />
    )
  }
}

Uploader.defaultProps = {
  name: null,
  acceptedFiles: '.jpg',
  maxSize: null,
  onChange: () => {},
  onError: () => {},
}
