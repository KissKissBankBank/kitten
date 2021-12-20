import _extends from "@babel/runtime/helpers/extends";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import COLORS from '../../../../constants/colors-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import { UploadIcon } from '../../../../components/graphics/icons/upload-icon';
import { CrossIcon } from '../../../../components/graphics/icons/cross-icon';
import { Text } from '../../../../components/atoms/typography/text';
import { Tag } from '../../../../components/atoms/tag';
var StyledDocumentsDropUploader = styled.div.withConfig({
  displayName: "documents-drop-uploader__StyledDocumentsDropUploader",
  componentId: "sc-1m4qlht-0"
})(["border-radius:var(--border-radius-m);padding:", " ", " ", ";width:100%;position:relative;box-sizing:border-box;border:var(--border);position:relative;display:flex;flex-direction:row;align-items:flex-start;gap:", ";transition:border-color 0.2s ease;input[type='file']{border:0;clip-path:inset(100%);height:1px;overflow:hidden;padding:0;position:absolute !important;white-space:nowrap;width:1px;}input[type='file']:focus + label.k-DocumentsDropUploader__button{border:", " solid ", ";}input[type='file']:focus-visible + label.k-DocumentsDropUploader__button{outline:auto;}input[type='file']:focus-visible + label.k-DocumentsDropUploader__label{outline:auto;outline-offset:", ";}.k-DrocumentDropUploader__icon{margin-top:", ";margin-left:", ";}.k-DocumentsDropUploader__button{position:absolute;z-index:1;top:", ";left:", ";right:", ";bottom:", ";color:transparent;cursor:pointer;border:var(--border-width) solid transparent;transition:border-color 0.2s ease;border-radius:var(--border-radius-m);}&.k-DocumentsDropUploader--ready:hover:not(.k-DocumentsDropUploader--disabled){border-color:", ";}&.k-DocumentsDropUploader--error{border-color:", ";}&.k-DocumentsDropUploader--disabled{border-color:", ";color:", ";.k-DocumentsDropUploader__info{color:", ";}&,.k-DocumentsDropUploader__button{cursor:not-allowed;}}input[type='file']:active:not(:disabled) + .k-DocumentsDropUploader__button,&.k-DocumentsDropUploader--isDraggingOver:not(.k-DocumentsDropUploader--disabled){border-color:", ";}.k-DocumentsDropUploader__content{display:flex;flex-direction:column;gap:", ";}.k-DocumentsDropUploader__title{", " font-size:", ";line-height:1;}.k-DocumentsDropUploader__text,.k-DocumentsDropUploader__info{", " font-size:", ";line-height:", ";&:empty{display:none;}}.k-DocumentsDropUploader__info{color:", ";}.k-DocumentsDropUploader__fileList{margin:0;padding:0;list-style:none;display:flex;align-items:flex-start;flex-direction:column;gap:", ";padding:", " 0;}.k-DocumentsDropUploader__file{font-weight:500;display:flex;align-items:center;outline-offset:", ";cursor:default;transition:color 0.2s ease,background-color 0.2s ease;&:hover{background-color:", ";}}.k-DocumentsDropUploader__file__button{padding:0 ", ";margin-right:", ";:focus,:focus-visible{outline-offset:", ";}}.k-DocumentsDropUploader__content,.k-DocumentsDropUploader__fileList,.k-DocumentsDropUploader__file,.k-DocumentsDropUploader__file__text{overflow:hidden;max-width:100%;}.k-DocumentsDropUploader__file__text{text-overflow:ellipsis;display:inline-block;}"], pxToRem(20), pxToRem(20), pxToRem(15), pxToRem(35), pxToRem(2), COLORS.primary4, pxToRem(-2), pxToRem(15), pxToRem(15), pxToRem(-2), pxToRem(-2), pxToRem(-2), pxToRem(-2), COLORS.primary4, COLORS.error3, COLORS.line2, COLORS.font3, COLORS.font3, COLORS.primary1, pxToRem(5), TYPOGRAPHY.fontStyles.regular, stepToRem(-1), TYPOGRAPHY.fontStyles.light, stepToRem(-2), pxToRem(16), COLORS.grey1, pxToRem(5), pxToRem(10), pxToRem(2), COLORS.primary4, pxToRem(10), pxToRem(-10), pxToRem(-2));
var StyledErrorList = styled.ul.withConfig({
  displayName: "documents-drop-uploader__StyledErrorList",
  componentId: "sc-1m4qlht-1"
})(["margin:", " 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:", ";li{line-height:1.2;}"], pxToRem(5), pxToRem(5));
export var DocumentsDropUploader = function DocumentsDropUploader(_ref) {
  var id = _ref.id,
      _ref$acceptedFileSize = _ref.acceptedFileSize,
      acceptedFileSize = _ref$acceptedFileSize === void 0 ? 5 * 1024 * 1024 : _ref$acceptedFileSize,
      _ref$acceptedMimeType = _ref.acceptedMimeTypes,
      acceptedMimeTypes = _ref$acceptedMimeType === void 0 ? [] : _ref$acceptedMimeType,
      _ref$labelText = _ref.labelText,
      labelText = _ref$labelText === void 0 ? '' : _ref$labelText,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$errorMessageList = _ref.errorMessageList,
      errorMessageList = _ref$errorMessageList === void 0 ? null : _ref$errorMessageList,
      _ref$fileInputProps = _ref.fileInputProps,
      fileInputProps = _ref$fileInputProps === void 0 ? {} : _ref$fileInputProps,
      _ref$initialValue = _ref.initialValue,
      initialValue = _ref$initialValue === void 0 ? [] : _ref$initialValue,
      _ref$managerTitle = _ref.managerTitle,
      managerTitle = _ref$managerTitle === void 0 ? '' : _ref$managerTitle,
      _ref$managerText = _ref.managerText,
      managerText = _ref$managerText === void 0 ? '' : _ref$managerText,
      _ref$managerInfo = _ref.managerInfo,
      managerInfo = _ref$managerInfo === void 0 ? '' : _ref$managerInfo,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$sizeErrorText = _ref.sizeErrorText,
      sizeErrorText = _ref$sizeErrorText === void 0 ? function (i) {
    return i;
  } : _ref$sizeErrorText,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? 'ready' : _ref$status,
      _ref$typeErrorText = _ref.typeErrorText,
      typeErrorText = _ref$typeErrorText === void 0 ? function (i) {
    return i;
  } : _ref$typeErrorText,
      _ref$removeActionMess = _ref.removeActionMessage,
      removeActionMessage = _ref$removeActionMess === void 0 ? function (i) {
    return i;
  } : _ref$removeActionMess,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? function () {} : _ref$onError,
      _ref$displayErrors = _ref.displayErrors,
      displayErrors = _ref$displayErrors === void 0 ? true : _ref$displayErrors;

  var _useState = useState(status),
      internalStatus = _useState[0],
      setInternalStatus = _useState[1];

  useEffect(function () {
    return setInternalStatus(status);
  }, [status]);

  var _useState2 = useState(false),
      isDraggingOver = _useState2[0],
      setDraggingOver = _useState2[1];

  var _useState3 = useState(initialValue),
      fileList = _useState3[0],
      setFileList = _useState3[1];

  var _useState4 = useState([]),
      errorList = _useState4[0],
      setErrorList = _useState4[1];

  var _useState5 = useState([errorMessageList]),
      internalErrorMessageList = _useState5[0],
      setErrorMessageList = _useState5[1];

  var handleDragEnter = function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    setDraggingOver(true);
  };

  var handleDragLeave = function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    setDraggingOver(false);
  };

  var handleDragOver = function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    setDraggingOver(true);
  };

  var handleDrop = function handleDrop(e) {
    var _e$dataTransfer;

    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    setDraggingOver(false);
    addFilesToList(Array.from(e == null ? void 0 : (_e$dataTransfer = e.dataTransfer) == null ? void 0 : _e$dataTransfer.files));
  };

  var onFileInputChange = function onFileInputChange(e) {
    var _e$target;

    addFilesToList(Array.from(e == null ? void 0 : (_e$target = e.target) == null ? void 0 : _e$target.files));
  };

  useEffect(function () {
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

  var removeFilesFromList = function removeFilesFromList(file) {
    setFileList(function (currentList) {
      return currentList.filter(function (item) {
        return item !== file;
      });
    });
  };

  var addFilesToList = function addFilesToList(files) {
    setErrorMessageList([]);
    setErrorList([]);
    setFileList(function (currentList) {
      var newList = [].concat(currentList);
      files.forEach(function (file) {
        var isValid = true;

        if ('File' in window && file instanceof File) {
          if (acceptedMimeTypes.length > 0 && !acceptedMimeTypes.includes(file.type)) {
            setErrorMessageList(function (current) {
              return [].concat(current, [typeErrorText(file.name)]);
            });
            setInternalStatus('error');
            setErrorList(function (current) {
              return [].concat(current, [{
                file: file,
                error: typeErrorText(file.name)
              }]);
            });
            isValid = false;
          }

          if (!!acceptedFileSize && file.size > acceptedFileSize) {
            setErrorMessageList(function (current) {
              return [].concat(current, [sizeErrorText(file.name)]);
            });
            setInternalStatus('error');
            setErrorList(function (current) {
              return [].concat(current, [{
                file: file,
                error: sizeErrorText(file.name)
              }]);
            });
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
  }, fileList.map(function (file, index) {
    return /*#__PURE__*/React.createElement(Tag, {
      key: file.name + index,
      as: "li",
      className: "k-DocumentsDropUploader__file"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-DocumentsDropUploader__file__text"
    }, file.name), !disabled && /*#__PURE__*/React.createElement("button", {
      className: "k-DocumentsDropUploader__file__button k-u-reset-button",
      type: "button",
      onClick: function onClick() {
        return removeFilesFromList(file);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "k-u-a11y-visuallyHidden"
    }, removeActionMessage(file.name)), /*#__PURE__*/React.createElement(CrossIcon, {
      color: "currentColor"
    })));
  })), /*#__PURE__*/React.createElement("input", _extends({}, fileInputProps, {
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
    size: "tiny",
    weight: "regular",
    className: "k-DocumentsDropUploader__label k-u-link k-u-link-primary1 k-u-cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, "+\xA0"), labelText))), displayErrors && internalStatus === 'error' && internalErrorMessageList.length > 0 && /*#__PURE__*/React.createElement(StyledErrorList, {
    className: "k-DocumentsDropUploader__errorList",
    id: id + "-error-description"
  }, internalErrorMessageList.map(function (errorMsg, index) {
    return /*#__PURE__*/React.createElement(Text, {
      key: errorMsg + index,
      as: "li",
      size: "micro",
      color: "error",
      weight: "bold"
    }, errorMsg);
  })));
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