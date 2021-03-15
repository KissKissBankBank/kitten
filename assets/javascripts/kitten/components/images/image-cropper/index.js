import React, { useEffect, useState, useRef } from 'react'
import classNames from 'classnames'
import Cropper from 'react-cropper'
import getOr from 'lodash/fp/getOr'
import { Label } from '../../../components/form/label'
import { Paragraph } from '../../../components/typography/paragraph/next'
import { BasicUploader } from '../../../components/uploaders/basic-uploader'
import { RangeSlider } from '../../../components/form/range-slider'
import { domElementHelper } from '../../../helpers/dom/element-helper'
import { StyledCropper } from './styles'

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
  className,
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
  const [initialSliderValue, setInitialSliderValue] = useState(0)
  const [uploadedFile, setUploadedFile] = useState(null)
  const [resultData, setResultData] = useState(null)

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
      setInitialSliderValue(min)
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
  useEffect(() => {
    if (fileNameState && resultData) {
      onChange({
        value: resultData.target.src,
        base: getOr(resultData.srcElement.src)('originalTarget.src')(
          resultData,
        ),
        name: fileNameState,
        file: uploadedFile,
        cropperData: resultData.detail,
      })
    }
  }, [resultData, fileNameState, uploadedFile])
  const dragMode = disabled || !isCropEnabled ? 'none' : 'move'
  return (
    <StyledCropper className={classNames('k-UploadAndCropper', className)}>
      <Label
        size="tiny"
        htmlFor={name}
        className="k-u-margin-bottom-singleHalf"
      >
        {label}
      </Label>

      <BasicUploader
        id={name}
        className="k-u-margin-top-singleHalf k-u-margin-bottom-single"
        fileName={fileNameState}
        buttonText={buttonLabel}
        disabled={disabled}
        errorText={errorText}
        status={status}
        fileInputProps={{ accept: acceptedFiles }}
        onUpload={e => {
          try {
            const file = e.currentTarget.files[0]
            setUploadedFile(file)
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
          setUploadedFile(null)

          onChange({
            value: null,
            name: null,
            file: null,
          })
        }}
      />
      <Paragraph modifier="tertiary" noMargin className="k-u-margin-top-single">
        {description}
      </Paragraph>
      <div
        className="k-Cropper__wrapper k-u-margin-top-double"
        aria-live="polite"
      >
        {imageSrcState && (
          <>
            <div
              ref={cropperContainerRef}
              className="k-Cropper__wrapper__cropper"
            >
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
                    setResultData(result)
                  }}
                />
              )}
            </div>

            {isCropEnabled && !disabled && (
              <div className="k-Cropper__wrapper__slider">
                <Paragraph
                  modifier="tertiary"
                  noMargin
                  className="k-u-margin-bottom-singleHalf"
                >
                  {cropperInfo}
                </Paragraph>
                <Label
                  size="micro"
                  htmlFor="zoomSlider"
                  className="k-u-margin-top-singleHalf k-u-margin-bottom-single"
                >
                  {sliderTitle}
                </Label>
                <RangeSlider
                  id="zoomSlider"
                  name="zoom"
                  min={sliderMin}
                  max={sliderMax}
                  step="any"
                  initialValue={initialSliderValue}
                  onChange={event => {
                    const value = event.target.value
                    cropperInstance && cropperInstance.zoomTo(value / 100)
                  }}
                  className="k-u-margin-top-single"
                />
              </div>
            )}
          </>
        )}
      </div>
    </StyledCropper>
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
