import _extends from "@babel/runtime/helpers/extends";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import COLORS from '../../../../constants/colors-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import { UploadIcon } from '../../../graphics/icons/upload-icon';
import { CrossIcon } from '../../../graphics/icons/cross-icon';
import { Text } from '../../../typography/text';
import { Tag } from '../../../information/tag';
const StyledDocumentsDropUploader = styled.div.withConfig({
  displayName: "documents-drop-uploader__StyledDocumentsDropUploader",
  componentId: "sc-klc7wx-0"
})(["border-radius:var(--border-radius-m);padding:", " ", " ", ";width:100%;position:relative;box-sizing:border-box;border:var(--border);position:relative;display:flex;flex-direction:row;align-items:flex-start;gap:", ";transition:border-color 0.2s ease;input[type='file']{border:0;clip-path:inset(100%);height:1px;overflow:hidden;padding:0;position:absolute !important;white-space:nowrap;width:1px;}input[type='file']:focus + label.k-DocumentsDropUploader__button{border:", " solid ", ";}input[type='file']:focus-visible + label.k-DocumentsDropUploader__button{outline:auto;}input[type='file']:focus-visible + label.k-DocumentsDropUploader__label{outline:auto;outline-offset:", ";}.k-DrocumentDropUploader__icon{margin-top:", ";margin-left:", ";}.k-DocumentsDropUploader__button{position:absolute;z-index:1;top:", ";left:", ";right:", ";bottom:", ";color:transparent;cursor:pointer;border:var(--border-width) solid transparent;transition:border-color 0.2s ease;border-radius:var(--border-radius-m);}&.k-DocumentsDropUploader--ready:hover:not(.k-DocumentsDropUploader--disabled){border-color:", ";}&.k-DocumentsDropUploader--error{border-color:", ";}&.k-DocumentsDropUploader--disabled{border-color:", ";color:", ";.k-DocumentsDropUploader__info{color:", ";}&,.k-DocumentsDropUploader__button{cursor:not-allowed;}}input[type='file']:active:not(:disabled) + .k-DocumentsDropUploader__button,&.k-DocumentsDropUploader--isDraggingOver:not(.k-DocumentsDropUploader--disabled){border-color:", ";}.k-DocumentsDropUploader__content{display:flex;flex-direction:column;gap:", ";}.k-DocumentsDropUploader__title{", " font-size:", ";line-height:1;}.k-DocumentsDropUploader__text,.k-DocumentsDropUploader__info{", " font-size:", ";line-height:", ";&:empty{display:none;}}.k-DocumentsDropUploader__info{color:", ";}.k-DocumentsDropUploader__fileList{margin:0;padding:0;list-style:none;display:flex;align-items:flex-start;flex-direction:column;gap:", ";padding:", " 0;}.k-DocumentsDropUploader__file{font-weight:500;display:flex;align-items:center;outline-offset:", ";cursor:default;transition:color 0.2s ease,background-color 0.2s ease;&:hover{background-color:", ";}}.k-DocumentsDropUploader__file__button{padding:0 ", ";margin-right:", ";:focus,:focus-visible{outline-offset:", ";}}.k-DocumentsDropUploader__content,.k-DocumentsDropUploader__fileList,.k-DocumentsDropUploader__file,.k-DocumentsDropUploader__file__text{overflow:hidden;max-width:100%;}.k-DocumentsDropUploader__file__text{text-overflow:ellipsis;display:inline-block;}"], pxToRem(20), pxToRem(20), pxToRem(15), pxToRem(35), pxToRem(2), COLORS.primary4, pxToRem(-2), pxToRem(15), pxToRem(15), pxToRem(-2), pxToRem(-2), pxToRem(-2), pxToRem(-2), COLORS.primary4, COLORS.error3, COLORS.line2, COLORS.font3, COLORS.font3, COLORS.primary1, pxToRem(5), TYPOGRAPHY.fontStyles['500'], stepToRem(-1), TYPOGRAPHY.fontStyles['400'], stepToRem(-2), pxToRem(16), COLORS.grey1, pxToRem(5), pxToRem(10), pxToRem(2), COLORS.primary4, pxToRem(10), pxToRem(-10), pxToRem(-2));
const StyledErrorList = styled.ul.withConfig({
  displayName: "documents-drop-uploader__StyledErrorList",
  componentId: "sc-klc7wx-1"
})(["margin:", " 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:", ";li{line-height:1.2;}"], pxToRem(5), pxToRem(5));
export const DocumentsDropUploader = _ref => {
  let {
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
    displayErrors = true
  } = _ref;
  const [internalStatus, setInternalStatus] = useState(status);
  useEffect(() => setInternalStatus(status), [status]);
  const [isDraggingOver, setDraggingOver] = useState(false);
  const [fileList, setFileList] = useState(initialValue);
  const [errorList, setErrorList] = useState([]);
  const [internalErrorMessageList, setErrorMessageList] = useState([errorMessageList]);

  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    setDraggingOver(true);
  };

  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    setDraggingOver(false);
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    setDraggingOver(true);
  };

  const handleDrop = e => {
    var _e$dataTransfer;

    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    setDraggingOver(false);
    addFilesToList(Array.from(e == null ? void 0 : (_e$dataTransfer = e.dataTransfer) == null ? void 0 : _e$dataTransfer.files));
  };

  const onFileInputChange = e => {
    var _e$target;

    addFilesToList(Array.from(e == null ? void 0 : (_e$target = e.target) == null ? void 0 : _e$target.files));
  };

  useEffect(() => {
    if (errorList.length === 0) {
      if (fileList.length === 0) {
        setInternalStatus(status);
      } else {
        setInternalStatus('ready');
        onChange(fileList);
      }
    } else {
      onError(errorList);
    }
  }, [fileList, errorList]);

  const removeFilesFromList = file => {
    setFileList(currentList => currentList.filter(item => item !== file));
  };

  const addFilesToList = files => {
    setErrorMessageList([]);
    setErrorList([]);
    setFileList(currentList => {
      const newList = [...currentList];
      files.forEach(file => {
        let isValid = true;

        if ('File' in window && file instanceof File) {
          if (acceptedMimeTypes.length > 0 && !acceptedMimeTypes.includes(file.type)) {
            setErrorMessageList(current => [...current, typeErrorText(file.name)]);
            setInternalStatus('error');
            setErrorList(current => [...current, {
              file,
              error: typeErrorText(file.name)
            }]);
            isValid = false;
          }

          if (!!acceptedFileSize && file.size > acceptedFileSize) {
            setErrorMessageList(current => [...current, sizeErrorText(file.name)]);
            setInternalStatus('error');
            setErrorList(current => [...current, {
              file,
              error: sizeErrorText(file.name)
            }]);
            isValid = false;
          }

          if (isValid) {
            newList.push(file);
          }
        }
      });
      return newList;
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledDocumentsDropUploader, {
    className: classNames('k-DocumentsDropUploader', className, "k-DocumentsDropUploader--" + internalStatus, {
      'k-DocumentsDropUploader--isDraggingOver': isDraggingOver,
      'k-DocumentsDropUploader--disabled': disabled
    }),
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDragOver: handleDragOver,
    onDrop: handleDrop
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-DrocumentDropUploader__icon"
  }, /*#__PURE__*/React.createElement(UploadIcon, {
    color: "currentColor"
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-DocumentsDropUploader__content",
    id: id + "-cropper-description"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-DocumentsDropUploader__title"
  }, managerTitle), fileList.length === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "k-DocumentsDropUploader__text"
  }, managerText), /*#__PURE__*/React.createElement("div", {
    className: "k-DocumentsDropUploader__info"
  }, managerInfo)), fileList.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "k-DocumentsDropUploader__fileList"
  }, fileList.map((file, index) => /*#__PURE__*/React.createElement(Tag, {
    key: file.name + index,
    as: "li",
    className: "k-DocumentsDropUploader__file"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-DocumentsDropUploader__file__text"
  }, file.name), !disabled && /*#__PURE__*/React.createElement("button", {
    className: "k-DocumentsDropUploader__file__button k-u-reset-button",
    type: "button",
    onClick: () => removeFilesFromList(file)
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-u-a11y-visuallyHidden"
  }, removeActionMessage(file.name)), /*#__PURE__*/React.createElement(CrossIcon, {
    color: "currentColor"
  }))))), /*#__PURE__*/React.createElement("input", _extends({}, fileInputProps, {
    type: "file",
    id: id,
    onChange: onFileInputChange,
    disabled: disabled,
    "aria-describedby": internalStatus === 'error' && internalErrorMessageList ? id + "-error-description" : null,
    accept: acceptedMimeTypes.join(', '),
    multiple: true
  })), disabled || fileList.length === 0 ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "k-DocumentsDropUploader__button",
    children: labelText
  }) : /*#__PURE__*/React.createElement(Text, {
    tag: "label",
    htmlFor: id,
    size: "small",
    weight: "500",
    className: "k-DocumentsDropUploader__label k-u-link k-u-link-primary1 k-u-cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, "+\xA0"), labelText))), displayErrors && internalStatus === 'error' && internalErrorMessageList.length > 0 && /*#__PURE__*/React.createElement(StyledErrorList, {
    className: "k-DocumentsDropUploader__errorList",
    id: id + "-error-description"
  }, internalErrorMessageList.map((errorMsg, index) => /*#__PURE__*/React.createElement(Text, {
    key: errorMsg + index,
    as: "li",
    size: "micro",
    color: "error",
    weight: "700"
  }, errorMsg))));
};
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
  displayErrors: PropTypes.bool
};