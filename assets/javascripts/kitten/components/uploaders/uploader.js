import React from 'react'
import classNames from 'classnames'
import Dropzone from 'react-dropzone'

export class Uploader extends React.Component {
  constructor(props) {
    super(props)

    this.handleChangeAcceptedFiles = this.handleChangeAcceptedFiles.bind(this)
    this.handleChangeRejectedFiles = this.handleChangeRejectedFiles.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleChangeAcceptedFiles(acceptedFiles) {
    const file = acceptedFiles[0]

    this.props.onChange(file.preview)
    this.props.hasError(false)
  }

  handleChangeRejectedFiles(rejectedFiles) {
    this.props.onChange()
    this.props.hasError(true)
  }

  handleCancel() {
    this.props.onChange()
  }

  render() {
    return (
      <Dropzone
        name={ this.props.name }
        accept={ this.props.acceptedFiles }
        maxSize={ this.props.maxSize }
        onDropAccepted={ this.handleChangeAcceptedFiles }
        onDropRejected={ this.handleChangeRejectedFiles }
        onFileDialogCancel={ this.handleCancel }
        disablePreview={ false }
        multiple={ false }
        style={ {
          borderRadius: '8px',
          border: '1px dashed #d8d8d8',
          width: '90px',
          height: '90px',
        } } />
    )
  }
}

Uploader.defaultProps = {
  name: null,
  acceptedFiles: '.jpg', // Separate the values with a comma: '.jpg,.png'.
  maxSize: null,
  onChange: () => {},
  hasError: () => {},
}
