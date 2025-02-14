import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { UploadIcon } from '../../../graphics/icons/upload-icon'
import { CrossIcon } from '../../../graphics/icons/cross-icon'
import { Text } from '../../../typography/text'
import { Tag } from '../../../information/tag'

const StyledDocumentsDropUploader = styled.div`
  border-radius: var(--border-radius-m);
  padding: ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(15)};
  width: 100%;
  position: relative;
  box-sizing: border-box;
  border: var(--border);
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: ${pxToRem(35)};

  transition: border-color 0.2s ease;

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

  input[type='file']:focus + label.k-DocumentsDropUploader__button {
    border: ${pxToRem(2)} solid var(--color-primary-300);
  }
  input[type='file']:focus-visible + label.k-DocumentsDropUploader__button {
    outline: auto;
  }

  input[type='file']:focus-visible + label.k-DocumentsDropUploader__label {
    outline: auto;
    outline-offset: ${pxToRem(-2)};
  }

  .k-DrocumentDropUploader__icon {
    margin-top: ${pxToRem(15)};
    margin-left: ${pxToRem(15)};
  }

  .k-DocumentsDropUploader__button {
    position: absolute;
    z-index: 1;
    top: ${pxToRem(-2)};
    left: ${pxToRem(-2)};
    right: ${pxToRem(-2)};
    bottom: ${pxToRem(-2)};
    color: transparent;
    cursor: pointer;
    border: var(--border-width) solid transparent;
    transition: border-color 0.2s ease;
    border-radius: var(--border-radius-m);
  }

  &.k-DocumentsDropUploader--ready:hover:not(.k-DocumentsDropUploader--disabled) {
    border-color: var(--color-primary-300);
  }

  &.k-DocumentsDropUploader--error {
    border-color: var(--color-danger-300);
  }

  &.k-DocumentsDropUploader--disabled {
    border-color: var(--color-grey-400);
    color: var(--color-grey-600);

    .k-DocumentsDropUploader__info {
      color: var(--color-grey-600);
    }

    &,
    .k-DocumentsDropUploader__button {
      cursor: not-allowed;
    }
  }

  input[type='file']:active:not(:disabled) + .k-DocumentsDropUploader__button,
  &.k-DocumentsDropUploader--isDraggingOver:not(.k-DocumentsDropUploader--disabled) {
    border-color: var(--color-primary-500);
  }

  .k-DocumentsDropUploader__content {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(5)};
  }
  .k-DocumentsDropUploader__title {
    ${TYPOGRAPHY.fontStyles['500']}
    font-size: ${stepToRem(-1)};
    line-height: 1;
  }
  .k-DocumentsDropUploader__text,
  .k-DocumentsDropUploader__info {
    ${TYPOGRAPHY.fontStyles['400']}
    font-size: ${stepToRem(-2)};
    line-height: ${pxToRem(16)};

    &:empty {
      display: none;
    }
  }
  .k-DocumentsDropUploader__info {
    color: var(--color-grey-700);
  }

  .k-DocumentsDropUploader__fileList {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: ${pxToRem(5)};
    padding: ${pxToRem(10)} 0;
  }

  .k-DocumentsDropUploader__file {
    font-weight: var(--font-weight-500);
    display: flex;
    align-items: center;
    outline-offset: ${pxToRem(2)};
    cursor: default;
    transition: color 0.2s ease, background-color 0.2s ease;

    &:hover {
      background-color: var(--color-primary-300);
    }
  }

  .k-DocumentsDropUploader__file__button {
    padding: 0 ${pxToRem(10)};
    margin-right: ${pxToRem(-10)};

    :focus,
    :focus-visible {
      outline-offset: ${pxToRem(-2)};
    }
  }

  .k-DocumentsDropUploader__content,
  .k-DocumentsDropUploader__fileList,
  .k-DocumentsDropUploader__file,
  .k-DocumentsDropUploader__file__text {
    overflow: hidden;
    max-width: 100%;
  }
  .k-DocumentsDropUploader__file__text {
    text-overflow: ellipsis;
    display: inline-block;
  }
`

const StyledErrorList = styled.ul`
  margin: ${pxToRem(5)} 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(5)};

  li {
    line-height: 1.2;
  }
`

export const DocumentsDropUploader = ({
  id,
  acceptedFileSize = 5 * 1024 * 1024,
  acceptedMimeTypes = [],
  labelText = '',
  className = '',
  disabled = false,
  errorMessageList = null,
  fileInputProps = {},
  initialValue = [],
  managerTitle = '',
  managerText = '',
  managerInfo = '',
  onChange = () => {},
  sizeErrorText = i => i,
  status = 'ready',
  typeErrorText = i => i,
  removeActionMessage = i => i,
  onError = () => {},
  displayErrors = true,
}) => {
  const [internalStatus, setInternalStatus] = useState(status)
  useEffect(() => setInternalStatus(status), [status])

  const [isDraggingOver, setDraggingOver] = useState(false)
  const [fileList, setFileList] = useState(initialValue)
  const [errorList, setErrorList] = useState([])
  const [internalErrorMessageList, setErrorMessageList] = useState([
    errorMessageList,
  ])

  const handleDragEnter = e => {
    e.preventDefault()
    e.stopPropagation()
    if (disabled) return

    setDraggingOver(true)
  }
  const handleDragLeave = e => {
    e.preventDefault()
    e.stopPropagation()
    if (disabled) return

    setDraggingOver(false)
  }
  const handleDragOver = e => {
    e.preventDefault()
    e.stopPropagation()
    if (disabled) return

    setDraggingOver(true)
  }

  const handleDrop = e => {
    e.preventDefault()
    e.stopPropagation()
    if (disabled) return

    setDraggingOver(false)

    addFilesToList(Array.from(e?.dataTransfer?.files))
  }

  const onFileInputChange = e => {
    addFilesToList(Array.from(e?.target?.files))
  }

  useEffect(() => {
    if (errorList.length === 0) {
      if (fileList.length === 0) {
        setInternalStatus(status)
      } else {
        setInternalStatus('ready')
        onChange(fileList)
      }
    } else {
      onError(errorList)
    }
  }, [fileList, errorList])

  const removeFilesFromList = file => {
    setFileList(currentList => currentList.filter(item => item !== file))
  }

  const addFilesToList = files => {
    setErrorMessageList([])
    setErrorList([])

    setFileList(currentList => {
      const newList = [...currentList]

      files.forEach(file => {
        let isValid = true

        if ('File' in window && file instanceof File) {
          if (
            acceptedMimeTypes.length > 0 &&
            !acceptedMimeTypes.includes(file.type)
          ) {
            setErrorMessageList(current => [
              ...current,
              typeErrorText(file.name),
            ])
            setInternalStatus('error')
            setErrorList(current => [
              ...current,
              {
                file,
                error: typeErrorText(file.name),
              },
            ])
            isValid = false
          }

          if (!!acceptedFileSize && file.size > acceptedFileSize) {
            setErrorMessageList(current => [
              ...current,
              sizeErrorText(file.name),
            ])
            setInternalStatus('error')
            setErrorList(current => [
              ...current,
              {
                file,
                error: sizeErrorText(file.name),
              },
            ])
            isValid = false
          }

          if (isValid) {
            newList.push(file)
          }
        }
      })

      return newList
    })
  }

  return (
    <>
      <StyledDocumentsDropUploader
        className={classNames(
          'k-DocumentsDropUploader',
          className,
          `k-DocumentsDropUploader--${internalStatus}`,
          {
            'k-DocumentsDropUploader--isDraggingOver': isDraggingOver,
            'k-DocumentsDropUploader--disabled': disabled,
          },
        )}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="k-DrocumentDropUploader__icon">
          <UploadIcon color="currentColor" />
        </div>

        <div
          className="k-DocumentsDropUploader__content"
          id={`${id}-cropper-description`}
        >
          <div className="k-DocumentsDropUploader__title">{managerTitle}</div>

          {fileList.length === 0 && (
            <>
              <div className="k-DocumentsDropUploader__text">{managerText}</div>

              <div className="k-DocumentsDropUploader__info">{managerInfo}</div>
            </>
          )}

          {fileList.length > 0 && (
            <ul className="k-DocumentsDropUploader__fileList">
              {fileList.map((file, index) => (
                <Tag
                  key={file.name + index}
                  as="li"
                  className="k-DocumentsDropUploader__file"
                >
                  <span className="k-DocumentsDropUploader__file__text">
                    {file.name}
                  </span>
                  {!disabled && (
                    <button
                      className="k-DocumentsDropUploader__file__button k-u-reset-button"
                      type="button"
                      onClick={() => removeFilesFromList(file)}
                    >
                      <span className="k-u-a11y-visuallyHidden">
                        {removeActionMessage(file.name)}
                      </span>
                      <CrossIcon color="currentColor" />
                    </button>
                  )}
                </Tag>
              ))}
            </ul>
          )}

          <input
            {...fileInputProps}
            type="file"
            id={id}
            onChange={onFileInputChange}
            disabled={disabled}
            aria-describedby={
              internalStatus === 'error' && internalErrorMessageList
                ? `${id}-error-description`
                : null
            }
            accept={acceptedMimeTypes.join(', ')}
            multiple={true}
          />

          {disabled || fileList.length === 0 ? (
            <label
              htmlFor={id}
              className="k-DocumentsDropUploader__button"
              children={labelText}
            />
          ) : (
            <Text
              tag="label"
              htmlFor={id}
              size="small"
              weight="500"
              className="k-DocumentsDropUploader__label k-u-link k-u-link-primary1 k-u-cursor-pointer"
            >
              <span aria-hidden>+&nbsp;</span>
              {labelText}
            </Text>
          )}
        </div>
      </StyledDocumentsDropUploader>

      {displayErrors &&
        internalStatus === 'error' &&
        internalErrorMessageList.length > 0 && (
          <StyledErrorList
            className="k-DocumentsDropUploader__errorList"
            id={`${id}-error-description`}
          >
            {internalErrorMessageList.map((errorMsg, index) => (
              <Text
                key={errorMsg + index}
                as="li"
                size="micro"
                color="error"
                weight="700"
              >
                {errorMsg}
              </Text>
            ))}
          </StyledErrorList>
        )}
    </>
  )
}

DocumentsDropUploader.propTypes = {
  id: PropTypes.string.isRequired,
  acceptedFileSize: PropTypes.number,
  acceptedMimeTypes: PropTypes.array,
  labelText: PropTypes.node,
  cropRatio: PropTypes.number,
  disabled: PropTypes.bool,
  errorMessageList: PropTypes.node,
  fileInputProps: PropTypes.object,
  initialCrop: PropTypes.object,
  initialValue: PropTypes.array,
  managerText: PropTypes.node,
  managerTitle: PropTypes.node,
  managerInfo: PropTypes.node,
  onChange: PropTypes.func,
  sizeErrorText: PropTypes.func,
  status: PropTypes.oneOf(['ready', 'error']),
  typeErrorText: PropTypes.func,
  onError: PropTypes.func,
  displayErrors: PropTypes.bool,
}
