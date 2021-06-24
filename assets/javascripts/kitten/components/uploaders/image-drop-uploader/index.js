import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { UploadIcon } from '../../../components/icons/upload-icon'
import { CloseButton } from '../../../components/buttons/close-button'
import { ImageCropper } from './components/image-cropper'

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

  /*   &:not(.k-ImageDropUploader--loading) {
    input[type='file']:disabled + label {
      border-color: ${COLORS.line2};
      background-color: ${COLORS.line2};
      color: ${COLORS.background1};
      pointer-events: none;

      svg,
      path {
        fill: ${COLORS.background1};
      }
    }
  }
 */

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

    > * {
      pointer-events: none;
    }

    &:hover {
      border-color: ${COLORS.primary4};
    }
  }
  input[type='file']:active + .k-ImageDropUploader__button {
    border-color: ${COLORS.primary1};
  }
  &.k-ImageDropUploader--isDraggingOver .k-ImageDropUploader__button {
    border-color: ${COLORS.primary1};
    border-style: solid;
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
    width: ${pxToRem(CROP_WIDTH)};
    height: var(--ImageDropUploader-cropHeight, ${pxToRem(CROP_WIDTH)});
    overflow: hidden;
    position: relative;

    /* img {
      display: block;
    } */
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
  }
  .k-ImageDropUploader__manager__cancelButton {
    position: absolute;
    top: ${pxToRem(-2)};
    right: ${pxToRem(-2)};
    border-top-right-radius: ${pxToRem(8)};
  }
`

const getCropHeight = ratio => CROP_WIDTH / ratio

export const ImageDropUploader = ({
  id,
  buttonTitle = '',
  buttonText = '',
  className = '',
  fileInputProps = {},
  buttonProps = {},
  managerTitle = '',
  managerText = '',
  disabled = false,
  status = 'ready',
  cancelButtonText = '',
  cropRatio = 16 / 10,
  initialValue = '',
  onChange = () => {},
}) => {
  const [internalStatus, setInternalStatus] = useState(status)
  useEffect(() => setInternalStatus(status), [status])

  const [internalDisabled, setInternalDisabled] = useState(disabled)
  useEffect(() => setInternalDisabled(disabled), [disabled])

  const [isDraggingOver, setDraggingOver] = useState(false)
  const [imageRawData, setImageRawData] = useState(null)
  const [imageDataURL, setImageDataURL] = useState(initialValue)

  useEffect(() => {
    if (initialValue !== '') {
      setInternalStatus('manage')
    }
  }, [initialValue])

  const handleDragEnter = e => {
    e.preventDefault()
    e.stopPropagation()
    setDraggingOver(true)
  }
  const handleDragLeave = e => {
    e.preventDefault()
    e.stopPropagation()
    setDraggingOver(false)
  }
  const handleDragOver = e => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDrop = e => {
    e.preventDefault()
    e.stopPropagation()

    setDraggingOver(false)
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
    setInternalStatus('ready')
  }

  useEffect(() => {
    if (!imageRawData) return

    const reader = new FileReader()
    reader.readAsDataURL(imageRawData)
    reader.onloadend = () => {
      setImageDataURL(reader.result)
    }
  }, [imageRawData])

  const handleCropperChange = cropperData => {
    onChange({
      value: imageDataURL,
      name: imageRawData.name,
      file: imageRawData,
      cropperData: cropperData,
      // value: resultData?.target?.src || '',
      // base: getOr(resultData?.srcElement?.src)('originalTarget.src')(
      //   resultData,
      // ),
      // name: fileNameState,
      // file: uploadedFile,
      // cropperData: resultData.detail,
      // croppedImageSrc: cropperInstance
      //   ? cropperInstance?.getCroppedCanvas()?.toDataURL()
      //   : '',
    })
  }

  return (
    <StyledImageDropUploader
      className={classNames('k-ImageDropUploader', className, {
        'k-ImageDropUploader--isDraggingOver': isDraggingOver,
      })}
    >
      {internalStatus === 'ready' && (
        <>
          <input
            {...fileInputProps}
            type="file"
            id={id}
            onChange={onFileInputChange}
            disabled={internalDisabled}
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
            <span className="k-ImageDropUploader__button__text">
              {buttonText}
            </span>
          </label>
        </>
      )}

      {internalStatus === 'manage' && (
        <div className="k-ImageDropUploader__manager">
          <ImageCropper
            className="k-ImageDropUploader__manager__cropper"
            style={{
              '--ImageDropUploader-cropHeight': pxToRem(
                getCropHeight(cropRatio),
              ),
            }}
            src={imageDataURL}
            onChange={handleCropperChange}
          />
          <div className="k-ImageDropUploader__manager__content">
            <div className="k-ImageDropUploader__manager__title">
              {managerTitle}
            </div>
            <div className="k-ImageDropUploader__manager__text">
              {managerText}
            </div>
          </div>
          <CloseButton
            className="k-ImageDropUploader__manager__cancelButton"
            onClick={handleCancelClick}
            size="micro"
            closeButtonLabel={cancelButtonText}
          />
        </div>
      )}
    </StyledImageDropUploader>
  )
}

ImageDropUploader.propTypes = {
  id: PropTypes.string.isRequired,
  buttonProps: PropTypes.object,
  buttonTitle: PropTypes.node,
  buttonText: PropTypes.node,
  managerTitle: PropTypes.node,
  managerText: PropTypes.node,
  canCancel: PropTypes.bool,
  cancelButtonText: PropTypes.string,
  disabled: PropTypes.bool,
  errorText: PropTypes.string,
  fileInputProps: PropTypes.object,
  fileName: PropTypes.string,
  onCancel: PropTypes.func,
  onUpload: PropTypes.func,
  status: PropTypes.oneOf(['ready', 'error', 'manage']),
  statusText: PropTypes.string,
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
}
