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

export class KarlCroppingImage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageSrc: null,
      imageCropSrc: null,
      touched: false,
      sliderValue: 1,
      errors: {},
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleErrors = this.handleErrors.bind(this)

    this.handleSliderChange = this.handleSliderChange.bind(this)
    this.handleSliderAction = this.handleSliderAction.bind(this)

    this.handleCrop = this.handleCrop.bind(this)
  }

  handleChange(file) {
    console.log('file ---> ', file)

    this.setState({
      imageSrc: file ? file.target.result : null,
      sliderValue: 1,
    })
  }

  handleErrors(errors) {
    console.log('errors ---> ', errors)

    this.setState({
      errors: errors,
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

  handleCrop() {
    const dataUrl = this.refs.cropper.getCroppedCanvas().toDataURL()

    this.setState({
      imageCropSrc: dataUrl,
    })
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
    }

    return (
      <Marger top="2" bottom="2">
        <Cropper { ...cropperProps } />
      </Marger>
    )
  }

  renderCropperInfo() {
    return (
      <Marger top="2" bottom="2">
        <Paragraph modifier="quaternary" margin={ false }>
          Déplacez l’image dans le cadre pour obtenir le plan voulu.
        </Paragraph>
      </Marger>
    )
  }

  renderSlider() {
    const sliderProps = {
      name: 'zoom',
      min: '1',
      max: '500',
      value: this.state.sliderValue,
      onChange: this.handleSliderChange,
      onAction: this.handleSliderAction,
      tooltipText: `${ this.state.sliderValue } %`,
    }

    return (
      <Marger top="1" bottom="2">
        <SliderWithTooltipAndPower { ...sliderProps } />
      </Marger>
    )
  }

  renderSliderTitle() {
    return (
      <Marger top="2" bottom="1">
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

  render() {
    const uploaderProps = {
      name: this.props.name,
      maxSize: 5242880, // 5 Mo.
      acceptedFiles: '.jpg,.jpeg,.gif,.png',
      onChange: this.handleChange,
      onError: this.handleErrors,
    }

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
              <Uploader { ...uploaderProps } />
            </Marger>

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
              <img
                src={ this.state.imageCropSrc }
                alt="" />
            </Marger>
          </GridCol>
        </Grid>
      </Container>
    )
  }
}

KarlCroppingImage.defaultProps = {
  name: 'picture',
}
