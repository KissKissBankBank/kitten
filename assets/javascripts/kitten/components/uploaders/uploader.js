import React from 'react'
import Dropzone from 'react-dropzone'
import { UploaderThemes }
  from 'kitten/components/uploaders/uploader-themes'

let dropzoneRef

export class Uploader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fileName: this.props.fileName,
    }

    this.handleChangeAcceptedFiles = this.handleChangeAcceptedFiles.bind(this)
    this.handleChangeRejectedFiles = this.handleChangeRejectedFiles.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleChangeAcceptedFiles(acceptedFiles) {
    const file = acceptedFiles[0]

    this.setState({
      fileName: file.name,
    })

    this.props.onChange(file.preview)
    this.props.hasError(false)
  }

  handleChangeRejectedFiles(rejectedFiles) {
    this.props.onChange()
    this.props.hasError(true)
  }

  handleClick() {
    dropzoneRef.open()
  }

  handleCancel() {
    this.setState({
      fileName: null,
    })

    this.props.onChange()
  }

  renderTheme() {
    const Theme = this.props.theme

    return (
      <Theme
        buttonLabel={ this.props.buttonLabel }
        fileName={ this.state.fileName }
        onClick={ this.handleClick }
        onCancel={ this.handleCancel } />
    )
  }

  render() {
    return (
      <Dropzone
        ref={ node => { dropzoneRef = node } }
        name={ this.props.name }
        accept={ this.props.acceptedFiles }
        maxSize={ this.props.maxSize }
        onDropAccepted={ this.handleChangeAcceptedFiles }
        onDropRejected={ this.handleChangeRejectedFiles }
        disableClick={ true }
        multiple={ false }
        style={ {} }
        children={ this.renderTheme() } />
    )
  }
}

Uploader.defaultProps = {
  name: null,
  acceptedFiles: 'image/*',
  maxSize: null,
  fileName: null,
  theme: UploaderThemes.Light,
  buttonLabel: 'Lorem ipsum…',
  onChange: () => {},
  hasError: () => {},
}
