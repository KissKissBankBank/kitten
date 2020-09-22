import React, { useEffect, useState, useRef } from 'react'
import Cropper from 'react-cropper'
import getOr from 'lodash/fp/getOr'
import { Marger } from '../../../components/layout/marger'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Label } from '../../../components/form/label'
import { Paragraph } from '../../../components/typography/paragraph'
import { BasicUploader } from '../../../components/uploaders/basic-uploader'
import { Slider } from '../../../components/form/slider'
import { domElementHelper } from '../../../helpers/dom/element-helper'

export const ImageCropper = ({
  imageSrc,
  fileName,
  aspectRatio,
  disabled,
  isCropEnabled,
  label,
  name,
  maxSize,
  acceptedFiles,
  onChange,
  buttonLabel,
  uploaderErrorLabel,
  description,
  cropperInfo,
  sliderTitle,
}) => {
  const cropperContainerRef = useRef(null)
  const cropperRef = useRef(null)
  const [imageSrcState, setImageSrc] = useState(imageSrc)
  const [fileNameState, setFileName] = useState(fileName)
  const [status, setStatus] = useState('ready')
  const [errorText, setErrorText] = useState('')
  const [cropperWidth, setCropperWidth] = useState(0)
  const [cropperHeight, setCropperHeight] = useState(0)
  const [cropperInstance, setCropperInstance] = useState(null)
  const [sliderMin, setSliderMin] = useState(0)
  const [sliderMax, setSliderMax] = useState(100)
  const [sliderValue, setSliderValue] = useState(0)

  useEffect(() => {
    if (cropperInstance && cropperInstance.imageData.naturalWidth) {
      const imageData = cropperInstance.imageData
      const naturalWidth = imageData.naturalWidth
      const width = imageData.width
      const ratio = (width / naturalWidth) * 100
      const min = sliderMin + ratio
      const max = sliderMax + ratio
      setSliderMin(min)
      setSliderMax(max)
      setSliderValue(min)
    }
  }, [getOr(null)('imageData.naturalWidth')(cropperInstance)])
  const setCropperSize = () => {
    if (cropperContainerRef) {
      const width = domElementHelper.getComputedWidth(
        cropperContainerRef.current,
      )
      const height = width / aspectRatio
      setCropperWidth(width)
      setCropperHeight(height)
    }
  }

  useEffect(() => {
    setCropperSize()
    window.addEventListener('resize', setCropperSize)
    return () => window.removeEventListener('resize', setCropperSize)
  }, [])
  useEffect(() => {
    setCropperSize()
  }, [imageSrcState])
  const styles = {
    width: cropperWidth,
    height: cropperHeight,
  }
  const dragMode = disabled || !isCropEnabled ? 'none' : 'move'
  return (
    <>
      <Marger bottom="1.5">
        <Label size="tiny">{label}</Label>
      </Marger>

      <Marger top="1.5" bottom="1">
        <BasicUploader
          id={name}
          fileName={fileNameState}
          buttonText={buttonLabel}
          disabled={disabled}
          errorText={errorText}
          status={status}
          fileInputProps={{ accept: acceptedFiles }}
          onUpload={e => {
            try {
              const file = e.currentTarget.files[0]
              if (file.size > maxSize) {
                setStatus('error')
                setErrorText(uploaderErrorLabel)
              } else {
                const reader = new FileReader()
                reader.onload = event => {
                  setImageSrc(event.target.result)
                  setFileName(file.name)
                }
                reader.readAsDataURL(file)
              }
            } catch (e) {
              setStatus('error')
              setErrorText(uploaderErrorLabel)
            }
          }}
          onCancel={() => {
            setImageSrc(imageSrc)
            setFileName(fileName)
            setErrorText('')

            onChange({
              value: null,
              name: null,
            })
          }}
        />
      </Marger>

      <Marger top="1">
        <Paragraph modifier="quaternary" margin={false}>
          {description}
        </Paragraph>
      </Marger>

      {imageSrcState && (
        <Grid>
          <GridCol col="12" col-m="6">
            <Marger top="2">
              <div ref={cropperContainerRef}>
                {cropperWidth && cropperHeight && (
                  <Cropper
                    onInitialized={instance => {
                      setCropperInstance(instance)
                    }}
                    ref={cropperRef}
                    className="k-Cropper"
                    src={imageSrcState}
                    style={styles}
                    initialAspectRatio={aspectRatio}
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
                    crop={result => {
                      onChange({
                        value: result.target.src,
                        base: getOr(result.srcElement.src)(
                          'originalTarget.src',
                        )(result),
                        name: fileNameState,
                        cropperData: result.detail,
                      })
                    }}
                  />
                )}
              </div>
            </Marger>
          </GridCol>

          {isCropEnabled && !disabled && (
            <GridCol col="12" col-m="6">
              <Marger top="2" bottom="1.5">
                <Paragraph modifier="quaternary" margin={false}>
                  {cropperInfo}
                </Paragraph>
              </Marger>
              <Marger top="1.5" bottom="1">
                <Label size="micro">{sliderTitle}</Label>
              </Marger>
              <Marger top="1">
                <Slider
                  name="zoom"
                  min={sliderMin}
                  max={sliderMax}
                  value={sliderValue}
                  onChange={value => {
                    setSliderValue(value)
                    cropperInstance.zoomTo(value / 100)
                  }}
                />
              </Marger>
            </GridCol>
          )}
        </Grid>
      )}
    </>
  )
}

ImageCropper.defaultProps = {
  name: 'picture',
  imageSrc: null,
  fileName: null,
  uploaderErrorLabel: 'You have an error on upload.',
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
  onChange: _fileData => {},
}
