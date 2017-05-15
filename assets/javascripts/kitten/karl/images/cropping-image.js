import React from 'react'
import classNames from 'classnames'
import Cropper from 'react-cropper'
import { Marger } from 'kitten/components/layout/marger'
import { Separator } from 'kitten/components/layout/separator'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Label } from 'kitten/components/form/label'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Uploader } from 'kitten/components/uploaders/uploader'
import { SliderWithTooltipAndPower }
  from 'kitten/components/sliders/slider-with-tooltip-and-power'
import Slider from 'kitten/components/form/slider'

export class KarlCroppingImage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.initialProps(),
      hasErrorOnUploader: false,
    }

    this.handleUploaderChange = this.handleUploaderChange.bind(this)
    this.handleUploaderError = this.handleUploaderError.bind(this)

    this.handleSliderChange = this.handleSliderChange.bind(this)
    this.handleSliderAction = this.handleSliderAction.bind(this)

    this.handleReady = this.handleReady.bind(this)
    this.handleCrop = this.handleCrop.bind(this)

    this.renderError = this.renderError.bind(this)
  }

  initialProps() {
    return {
      imageSrc: null,
      imageCropSrc: null,
      touched: false,
      sliderValue: 0,
      sliderMin: 0,
      sliderMax: 500,
    }
  }

  handleUploaderChange(file) {
    this.setState({
      imageSrc: file ? file : null,
      imageCropSrc: null,
      sliderValue: 0,
    })
  }

  handleUploaderError(hasError) {
    this.setState({
      hasErrorOnUploader: hasError,
    })

    if (this.state.hasErrorOnUploader) {
      this.setState(this.initialProps())
    }
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
    const min = this.state.sliderMin + ratio
    const max = this.state.sliderMax + ratio

    this.setState({
      sliderMin: min,
      sliderMax: max,
      sliderValue: min,
    })
  }

  handleCrop() {
    if (this.state.imageSrc) {
      const dataUrl = this.refs.cropper.getCroppedCanvas().toDataURL()

      this.setState({
        imageCropSrc: dataUrl,
      })
    }
  }

  getErrorLabel(error) {
    return this.props[`${ error }Label`] ? this.props[`${ error }Label`] : null
  }

  renderCropper() {
    const cropperProps = {
      ref: 'cropper',
      className: 'k-Cropper',
      src: this.state.imageSrc,
      style: { width: '480px', height: '270px' },
      aspectRatio: 16/9,
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
        <Cropper { ...cropperProps } />
      </Marger>
    )
  }

  renderCropperInfo() {
    return (
      <Marger key="cropper-info" top="2" bottom="2">
        <Paragraph modifier="quaternary" margin={ false }>
          Déplacez l’image dans le cadre pour obtenir le plan voulu.
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
      <Marger key="slider" top="1" bottom="2">
        <Slider { ...sliderProps } />
      </Marger>
    )
  }

  renderSliderTitle() {
    return (
      <Marger key="slider-title" top="2" bottom="1">
        <Label size="tiny">
          Zoom de l’image
        </Label>
      </Marger>
    )
  }

  renderImage() {
    if (!this.state.imageSrc) return

    return [
      this.renderCropper(),
      this.renderCropperInfo(),
      this.renderSliderTitle(),
      this.renderSlider(),
    ]
  }

  renderError(error) {
    if (!this.state.hasErrorOnUploader) return

    return (
      <p key={ `uploader-error` } className="k-FormInfo__error">
        { this.props.uploaderErrorLabel }
      </p>
    )
  }

  renderUploader() {
    const uploaderProps = {
      name: this.props.name,
      maxSize: 5242880, // 5 Mo.
      acceptedFiles: '.jpg,.jpeg,.gif,.png',
      onChange: this.handleUploaderChange,
      hasError: this.handleUploaderError,
    }

    return (
      <Uploader { ...uploaderProps } />
    )
  }

  render() {
    return (
      <Container>
        <Grid>
          <GridCol col="12">
            <Marger top="2" bottom="1">
              <Label size="tiny">
                Image de présentation
              </Label>
            </Marger>

            <Marger top="1" bottom="1">
              { this.renderUploader() }
            </Marger>

            { this.renderError() }

            <Marger top="1" bottom="1">
              <Paragraph modifier="quaternary" margin={ false }>
                Taille max : 5 Mo au format JPEG, PNG ou GIF.<br />
                Les dimensions recommandées sont 620x376 px.
              </Paragraph>
            </Marger>

            { this.renderImage() }

            <Marger top="2" bottom="2">
              <Separator />
            </Marger>

            <Paragraph>Preview</Paragraph>

            <Marger top="2" bottom="2">
              <img src={ this.state.imageCropSrc } alt="" />
            </Marger>
          </GridCol>
        </Grid>
      </Container>
    )
  }
}

KarlCroppingImage.defaultProps = {
  name: 'picture',
  uploaderErrorLabel: 'You have an error on upload.',
}
