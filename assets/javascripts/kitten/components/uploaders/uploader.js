import React from 'react'
import Dropzone from 'react-dropzone'

export class Uploader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fileName: this.props.fileName,
    }

    this.handleChangeAcceptedFiles = this.handleChangeAcceptedFiles.bind(this)
    this.handleChangeRejectedFiles = this.handleChangeRejectedFiles.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleBase64Return = file => {
    const reader = new FileReader()
    reader.onload = event => {
      this.props.onSuccess({
        file: file,
        preview: event.target.result,
        name: file.name,
      })
    }
    reader.readAsDataURL(file)
  }

  handleChangeAcceptedFiles(acceptedFiles) {
    const file = acceptedFiles[0]

    this.setState({
      fileName: file.name,
    })

    if (this.props.base64) {
      this.handleBase64Return(file)
    } else {
      this.props.onSuccess({
        file: file,
        preview: file.preview,
        name: file.name,
      })
    }

    this.props.onError(false)
  }

  handleChangeRejectedFiles() {
    this.props.onError(true)

    this.handleCancel()
  }

  handleClick() {
    this.dropzoneRef.open()
  }

  handleCancel() {
    this.setState({
      fileName: null,
    })

    this.props.onReset()
  }

  renderTheme() {
    if (!this.props.theme) return

    const Theme = this.props.theme

    return (
      <Theme
        buttonLabel={this.props.buttonLabel}
        fileName={this.state.fileName}
        onClick={this.handleClick}
        onCancel={this.handleCancel}
        disabled={this.props.disabled}
        deletable={this.props.deletable}
      />
    )
  }

  render() {
    return (
      <Dropzone
        ref={node => {
          this.dropzoneRef = node
        }}
        name={this.props.name}
        accept={this.props.acceptedFiles}
        maxSize={this.props.maxSize}
        onDropAccepted={this.handleChangeAcceptedFiles}
        onDropRejected={this.handleChangeRejectedFiles}
        disableClick
        multiple={false}
        style={{}}
      >
        {this.renderTheme()}
      </Dropzone>
    )
  }
}

Uploader.defaultProps = {
  name: null,
  acceptedFiles: 'image/*',
  maxSize: null,
  fileName: null,
  theme: null,
  buttonLabel: 'Choose a file',
  onSuccess: () => {},
  onError: () => {},
  onReset: () => {},
  disabled: false,
  base64: false,
}
