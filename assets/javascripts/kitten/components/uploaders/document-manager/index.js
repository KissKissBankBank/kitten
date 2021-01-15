import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { Button } from '../../../components/buttons/button/button'
import { Text } from '../../../components/typography/text'
import classNames from 'classnames'
import { UploadIcon } from '../../../components/icons/upload-icon'
import { CheckedCircleIcon } from '../../../components/icons/checked-circle-icon'
import { CrossCircleIcon } from '../../../components/icons/cross-circle-icon'
import { ClockCircleIcon } from '../../../components/icons/clock-circle-icon'
import { Loader } from '../../../components/loaders/loader'
import { DocumentIconEmpty } from '../../../components/icons/document-icon-empty'
import { VisuallyHidden } from '../../../components/accessibility/visually-hidden'
import isEmpty from 'lodash/fp/isEmpty'
import { DropdownSelect } from '../../../components/form/dropdown-select'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledDocumentUploader = styled.div`
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

  input[type='file']:hover + label,
  input[type='file']:active + label,
  input[type='file']:focus + label {
    background-color: ${COLORS.background2};
    border-color: ${COLORS.line1};
    color: ${COLORS.font1};

    svg,
    path {
      fill: ${COLORS.font1};
    }
  }

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

  .k-DocumentManager__uploader__button {
    padding: ${pxToRem(20)};
  }

  .k-DocumentManager__uploader__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }
  .k-DocumentManager__uploader__documentIcon {
    flex: 0 0 auto;
    margin-right: ${pxToRem(20)};
    align-self: flex-start;

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      display: none;
    }
  }
  .k-DocumentManager__uploader__content {
    flex: 1 1 auto;
  }
  .k-DocumentManager__uploader__uploadIcon {
    margin-left: ${pxToRem(20)};
    flex: 0 0 auto;
  }

  .k-DocumentManager__statusTitle {
    margin: 0;
    line-height: 1.3;
  }
  .k-DocumentManager__statusSubtitle {
    margin: ${pxToRem(5)} 0 0;
  }
`

const StyledDocumentLoading = styled.div`
  .k-DocumentManager__loading__button {
    min-height: ${pxToRem(100)};
  }
`

const StyledDocumentDisplay = styled.div`
  .k-DocumentManager__display__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }
  .k-DocumentManager__display__documentIcon {
    flex: 0 0 auto;
    margin-right: ${pxToRem(20)};
    align-self: flex-start;

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      display: none;
    }
  }
  .k-DocumentManager__display__content {
    flex: 1 1 auto;
  }

  .k-DocumentManager__actionButton {
    margin: ${pxToRem(10)} 0;
    padding: 0;
    border: none;
    font: inherit;
    background-color: transparent;
    cursor: pointer;
    transition: color 0.2s;
    color: ${COLORS.primary1};

    &:hover,
    &:focus {
      color: ${COLORS.primary3};
    }
    &:active {
      color: ${COLORS.primary1};
      transition: none;
    }
  }
  &.k-DocumentManager__display--error .k-DocumentManager__actionButton {
    color: ${COLORS.error};
  }

  .k-DocumentManager__statusTitle {
    margin: 0;
    line-height: 1.3;
  }
  .k-DocumentManager__statusSubtitle {
    margin: ${pxToRem(5)} 0 0;
  }
`

const StyledIconContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: ${pxToRem(60)};
  height: ${pxToRem(60)};
  border-radius: 50%;
  background-color: #caf4fe;

  padding-top: ${pxToRem(15)};
  padding-left: ${pxToRem(19)};

  &.k-DocumentManager__iconContainer--error {
    background-color: ${COLORS.error3};
  }
  &.k-DocumentManager__iconContainer--valid {
    background-color: ${COLORS.tertiary2};
  }

  .k-DocumentManager__iconContainer__statusIcon {
    position: absolute;
    right: ${pxToRem(-12)};
    top: ${pxToRem(-4)};
    border: ${pxToRem(2)} solid ${COLORS.background1};
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    border-radius: 50%;
  }
`

const StyledSelect = styled.div`
  flex: 1 0 100%;

  .k-DocumentManager__select {
    margin-top: ${pxToRem(15)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin-left: ${pxToRem(80)};
      max-width: ${pxToRem(300)};
    }
  }
`

const statusesWithIcons = ['error', 'valid', 'wait']

const IconContainer = ({ status, children }) => {
  return (
    <StyledIconContainer
      className={classNames(
        'k-DocumentManager__iconContainer',
        `k-DocumentManager__iconContainer--${status}`,
      )}
    >
      {children}

      {statusesWithIcons.includes(status) && (
        <div className="k-DocumentManager__iconContainer__statusIcon">
          {status === 'valid' && (
            <CheckedCircleIcon
              circleColor={COLORS.valid}
              checkedColor={COLORS.background1}
              width={20}
              height={20}
            />
          )}
          {status === 'error' && (
            <CrossCircleIcon
              circleColor={COLORS.error}
              crossColor={COLORS.background1}
              width={20}
              height={20}
            />
          )}
          {status === 'wait' && (
            <ClockCircleIcon
              circleColor={COLORS.primary1}
              clockColor={COLORS.background1}
              width={20}
              height={20}
            />
          )}
        </div>
      )}
    </StyledIconContainer>
  )
}

export const DocumentManager = ({
  id, //required
  buttonProps = {},
  buttonSubtitle = '',
  buttonTitle = '',
  canCancel = false,
  cancelButtonText = 'Upload another document',
  canReplace = false,
  disabled = false,
  displaySubtitle = '',
  displayTitle = '',
  documentIcon = <DocumentIconEmpty />,
  fileInputProps = {},
  loaderAnimation = <Loader />,
  loaderText = '',
  onCancel = () => {},
  onUpload = () => {},
  replaceButtonText = 'Replace current',
  status = 'ready',
  typeSelectorProps = {},
  ...props
}) => {
  const [internalFileName, setInternalFileName] = useState('')
  const [internalStatus, setInternalStatus] = useState(status)
  useEffect(() => {
    setInternalStatus(status)
  }, [status])

  const [internalDisabled, setInternalDisabled] = useState(disabled)
  useEffect(() => {
    setInternalDisabled(disabled)
  }, [disabled])

  const onFileInputChange = event => {
    const files = event.currentTarget.files

    if (files.length < 1) return

    const tempFileName = files[0].name
    const tempText =
      files.length > 1 ? `${tempFileName} + ${files.length - 1}` : tempFileName

    setInternalStatus('file-selected')
    setInternalFileName(tempText)

    onUpload(event)
  }

  const handleReplaceClick = () => {
    setInternalStatus('ready')
  }

  const handleCancelClick = () => {
    onCancel()
  }

  const handleSelectClick = event => {
    event.preventDefault()

    typeSelectorProps.onClick && typeSelectorProps.onClick()
  }

  const Select = () => (
    <StyledSelect>
      <DropdownSelect
        {...typeSelectorProps}
        onClick={handleSelectClick}
        className={classNames(
          'k-DocumentManager__select',
          typeSelectorProps.className,
        )}
      />
    </StyledSelect>
  )

  if (internalStatus === 'ready' || internalStatus === 'file-selected') {
    return (
      <StyledDocumentUploader
        {...props}
        className={classNames('k-DocumentManager__uploader', props.className)}
      >
        <input
          {...fileInputProps}
          type="file"
          id={id}
          onChange={onFileInputChange}
          disabled={internalDisabled}
        />
        <Button
          fluid
          borderRadius={4}
          {...buttonProps}
          as="label"
          htmlFor={id}
          className={classNames(
            'k-DocumentManager__uploader__button',
            buttonProps.className,
          )}
        >
          <div className="k-DocumentManager__uploader__container">
            <div className="k-DocumentManager__uploader__documentIcon">
              <IconContainer status={internalStatus}>
                {documentIcon}
              </IconContainer>
            </div>

            <div className="k-DocumentManager__uploader__content">
              <Text
                tag="p"
                weight="regular"
                size="tiny"
                lineHeight="normal"
                className="k-DocumentManager__statusTitle"
              >
                {internalStatus === 'file-selected'
                  ? internalFileName
                  : buttonTitle}
              </Text>
              {internalStatus === 'ready' && (
                <Text
                  tag="p"
                  weight="light"
                  size="micro"
                  lineHeight="normal"
                  className="k-DocumentManager__statusSubtitle"
                >
                  {buttonSubtitle}
                </Text>
              )}
            </div>

            <div className="k-DocumentManager__uploader__uploadIcon">
              <UploadIcon
                aria-hidden
                className="k-DocumentManager__uploader__button__uploadIcon"
              />
            </div>

            {!isEmpty(typeSelectorProps) && <Select />}
          </div>
        </Button>
      </StyledDocumentUploader>
    )
  }

  if (internalStatus === 'loading') {
    return (
      <StyledDocumentLoading
        {...props}
        id={id}
        className={classNames('k-DocumentManager__loading', props.className)}
      >
        <Button
          fluid
          borderRadius={4}
          {...buttonProps}
          as="div"
          className={classNames(
            'k-DocumentManager__loading__button',
            buttonProps.className,
          )}
        >
          {loaderAnimation}
          <VisuallyHidden>{loaderText}</VisuallyHidden>
        </Button>
      </StyledDocumentLoading>
    )
  }

  return (
    <StyledDocumentDisplay
      {...props}
      id={id}
      className={classNames(
        'k-DocumentManager__display',
        `k-DocumentManager__display--${status}`,
        props.className,
      )}
    >
      <div className="k-DocumentManager__display__container">
        <div className="k-DocumentManager__display__documentIcon">
          <IconContainer status={status}>{documentIcon}</IconContainer>
        </div>

        <div className="k-DocumentManager__display__content">
          <Text
            tag="p"
            weight="regular"
            size="tiny"
            className="k-DocumentManager__statusTitle"
          >
            {displayTitle}
          </Text>
          <Text
            tag="p"
            weight="light"
            size="micro"
            className="k-DocumentManager__statusSubtitle"
          >
            {displaySubtitle}
          </Text>
          {canCancel && (
            <button
              className="k-DocumentManager__actionButton"
              onClick={handleCancelClick}
            >
              <Text
                weight="regular"
                size="tiny"
                className="k-DocumentManager__actionButton__text"
              >
                {cancelButtonText}
              </Text>
            </button>
          )}
          {canReplace && (
            <button
              className="k-DocumentManager__actionButton"
              onClick={handleReplaceClick}
            >
              <Text
                weight="regular"
                size="tiny"
                className="k-DocumentManager__actionButton__text"
              >
                {replaceButtonText}
              </Text>
            </button>
          )}
        </div>

        {!isEmpty(typeSelectorProps) && <Select />}
      </div>
    </StyledDocumentDisplay>
  )
}

DocumentManager.propTypes = {
  id: PropTypes.string.isRequired,
  buttonProps: PropTypes.object,
  canCancel: PropTypes.bool,
  cancelButtonText: PropTypes.string,
  disabled: PropTypes.bool,
  documentIcon: PropTypes.node,
  errorText: PropTypes.string,
  fileInputProps: PropTypes.object,
  fileName: PropTypes.string,
  loaderAnimation: PropTypes.node,
  loaderText: PropTypes.node,
  onCancel: PropTypes.func,
  onUpload: PropTypes.func,
  status: PropTypes.oneOf(['ready', 'error', 'valid', 'wait', 'loading']),
  subtitle: PropTypes.node,
  title: PropTypes.node,
  typeSelectorProps: PropTypes.object,
}
