import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { UploadIcon } from '../../../components/icons/upload-icon';
import { CrossIcon } from '../../../components/icons/cross-icon';
import { Text } from '../../../components/typography/text';
import { Tag } from '../../../components/atoms/tag';
var StyledDocumentsDropUploader = styled.div.withConfig({
  displayName: "documents-drop-uploader__StyledDocumentsDropUploader",
  componentId: "f0cfc8-0"
})(["border-radius:", ";padding:", ";width:100%;position:relative;box-sizing:border-box;border:", " solid ", ";position:relative;display:flex;flex-direction:row;align-items:flex-start;gap:", ";transition:border-color 0.2s ease;input[type='file']{border:0;clip-path:inset(100%);height:1px;overflow:hidden;padding:0;position:absolute !important;white-space:nowrap;width:1px;}input[type='file']:focus + label{outline:", " solid ", ";outline-offset:", ";}input[type='file']:focus:not(:focus-visible) + label{outline-color:transparent;}input[type='file']:focus-visible + label{outline-color:", ";}.k-DrocumentDropUploader__icon{margin-top:", ";margin-left:", ";}.k-DocumentsDropUploader__button{position:absolute;z-index:1;top:", ";left:", ";right:", ";bottom:", ";color:transparent;cursor:pointer;border:", " solid transparent;transition:border-color 0.2s ease;border-radius:", ";}&.k-DocumentsDropUploader--ready:hover:not(.k-DocumentsDropUploader--disabled){border-color:", ";}&.k-DocumentsDropUploader--error{border-color:", ";}&.k-DocumentsDropUploader--disabled{border-color:", ";background-color:", ";color:", ";&,.k-DocumentsDropUploader__button{cursor:not-allowed;}}input[type='file']:active:not(:disabled) + .k-DocumentsDropUploader__button,&.k-DocumentsDropUploader--isDraggingOver:not(.k-DocumentsDropUploader--disabled){border-color:", ";}.k-DocumentsDropUploader__content{display:flex;flex-direction:column;gap:", ";}.k-DocumentsDropUploader__title{", " font-size:", ";}.k-DocumentsDropUploader__text{", " font-size:", ";}.k-DocumentsDropUploader__fileList{margin:0;padding:0;list-style:none;display:flex;align-items:flex-start;flex-direction:column;gap:", ";}&.k-DocumentsDropUploader--manage,&.k-DocumentsDropUploader--error{.k-DocumentsDropUploader__fileList{padding:", " 0;}}.k-DocumentsDropUploader__file{font-weight:500;display:flex;align-items:center;outline-offset:", ";}.k-DocumentsDropUploader__file__button{padding:0 ", ";margin-right:", ";}.k-DocumentsDropUploader__content,.k-DocumentsDropUploader__fileList,.k-DocumentsDropUploader__file,.k-DocumentsDropUploader__file__text{overflow:hidden;max-width:100%;}.k-DocumentsDropUploader__file__text{text-overflow:ellipsis;display:inline-block;}"], pxToRem(8), pxToRem(20), pxToRem(2), COLORS.line1, pxToRem(35), COLORS.primary4, pxToRem(2), pxToRem(2), COLORS.primary4, pxToRem(15), pxToRem(15), pxToRem(-2), pxToRem(-2), pxToRem(-2), pxToRem(-2), pxToRem(2), pxToRem(8), COLORS.primary4, COLORS.error2, COLORS.line2, COLORS.background2, COLORS.font2, COLORS.primary1, pxToRem(5), TYPOGRAPHY.fontStyles.regular, stepToRem(-1), TYPOGRAPHY.fontStyles.light, stepToRem(-2), pxToRem(5), pxToRem(10), pxToRem(2), pxToRem(10), pxToRem(-10));
var StyledErrorList = styled.ul.withConfig({
  displayName: "documents-drop-uploader__StyledErrorList",
  componentId: "f0cfc8-1"
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
      _ref$managerText = _ref.managerText,
      managerText = _ref$managerText === void 0 ? '' : _ref$managerText,
      _ref$managerTitle = _ref.managerTitle,
      managerTitle = _ref$managerTitle === void 0 ? '' : _ref$managerTitle,
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
      _useState2 = _slicedToArray(_useState, 2),
      internalStatus = _useState2[0],
      setInternalStatus = _useState2[1];

  useEffect(function () {
    return setInternalStatus(status);
  }, [status]);

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isDraggingOver = _useState4[0],
      setDraggingOver = _useState4[1];

  var _useState5 = useState(initialValue),
      _useState6 = _slicedToArray(_useState5, 2),
      fileList = _useState6[0],
      setFileList = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      errorList = _useState8[0],
      setErrorList = _useState8[1];

  var _useState9 = useState([errorMessageList]),
      _useState10 = _slicedToArray(_useState9, 2),
      internalErrorMessageList = _useState10[0],
      setErrorMessageList = _useState10[1];

  useEffect(function () {
    if (initialValue.length === 0) return;
    setInternalStatus('manage');
  }, [initialValue]);

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
    addFilesToList(_toConsumableArray(e === null || e === void 0 ? void 0 : (_e$dataTransfer = e.dataTransfer) === null || _e$dataTransfer === void 0 ? void 0 : _e$dataTransfer.files));
  };

  var onFileInputChange = function onFileInputChange(e) {
    var _e$target;

    addFilesToList(_toConsumableArray(e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.files));
  };

  useEffect(function () {
    setErrorMessageList([]);
    setErrorList([]);
    onChange(fileList);
    if (fileList.length === 0) return setInternalStatus(status);
    setInternalStatus('manage');
    fileList.forEach(function (file) {
      if ('File' in window && file instanceof File) {
        if (acceptedMimeTypes.length > 0 && !acceptedMimeTypes.includes(file.type)) {
          setErrorMessageList(function (current) {
            return [].concat(_toConsumableArray(current), [typeErrorText(file.name)]);
          });
          setInternalStatus('error');
          setErrorList(function (current) {
            return [].concat(_toConsumableArray(current), [{
              file: file,
              error: typeErrorText(file.name)
            }]);
          });
        }

        if (!!acceptedFileSize && file.size > acceptedFileSize) {
          setErrorMessageList(function (current) {
            return [].concat(_toConsumableArray(current), [sizeErrorText(file.name)]);
          });
          setInternalStatus('error');
          setErrorList(function (current) {
            return [].concat(_toConsumableArray(current), [{
              file: file,
              error: typeErrorText(file.name)
            }]);
          });
        }
      }
    });
  }, [fileList]);
  useEffect(function () {
    if (!errorList) return;
    onError(errorList);
  }, [errorList]);

  var removeFilesFromList = function removeFilesFromList(file) {
    setFileList(function (currentList) {
      return currentList.filter(function (item) {
        return item !== file;
      });
    });
  };

  var addFilesToList = function addFilesToList(files) {
    setFileList(function (currentList) {
      var newList = _toConsumableArray(currentList);

      files.forEach(function (file) {
        if (currentList.indexOf(file) === -1) {
          newList.push(file);
        }
      });
      return newList;
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledDocumentsDropUploader, {
    className: classNames('k-DocumentsDropUploader', className, "k-DocumentsDropUploader--".concat(internalStatus), {
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
    id: "".concat(id, "-cropper-description")
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-DocumentsDropUploader__title"
  }, managerTitle), ['ready', 'error'].includes(internalStatus) && /*#__PURE__*/React.createElement("div", {
    className: "k-DocumentsDropUploader__text"
  }, managerText), fileList.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "k-DocumentsDropUploader__fileList"
  }, ['error', 'manage'].includes(internalStatus) && /*#__PURE__*/React.createElement(React.Fragment, null, fileList.map(function (file, index) {
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
  }))), /*#__PURE__*/React.createElement("input", _extends({}, fileInputProps, {
    type: "file",
    id: id,
    onChange: onFileInputChange,
    disabled: disabled,
    "aria-describedby": internalStatus === 'error' && internalErrorMessageList ? "".concat(id, "-error-description") : null,
    accept: acceptedMimeTypes.join(', '),
    multiple: true
  })), disabled || internalStatus === 'ready' ? /*#__PURE__*/React.createElement("label", {
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
    id: "".concat(id, "-error-description")
  }, internalErrorMessageList.map(function (errorMsg) {
    return /*#__PURE__*/React.createElement(Text, {
      key: errorMsg,
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
  onChange: PropTypes.func,
  quantityErrorText: PropTypes.node,
  sizeErrorText: PropTypes.func,
  status: PropTypes.oneOf(['ready', 'error', 'manage']),
  typeErrorText: PropTypes.func,
  onError: PropTypes.func,
  displayErrors: PropTypes.bool
};