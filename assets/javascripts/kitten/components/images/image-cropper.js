import React from 'react'
import Cropper from 'react-cropper'
import { Marger } from 'kitten/components/layout/marger'
import { Separator } from 'kitten/components/layout/separator'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Label } from 'kitten/components/form/label'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { SimpleUploader } from 'kitten/components/uploaders/simple-uploader'
import Slider from 'kitten/components/form/slider'
import domElementHelper from 'kitten/helpers/dom/element-helper'

export class ImageCropper extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.initialState(),
      hasErrorOnUploader: false,
      cropperWidth: null,
      cropperHeight: null,
      imageSrc: this.props.imageSrc,
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

  handleUploaderSuccess(data) {
    this.setState({
      imageSrc: data.file,
      imageCropSrc: null,
      fileName: data.name,
      sliderValue: 0,
    }, () => {
      this.setCropperHeight()
    })
  }

  handleUploaderError(hasError) {
    this.setState({
      hasErrorOnUploader: hasError,
    })

    if (hasError) {
      this.setState(this.initialState())
    }
  }

  handleUploaderReset() {
    this.setState(this.initialState())
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
    const ratio = width / naturalWidth * 100
    const min = this.props.sliderMin + ratio
    const max = this.props.sliderMax + ratio

    this.setState({
      sliderMin: min,
      sliderMax: max,
      sliderValue: min,
    })
  }

  handleCrop() {
    if (this.state.imageSrc) {
      const croppedCanvas = this.refs.cropper.getCroppedCanvas()

      if (croppedCanvas) {
        const imageCropSrc = croppedCanvas.toDataURL()

        this.setState({
          imageCropSrc: imageCropSrc,
        })

        this.props.onChange({
          value: imageCropSrc,
          name: this.state.fileName,
        })
      }
    }
  }

  setCropperHeight() {
    if (this.refs.cropperContainer) {
      const width = domElementHelper.getComputedWidth(this.refs.cropperContainer)
      const height = width * 9 / 16

      this.setState({
        cropperWidth: width,
        cropperHeight: height,
      })
    }
  }

  renderCropper() {
    const cropperProps = {
      ref: 'cropper',
      className: 'k-Cropper',
      src: this.state.imageSrc,
      style: {
        width: this.state.cropperWidth,
        height: this.state.cropperHeight,
      },
      aspectRatio: this.props.aspectRatio,
      viewMode: 3,
      guides: false,
      modal: false,
      autoCropArea: 1,
      cropBoxMovable: false,
      cropBoxResizable: false,
      toggleDragModeOnDblclick: false,
      zoomOnTouch: false,
      zoomOnWheel: false,
      dragMode: 'move',
      crop: this.handleCrop,
      ready: this.handleReady,
    }

    return (
      <Marger key="cropper" top="2" bottom="2">
        <div ref="cropperContainer">
          <Cropper
            // This helps unmount and remount a new cropper to keep
            // the component responsive.
            key={ `cropper-${ this.state.cropperHeight }` }
            { ...cropperProps } />
        </div>
      </Marger>
    )
  }

  renderCropperInfo() {
    return (
      <Marger top="2" bottom="2">
        <Paragraph modifier="quaternary" margin={ false }>
          { this.props.cropperInfo }
        </Paragraph>
      </Marger>
    )
  }

  renderSlider() {
    const sliderProps = {
      name: 'zoom',
      min: this.state.sliderMin,
      max: this.state.sliderMax,
      value: this.state.sliderValue,
      onChange: this.handleSliderChange,
      onAction: this.handleSliderAction,
    }

    return (
      <Marger top="1" bottom="2">
        <Slider { ...sliderProps } />
      </Marger>
    )
  }

  renderSliderTitle() {
    return (
      <Marger top="2" bottom="1">
        <Label size="tiny">
          { this.props.sliderTitle }
        </Label>
      </Marger>
    )
  }

  renderCroppingImage() {
    if (!this.state.imageSrc) return

    return (
      <Grid>
        <GridCol col="12" col-m="6">
          { this.renderCropper() }
        </GridCol>

        <GridCol col="12" col-m="6">
          { this.renderCropperInfo() }
          { this.renderSliderTitle() }
          { this.renderSlider() }
        </GridCol>
      </Grid>
    )
  }

  renderError(error) {
    if (!this.state.hasErrorOnUploader) return

    return (
      <Marger top="1" bottom="1" key={ `uploader-error` }>
        <span className="k-FormInfo__error">
          { this.props.uploaderErrorLabel }
        </span>
      </Marger>
    )
  }

  renderUploader() {
    const uploaderProps = {
      name: this.props.name,
      maxSize: 5242880, // 5 Mo.
      acceptedFiles: this.props.acceptedFiles,
      onSuccess: this.handleUploaderSuccess,
      onError: this.handleUploaderError,
      onReset: this.handleUploaderReset,
      buttonLabel: this.props.buttonLabel,
      fileName: this.props.fileName,
    }

    return (
      <SimpleUploader { ...uploaderProps } />
    )
  }

  render() {
    return (
      <section>
        <Grid>
          <GridCol col="12">
            <Marger top="1" bottom="1">
              <Label size="tiny">
                { this.props.label }
              </Label>
            </Marger>

            <Marger top="1" bottom="1">
              { this.renderUploader() }
            </Marger>

            { this.renderError() }

            <Marger top="1" bottom="1">
              <Paragraph modifier="quaternary" margin={ false }>
                { this.props.description }
              </Paragraph>
            </Marger>
          </GridCol>
        </Grid>

        { this.renderCroppingImage() }
      </section>
    )
  }
}

ImageCropper.defaultProps = {
  name: 'picture',
  imageSrc: null,
  fileName: null,
  uploaderErrorLabel: 'Lorem ipsum…',
  sliderMin: 0,
  sliderMax: 500,
  aspectRatio: 16/9,
  acceptedFiles: '.jpg,.jpeg,.gif,.png',
  label: 'Lorem ipsum…',
  cropperInfo: 'Lorem ipsum…',
  sliderTitle: 'Lorem ipsum…',
  buttonLabel: 'Lorem ipsum…',
  description: 'Lorem ipsum…',

  onChange: (_fileData) => {},
}
