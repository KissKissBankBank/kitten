import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { UploadIcon } from '../../../../components/graphics/icons/upload-icon'
import { CloseButton } from '../../../../components/molecules/buttons/close-button'
import { Text } from '../../../../components/atoms/typography/text'
import { ImageCropper } from './components/image-cropper'
import { pauseEvent } from './utils/pause-event'
import { areImageDimensionsValid } from './utils/image-dimensions-check'

const CROP_WIDTH = 125

const StyledImageDropUploader = styled.div`
  input[type='file'] {
    border: 0;
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute !important;
    white-space: nowrap;
    width: 1px;
  }

  input[type='file']:focus + label {
    outline: ${COLORS.primary4} solid ${pxToRem(2)};
    outline-offset: ${pxToRem(2)};
  }
  input[type='file']:focus:not(:focus-visible) + label {
    outline-color: transparent;
  }
  input[type='file']:focus-visible + label {
    outline-color: ${COLORS.primary4};
  }

  .k-ImageDropUploader__button {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    padding: ${pxToRem(15)};
    border-radius: ${pxToRem(8)};
    border: ${pxToRem(2)} dashed ${COLORS.line1};

    flex-direction: column;
    align-items: center;
    gap: ${pxToRem(10)};

    text-align: center;
    color: ${COLORS.font1};
    cursor: pointer;

    transition: border-color 0.2s ease, color 0.2s ease;

    > * {
      pointer-events: none;
    }

    &:hover {
      border-color: ${COLORS.primary4};
      color: ${COLORS.primary1};
    }
  }

  input[type='file']:active:not(:disabled) + .k-ImageDropUploader__button {
    border-color: ${COLORS.primary1};
    color: ${COLORS.primary1};
  }
  &.k-ImageDropUploader--isDraggingOver .k-ImageDropUploader__button {
    border-color: ${COLORS.primary1};
    color: ${COLORS.primary1};
    border-style: solid;
  }

  &.k-ImageDropUploader--error {
    .k-ImageDropUploader__button,
    .k-ImageDropUploader__manager {
      border-color: ${COLORS.error2};
      border-style: solid;
    }
  }

  &.k-ImageDropUploader--disabled {
    .k-ImageDropUploader__button,
    .k-ImageDropUploader__manager {
      border-color: ${COLORS.line2};
      background-color: ${COLORS.background2};
      color: ${COLORS.grey1};
      cursor: not-allowed;
    }
    .k-ImageDropUploader__manager__cropper {
      pointer-events: none;
      background-color: ${COLORS.background2};

      img {
        filter: grayscale(1) opacity(0.4);
      }
    }
  }

  .k-ImageDropUploader__button__title,
  .k-ImageDropUploader__manager__title {
    ${TYPOGRAPHY.fontStyles.regular}
    font-size: ${stepToRem(-1)};
  }
  .k-ImageDropUploader__button__text,
  .k-ImageDropUploader__manager__text {
    ${TYPOGRAPHY.fontStyles.light}
    font-size: ${stepToRem(-2)};
  }

  .k-ImageDropUploader__manager {
    border-radius: ${pxToRem(8)};
    padding: ${pxToRem(15)} ${pxToRem(45)} ${pxToRem(15)} ${pxToRem(15)};
    width: 100%;
    position: relative;
    box-sizing: border-box;
    border: ${pxToRem(2)} solid ${COLORS.line1};

    display: flex;
    gap: ${pxToRem(15)};
  }
  .k-ImageDropUploader__manager__cropper {
    background-color: ${COLORS.primary4};
    flex: 0 0 ${pxToRem(CROP_WIDTH)};
    width: ${pxToRem(CROP_WIDTH)};
    height: var(--ImageDropUploader-cropHeight, ${pxToRem(CROP_WIDTH)});
    overflow: hidden;
    position: relative;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: var(--ImageDropUploader-cropX, 0)
        var(--ImageDropUploader-cropY, 0);
      pointer-events: none;
      -moz-user-select: none;
    }
  }
  .k-ImageDropUploader__manager__content {
    align-self: center;
  }
  .k-ImageDropUploader__manager__cancelButton {
    position: absolute;
    top: ${pxToRem(-2)};
    right: ${pxToRem(-2)};
    border-top-right-radius: ${pxToRem(8)};
  }

  .k-ImageDropUploader__imageCropper {
    cursor: grab;

    &:focus {
      outline: ${COLORS.primary4} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(2)};
    }
    &:focus:not(:focus-visible) {
      outline-color: transparent;
    }
    &:focus-visible {
      outline-color: ${COLORS.primary4};
    }

    &.k-ImageDropUploader__imageCropper--isDragging {
      cursor: grabbing;
    }
  }
`

const getCropHeight = ratio => CROP_WIDTH / ratio

export const ImageDropUploader = ({
  id,
  acceptedFileSize = 5 * 1024 * 1024,
  acceptedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  acceptedImageDimensions = { width: 4096, height: 4096 },
  buttonProps = {},
  buttonText = '',
  buttonTitle = '',
  canCancel = true,
  cancelButtonText = '',
  className = '',
  canCrop = true,
  cropRatio = 16 / 10,
  disabled = false,
  error = false,
  errorMessage = null,
  fileInputProps = {},
  initialCrop = null,
  initialValue = '',
  managerText = '',
  managerTitle = '',
  onCancel = () => {},
  onChange = () => {},
  onUpload = () => {},
  quantityErrorText = '',
  sizeErrorText = '',
  status = 'ready',
  typeErrorText = '',
  dimensionErrorText = '',
}) => {
  const [internalStatus, setInternalStatus] = useState(status)
  useEffect(() => setInternalStatus(status), [status])

  const [isDraggingOver, setDraggingOver] = useState(false)
  const [imageRawData, setImageRawData] = useState(null)
  const [imageDataURL, setImageDataURL] = useState(initialValue)
  const [cropperData, setCropperData] = useState({})
  const [internalInitialCrop, setInternalInitialCrop] = useState(initialCrop)
  const [isError, setError] = useState(error)
  const [internalErrorMessage, setErrorMessage] = useState(errorMessage)

  useEffect(() => {
    if (initialValue !== '') {
      setInternalStatus('manage')
    }

    setImageDataURL(initialValue)
  }, [initialValue])

  const handleDragEnter = e => {
    pauseEvent(e)
    if (!isDraggedFileListValid(e)) return

    setDraggingOver(true)
    setError(false)
  }
  const handleDragLeave = e => {
    pauseEvent(e)

    setDraggingOver(false)
    setError(false)
  }
  const handleDragOver = e => {
    pauseEvent(e)
  }

  const handleDrop = e => {
    pauseEvent(e)

    setDraggingOver(false)
    setError(false)

    if (!isDraggedFileListValid(e)) return

    setInternalStatus('manage')

    const image = e.dataTransfer.files[0]
    setImageRawData(image)
  }

  const onFileInputChange = e => {
    setInternalStatus('manage')
    const image = e.target.files[0]
    setImageRawData(image)
  }

  const handleCancelClick = () => {
    setImageRawData(null)
    setImageDataURL('')
    setCropperData({})
    setInternalInitialCrop(null)
    setInternalStatus('ready')

    onCancel(true)
  }

  useEffect(async () => {
    const isValid = imageRawData && (await isSelectedImageValid(imageRawData))
    if (imageRawData && !isValid) return

    setError(false)
    const reader = new FileReader()
    reader.readAsDataURL(imageRawData)
    reader.onloadend = () => {
      setImageDataURL(reader.result)
    }

    onUpload({
      value: reader.result,
      name: imageRawData?.name || null,
      file: imageRawData || null,
    })
  }, [imageRawData])

  useEffect(async () => {
    const isValid = imageRawData && (await isSelectedImageValid(imageRawData))
    if (imageRawData && !isValid) return

    onChange({
      value: imageDataURL,
      name: imageRawData?.name || null,
      file: imageRawData || null,
      cropperData: cropperData,
    })
  }, [imageDataURL, cropperData, imageRawData])

  const handleCropperChange = exportedCropperData => {
    setCropperData(exportedCropperData)
  }

  const isDraggedFileListValid = event => {
    if (!acceptedMimeTypes.includes(event.dataTransfer.items[0].type)) {
      setError(true)
      setInternalStatus('ready')
      setErrorMessage(typeErrorText)
      return false
    }
    if (event.dataTransfer.items.length > 1) {
      setError(true)
      setInternalStatus('ready')
      setErrorMessage(quantityErrorText)
      return false
    }

    return true
  }

  const isSelectedImageValid = async file => {
    if (file.size > acceptedFileSize) {
      setError(true)
      setInternalStatus('ready')
      setErrorMessage(sizeErrorText)
      return false
    }

    const dimensionValidity = await areImageDimensionsValid(
      file,
      acceptedImageDimensions,
    )

    if (!dimensionValidity) {
      setError(true)
      setInternalStatus('ready')
      setErrorMessage(dimensionErrorText)
      return false
    }

    return true
  }

  return (
    <StyledImageDropUploader
      className={classNames('k-ImageDropUploader', className, {
        'k-ImageDropUploader--isDraggingOver': isDraggingOver,
        'k-ImageDropUploader--error': isError,
        'k-ImageDropUploader--disabled': disabled,
      })}
    >
      {internalStatus === 'ready' && (
        <>
          <input
            {...fileInputProps}
            type="file"
            id={id}
            onChange={onFileInputChange}
            disabled={disabled}
            aria-describedby={
              isError && internalErrorMessage ? `${id}-error-description` : null
            }
            accept={acceptedMimeTypes.join(', ')}
          />
          <label
            {...buttonProps}
            htmlFor={id}
            className={classNames(
              'k-ImageDropUploader__button',
              buttonProps.className,
            )}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <UploadIcon
              aria-hidden
              className="k-ImageDropUploader__button__uploadIcon"
              color="currentColor"
            />
            <span className="k-ImageDropUploader__button__title">
              {buttonTitle}
            </span>
            <span
              className={classNames('k-ImageDropUploader__button__text', {
                'k-u-color-font1': !disabled,
                'k-u-color-font2': disabled,
              })}
            >
              {buttonText}
            </span>
          </label>
        </>
      )}

      {internalStatus === 'manage' && (
        <div className="k-ImageDropUploader__manager">
          {canCrop ? (
            <ImageCropper
              className="k-ImageDropUploader__manager__cropper"
              style={{
                '--ImageDropUploader-cropHeight': pxToRem(
                  getCropHeight(cropRatio),
                ),
              }}
              src={imageDataURL}
              onChange={handleCropperChange}
              id={`${id}-cropper`}
              aria-describedby={`${id}-cropper-description`}
              initialCrop={internalInitialCrop}
              disabled={disabled}
            />
          ) : (
            <div
              className="k-ImageDropUploader__manager__cropper"
              style={{
                '--ImageDropUploader-cropHeight': pxToRem(
                  getCropHeight(cropRatio),
                ),
              }}
            >
              <img
                alt=""
                src={imageDataURL}
                style={{
                  '--ImageDropUploader-cropX': '50%',
                  '--ImageDropUploader-cropY': '50%',
                }}
              />
            </div>
          )}
          <div
            className="k-ImageDropUploader__manager__content"
            id={`${id}-cropper-description`}
          >
            <div className="k-ImageDropUploader__manager__title">
              {managerTitle}
            </div>
            <div className="k-ImageDropUploader__manager__text">
              {managerText}
            </div>
          </div>
          {canCancel && (
            <CloseButton
              className="k-ImageDropUploader__manager__cancelButton"
              onClick={!disabled ? handleCancelClick : null}
              disabled={disabled}
              size="micro"
              closeButtonLabel={cancelButtonText}
            />
          )}
        </div>
      )}

      {isError && internalErrorMessage && (
        <Text
          id={`${id}-error-description`}
          as="p"
          size="micro"
          color="error"
          weight="bold"
          className="k-u-margin-top-noneHalf"
        >
          {internalErrorMessage}
        </Text>
      )}
    </StyledImageDropUploader>
  )
}

ImageDropUploader.propTypes = {
  id: PropTypes.string.isRequired,
  acceptedFileSize: PropTypes.number,
  acceptedMimeTypes: PropTypes.array,
  buttonProps: PropTypes.object,
  buttonText: PropTypes.node,
  buttonTitle: PropTypes.node,
  canCancel: PropTypes.bool,
  canCrop: PropTypes.bool,
  cancelButtonText: PropTypes.string,
  cropRatio: PropTypes.number,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.node,
  fileInputProps: PropTypes.object,
  initialCrop: PropTypes.object,
  initialValue: PropTypes.string,
  managerText: PropTypes.node,
  managerTitle: PropTypes.node,
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  onUpload: PropTypes.func,
  quantityErrorText: PropTypes.node,
  sizeErrorText: PropTypes.node,
  status: PropTypes.oneOf(['ready', 'error', 'manage']),
  typeErrorText: PropTypes.node,
}
