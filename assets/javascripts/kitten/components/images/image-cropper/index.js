import React from 'react'
import Cropper from 'react-cropper'
import { Marger } from '../../../components/layout/marger'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Text } from '../../../components/typography/text'
import { Label } from '../../../components/form/label'
import { Paragraph } from '../../../components/typography/paragraph'
import { SimpleUploader } from '../../../components/uploaders/simple-uploader'
import { Slider } from '../../../components/form/slider'
import { domElementHelper } from '../../../helpers/dom/element-helper'

export class ImageCropper extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.initialState(),
      hasErrorOnUploader: false,
      cropperWidth: null,
      cropperHeight: null,
      imageSrc: this.props.imageSrc,
      fileName: this.props.fileName,
    }

    this.handleUploaderSuccess = this.handleUploaderSuccess.bind(this)
    this.handleUploaderError = this.handleUploaderError.bind(this)
    this.handleUploaderReset = this.handleUploaderReset.bind(this)

    this.handleSliderChange = this.handleSliderChange.bind(this)
    this.handleSliderAction = this.handleSliderAction.bind(this)

    this.handleReady = this.handleReady.bind(this)
    this.handleCrop = this.handleCrop.bind(this)

    this.renderError = this.renderError.bind(this)
    this.setCropperHeight = this.setCropperHeight.bind(this)
  }

  initialState() {
    return {
      imageSrc: null,
      imageCropSrc: null,
      fileName: null,
      touched: false,
      sliderValue: 0,
      sliderMin: this.props.sliderMin,
      sliderMax: this.props.sliderMax,
    }
  }

  componentDidMount() {
    this.setCropperHeight()

    window.addEventListener('resize', this.setCropperHeight)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setCropperHeight)
  }

  handleUploaderSuccess(data) {
    this.setState(
      {
        imageSrc: data.preview,
        imageCropSrc: null,
        fileName: data.name,
        sliderValue: 0,
      },
      this.setCropperHeight,
    )
  }

  handleUploaderError(hasError) {
    const resetState = hasError ? this.initialState() : {}

    this.setState({
      hasErrorOnUploader: hasError,
      ...resetState,
    })
  }

  handleUploaderReset() {
    this.setState(this.initialState())

    this.props.onChange({
      value: null,
      name: null,
    })
  }

  handleSliderChange(value) {
    this.setState({
      sliderValue: value,
    })

    this.refs.cropper.zoomTo(value / 100)
  }

  handleSliderAction() {
    this.setState({ touched: true })
  }

  // Calculate the right range for the zoom slider.
  handleReady() {
    const imageData = this.refs.cropper.getImageData()
    const naturalWidth = imageData.naturalWidth
    const width = imageData.width
    const ratio = (width / naturalWidth) * 100
    const min = this.props.sliderMin + ratio
    const max = this.props.sliderMax + ratio

    this.setState({
      sliderMin: min,
      sliderMax: max,
      sliderValue: min,
    })
  }

  handleCrop() {
    if (!this.state.imageSrc) return

    const croppedCanvas = this.refs.cropper.getCroppedCanvas()

    if (croppedCanvas) {
      const imageCropSrc = croppedCanvas.toDataURL()

      this.setState({
        imageCropSrc: imageCropSrc,
      })

      this.props.onChange({
        value: imageCropSrc,
        base: this.state.imageSrc,
        name: this.state.fileName,
        cropperData: this.refs.cropper.getData(),
      })
    }
  }

  setCropperHeight() {
    if (this.cropperContainer) {
      const width = domElementHelper.getComputedWidth(this.cropperContainer)
      const height = width / this.props.aspectRatio

      this.setState({
        cropperWidth: width,
        cropperHeight: height,
      })
    }
  }

  renderCropper() {
    const styles = {
      width: this.state.cropperWidth,
      height: this.state.cropperHeight,
    }
    const dragMode =
      this.props.disabled || !this.props.isCropEnabled ? 'none' : 'move'

    return (
      <Marger top="2" key="cropper">
        <div
          ref={node => {
            this.cropperContainer = node
          }}
        >
          {this.state.cropperWidth && this.state.cropperHeight && (
            <Cropper
              // This helps unmount and remount a new cropper to keep
              // the component responsive.
              key={`cropper-${this.state.cropperHeight}`}
              ref="cropper"
              className="k-Cropper"
              src={this.state.imageSrc}
              style={styles}
              aspectRatio={this.props.aspectRatio}
              viewMode={3}
              guides={false}
              modal={false}
              autoCropArea={1}
              cropBoxMovable={false}
              cropBoxResizable={false}
              toggleDragModeOnDblclick={false}
              zoomOnTouch={false}
              zoomOnWheel={false}
              dragMode={dragMode}
              crop={this.handleCrop}
              ready={this.handleReady}
            />
          )}
        </div>
      </Marger>
    )
  }

  renderCropperInfo() {
    return (
      <Marger top="2" bottom="1.5">
        <Paragraph modifier="quaternary" margin={false}>
          {this.props.cropperInfo}
        </Paragraph>
      </Marger>
    )
  }

  renderSlider() {
    return (
      <Marger top="1">
        <Slider
          name="zoom"
          min={this.state.sliderMin}
          max={this.state.sliderMax}
          value={this.state.sliderValue}
          onChange={this.handleSliderChange}
          onAction={this.handleSliderAction}
        />
      </Marger>
    )
  }

  renderSliderTitle() {
    return (
      <Marger top="1.5" bottom="1">
        <Label size="micro">{this.props.sliderTitle}</Label>
      </Marger>
    )
  }

  renderSliderAndCropperInfo() {
    if (this.props.disabled) return

    return (
      <GridCol col="12" col-m="6">
        {this.renderCropperInfo()}
        {this.renderSliderTitle()}
        {this.renderSlider()}
      </GridCol>
    )
  }

  renderCroppingImage() {
    if (!this.state.imageSrc) return

    return (
      <Grid>
        <GridCol col="12" col-m="6">
          {this.renderCropper()}
        </GridCol>

        {this.props.isCropEnabled && this.renderSliderAndCropperInfo()}
      </Grid>
    )
  }

  renderError() {
    if (!this.state.hasErrorOnUploader) return

    return (
      <Marger top="1" bottom="1">
        <Text color="error" size="tiny" weight="regular">
          {this.props.uploaderErrorLabel}
        </Text>
      </Marger>
    )
  }

  renderUploader() {
    return (
      <SimpleUploader
        name={this.props.name}
        maxSize={this.props.maxSize}
        acceptedFiles={this.props.acceptedFiles}
        onSuccess={this.handleUploaderSuccess}
        onError={this.handleUploaderError}
        onReset={this.handleUploaderReset}
        buttonLabel={this.props.buttonLabel}
        fileName={this.props.fileName}
        disabled={this.props.disabled}
        deletable={this.props.deletable}
        base64={this.props.base64}
      />
    )
  }

  render() {
    return (
      <section>
        <Grid>
          <GridCol col="12">
            <Marger bottom="1.5">
              <Label size="tiny">{this.props.label}</Label>
            </Marger>

            <Marger top="1.5" bottom="1">
              {this.renderUploader()}
            </Marger>

            {this.renderError()}

            <Marger top="1">
              <Paragraph modifier="quaternary" margin={false}>
                {this.props.description}
              </Paragraph>
            </Marger>
          </GridCol>
        </Grid>

        {this.renderCroppingImage()}
      </section>
    )
  }
}

ImageCropper.defaultProps = {
  name: 'picture',
  imageSrc: null,
  fileName: null,
  uploaderErrorLabel: 'You have an error on upload.',
  sliderMin: 0,
  sliderMax: 500,
  aspectRatio: 16 / 9,
  maxSize: 5 * 1024 * 1024, // 5 Mo.
  acceptedFiles: '.jpg,.jpeg,.gif,.png',
  label: 'Lorem ipsum…',
  cropperInfo: 'Move the image…',
  sliderTitle: 'Zoom…',
  buttonLabel: 'Choose a file…',
  description: 'Lorem ipsum…',
  disabled: false,
  isCropEnabled: true,
  base64: true,

  onChange: _fileData => {},
}
