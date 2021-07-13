import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { UploadIcon } from '../../../../components/graphics/icons/upload-icon'
import { CrossIcon } from '../../../../components/graphics/icons/cross-icon'
import { Text } from '../../../../components/atoms/typography/text'
import { Tag } from '../../../../components/atoms/tag'

const StyledDocumentsDropUploader = styled.div`
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(20)};
  width: 100%;
  position: relative;
  box-sizing: border-box;
  border: ${pxToRem(2)} solid ${COLORS.line1};
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
    border: ${pxToRem(2)} solid transparent;
    transition: border-color 0.2s ease;
    border-radius: ${pxToRem(8)};
  }

  &.k-DocumentsDropUploader--ready:hover:not(.k-DocumentsDropUploader--disabled) {
    border-color: ${COLORS.primary4};
  }

  &.k-DocumentsDropUploader--error {
    border-color: ${COLORS.error2};
  }

  &.k-DocumentsDropUploader--disabled {
    border-color: ${COLORS.line2};
    background-color: ${COLORS.background2};
    color: ${COLORS.font2};

    &,
    .k-DocumentsDropUploader__button {
      cursor: not-allowed;
    }
  }

  input[type='file']:active:not(:disabled) + .k-DocumentsDropUploader__button,
  &.k-DocumentsDropUploader--isDraggingOver:not(.k-DocumentsDropUploader--disabled) {
    border-color: ${COLORS.primary1};
  }

  .k-DocumentsDropUploader__content {
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(5)};
  }
  .k-DocumentsDropUploader__title {
    ${TYPOGRAPHY.fontStyles.regular}
    font-size: ${stepToRem(-1)};
  }
  .k-DocumentsDropUploader__text {
    ${TYPOGRAPHY.fontStyles.light}
    font-size: ${stepToRem(-2)};
  }

  .k-DocumentsDropUploader__fileList {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: ${pxToRem(5)};
  }

  &.k-DocumentsDropUploader--manage,
  &.k-DocumentsDropUploader--error {
    .k-DocumentsDropUploader__fileList {
      padding: ${pxToRem(10)} 0;
    }
  }

  .k-DocumentsDropUploader__file {
    font-weight: 500;
    display: flex;
    align-items: center;
    outline-offset: ${pxToRem(2)};
  }

  .k-DocumentsDropUploader__file__button {
    padding: 0 ${pxToRem(10)};
    margin-right: ${pxToRem(-10)};
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
  managerText = '',
  managerTitle = '',
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

  useEffect(() => {
    if (initialValue.length === 0) return

    setInternalStatus('manage')
  }, [initialValue])

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

    addFilesToList([...e?.dataTransfer?.files])
  }

  const onFileInputChange = e => {
    addFilesToList([...e?.target?.files])
  }

  useEffect(() => {
    setErrorMessageList([])
    setErrorList([])
    onChange(fileList)

    if (fileList.length === 0) return setInternalStatus(status)

    setInternalStatus('manage')

    fileList.forEach(file => {
      if ('File' in window && file instanceof File) {
        if (
          acceptedMimeTypes.length > 0 &&
          !acceptedMimeTypes.includes(file.type)
        ) {
          setErrorMessageList(current => [...current, typeErrorText(file.name)])
          setInternalStatus('error')
          setErrorList(current => [
            ...current,
            {
              file,
              error: typeErrorText(file.name),
            },
          ])
        }

        if (!!acceptedFileSize && file.size > acceptedFileSize) {
          setErrorMessageList(current => [...current, sizeErrorText(file.name)])
          setInternalStatus('error')
          setErrorList(current => [
            ...current,
            {
              file,
              error: typeErrorText(file.name),
            },
          ])
        }
      }
    })
  }, [fileList])

  useEffect(() => {
    if (!errorList) return

    onError(errorList)
  }, [errorList])

  const removeFilesFromList = file => {
    setFileList(currentList => currentList.filter(item => item !== file))
  }

  const addFilesToList = files => {
    setFileList(currentList => {
      const newList = [...currentList]

      files.forEach(file => {
        if (currentList.indexOf(file) === -1) {
          newList.push(file)
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

          {['ready', 'error'].includes(internalStatus) && (
            <div className="k-DocumentsDropUploader__text">{managerText}</div>
          )}

          {fileList.length > 0 && (
            <ul className="k-DocumentsDropUploader__fileList">
              {['error', 'manage'].includes(internalStatus) && (
                <>
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
                </>
              )}
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

          {disabled || internalStatus === 'ready' ? (
            <label
              htmlFor={id}
              className="k-DocumentsDropUploader__button"
              children={labelText}
            />
          ) : (
            <Text
              tag="label"
              htmlFor={id}
              size="tiny"
              weight="regular"
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
            {internalErrorMessageList.map(errorMsg => (
              <Text
                key={errorMsg}
                as="li"
                size="micro"
                color="error"
                weight="bold"
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
  onChange: PropTypes.func,
  quantityErrorText: PropTypes.node,
  sizeErrorText: PropTypes.func,
  status: PropTypes.oneOf(['ready', 'error', 'manage']),
  typeErrorText: PropTypes.func,
  onError: PropTypes.func,
  displayErrors: PropTypes.bool,
}
