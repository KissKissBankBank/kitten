import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { Button } from '../../../components/buttons/button'
import { modifierStyles } from '../../../components/buttons/button/helpers/modifier-styles'
import { Text } from '../../../components/typography/text'
import classNames from 'classnames'
import { UploadIcon } from '../../../components/icons/upload-icon'
import { CheckedCircleIcon } from '../../../components/icons/checked-circle-icon'
import { CrossCircleIcon } from '../../../components/icons/cross-circle-icon'
import { ClockCircleIcon } from '../../../components/icons/clock-circle-icon'
import { CrossIcon } from '../../../components/icons/cross-icon'
import { VisuallyHidden } from '../../../components/accessibility/visually-hidden'
import { Loader } from '../../../components/loaders/loader'

const StyledBasicUploader = styled.div`
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
    background-color: ${COLORS.primary2};
    border-color: ${COLORS.primary2};
    color: ${COLORS.background1};

    svg,
    path {
      fill: ${COLORS.background1};
    }
  }

  &:not(.k-BasicUploader--loading) {
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

  .k-BasicUploader__statusBlock {
    margin-top: ${pxToRem(15)};
    display: flex;

    & > * + * {
      margin-left: ${pxToRem(10)};
    }
  }

  .k-BasicUploader__cancelButton {
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    cursor: pointer;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ${modifierStyles('beryllium')}
  }
`

const statusesWithIcons = ['error', 'valid', 'wait']

export const BasicUploader = ({
  id, //required
  buttonProps = {},
  buttonText = 'Document',
  canCancel = false,
  cancelButtonText = 'Cancel and reupload',
  disabled = false,
  errorText = '',
  fileInputProps = {},
  fileName = '',
  loaderAnimation = <Loader />,
  onCancel = () => {},
  onUpload = () => {},
  status = 'ready',
  statusText = '',
  ...props
}) => {
  const [internalStatus, setInternalStatus] = useState(status)
  useEffect(() => {
    setInternalStatus(status)
  }, [status])

  const [internalDisabled, setInternalDisabled] = useState(disabled)
  useEffect(() => {
    setInternalDisabled(disabled)
  }, [disabled])

  const [internalFileName, setInternalFileName] = useState('')
  const [internalCanCancel, setInternalCanCancel] = useState(canCancel)
  useEffect(() => {
    setInternalCanCancel(canCancel)
  }, [canCancel])

  useEffect(() => {
    if (errorText !== '') {
      setInternalStatus('error')
    }
  }, [errorText])

  const onFileInputChange = event => {
    const files = event.currentTarget.files

    if (files.length < 1) return

    const tempFileName = files[0].name
    const tempText =
      files.length > 1 ? `${tempFileName} + ${files.length - 1}` : tempFileName

    setInternalStatus('file-selected')
    setInternalCanCancel(true)
    setInternalFileName(tempText)
    setInternalDisabled(true)

    onUpload(event)
  }

  const onCancelButtonClick = event => {
    setInternalStatus('ready')
    setInternalCanCancel(false)
    setInternalDisabled(false)
    setInternalFileName('')

    onCancel(event)
  }

  return (
    <StyledBasicUploader
      {...props}
      className={classNames(
        'k-BasicUploader',
        props.className,
        `k-BasicUploader--${internalStatus}`,
      )}
    >
      <input
        {...fileInputProps}
        type="file"
        id={id}
        onChange={onFileInputChange}
        disabled={internalDisabled || internalStatus === 'loading'}
      />
      <Button
        fluid
        {...buttonProps}
        as="label"
        htmlFor={id}
        className={classNames('k-BasicUploader__button', buttonProps.className)}
      >
        {internalStatus === 'loading' ? (
          loaderAnimation
        ) : (
          <>
            <UploadIcon
              aria-hidden
              className="k-BasicUploader__button__uploadIcon k-u-margin-right-singleHalf"
            />
            <span>{buttonText}</span>
          </>
        )}
      </Button>

      {internalStatus !== 'ready' && (
        <div className="k-BasicUploader__statusBlock">
          {internalCanCancel && (
            <button
              className="k-BasicUploader__cancelButton"
              onClick={onCancelButtonClick}
            >
              <CrossIcon />
              <VisuallyHidden>{cancelButtonText}</VisuallyHidden>
            </button>
          )}
          {!internalCanCancel && statusesWithIcons.includes(internalStatus) && (
            <div className="k-BasicUploader__statusIcon">
              {internalStatus === 'valid' && (
                <CheckedCircleIcon
                  circleColor={COLORS.valid}
                  checkedColor={COLORS.background1}
                  width={20}
                  height={20}
                  aria-hidden
                />
              )}
              {internalStatus === 'error' && (
                <CrossCircleIcon
                  circleColor={COLORS.error}
                  crossColor={COLORS.background1}
                  width={20}
                  height={20}
                  aria-hidden
                />
              )}
              {internalStatus === 'wait' && (
                <ClockCircleIcon
                  circleColor={COLORS.primary1}
                  clockColor={COLORS.background1}
                  width={20}
                  height={20}
                  aria-hidden
                />
              )}
            </div>
          )}
          <div>
            <Text
              tag="p"
              weight="regular"
              color={internalStatus === 'error' ? 'error' : 'font1'}
              size="tiny"
              lineHeight="normal"
              className="k-BasicUploader__statusTitle  k-u-margin-none k-u-line-height-1-3"
            >
              {internalStatus === 'file-selected'
                ? internalFileName
                : errorText === ''
                ? fileName
                : errorText}
            </Text>
            <Text
              tag="p"
              weight="light"
              color={internalStatus === 'error' ? 'error' : 'font1'}
              size="micro"
              lineHeight="normal"
              className="k-BasicUploader__statusSubtitle  k-u-margin-none k-u-margin-top-noneHalf k-u-line-height-1-3"
            >
              {statusesWithIcons.includes(internalStatus) && statusText}
            </Text>
          </div>
        </div>
      )}
    </StyledBasicUploader>
  )
}

BasicUploader.propTypes = {
  id: PropTypes.string.isRequired,
  buttonProps: PropTypes.object,
  buttonText: PropTypes.string,
  canCancel: PropTypes.bool,
  cancelButtonText: PropTypes.string,
  disabled: PropTypes.bool,
  errorText: PropTypes.string,
  fileInputProps: PropTypes.object,
  fileName: PropTypes.string,
  onCancel: PropTypes.func,
  onUpload: PropTypes.func,
  status: PropTypes.oneOf(['ready', 'error', 'valid', 'wait', 'loading']),
  statusText: PropTypes.string,
}
