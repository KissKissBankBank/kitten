"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentsDropUploader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _uploadIcon = require("../../../components/icons/upload-icon");

var _crossIcon = require("../../../components/icons/cross-icon");

var _text = require("../../../components/typography/text");

var _tag = require("../../../components/atoms/tag");

var StyledDocumentsDropUploader = _styledComponents.default.div.withConfig({
  displayName: "documents-drop-uploader__StyledDocumentsDropUploader",
  componentId: "f0cfc8-0"
})(["border-radius:", ";padding:", ";width:100%;position:relative;box-sizing:border-box;border:", " solid ", ";position:relative;display:flex;flex-direction:row;align-items:flex-start;gap:", ";transition:border-color 0.2s ease;input[type='file']{border:0;clip-path:inset(100%);height:1px;overflow:hidden;padding:0;position:absolute !important;white-space:nowrap;width:1px;}input[type='file']:focus + label{outline:", " solid ", ";outline-offset:", ";}input[type='file']:focus:not(:focus-visible) + label{outline-color:transparent;}input[type='file']:focus-visible + label{outline-color:", ";}.k-DrocumentDropUploader__icon{margin-top:", ";margin-left:", ";}.k-DocumentsDropUploader__button{position:absolute;z-index:1;top:", ";left:", ";right:", ";bottom:", ";color:transparent;cursor:pointer;border:", " solid transparent;transition:border-color 0.2s ease;border-radius:", ";}&.k-DocumentsDropUploader--ready:hover:not(.k-DocumentsDropUploader--disabled){border-color:", ";}&.k-DocumentsDropUploader--error{border-color:", ";}&.k-DocumentsDropUploader--disabled{border-color:", ";background-color:", ";color:", ";&,.k-DocumentsDropUploader__button{cursor:not-allowed;}}input[type='file']:active:not(:disabled) + .k-DocumentsDropUploader__button,&.k-DocumentsDropUploader--isDraggingOver:not(.k-DocumentsDropUploader--disabled){border-color:", ";}.k-DocumentsDropUploader__content{display:flex;flex-direction:column;gap:", ";}.k-DocumentsDropUploader__title{", " font-size:", ";}.k-DocumentsDropUploader__text{", " font-size:", ";}.k-DocumentsDropUploader__fileList{margin:0;padding:0;list-style:none;display:flex;align-items:flex-start;flex-direction:column;gap:", ";}&.k-DocumentsDropUploader--manage,&.k-DocumentsDropUploader--error{.k-DocumentsDropUploader__fileList{padding:", " 0;}}.k-DocumentsDropUploader__file{font-weight:500;display:flex;align-items:center;outline-offset:", ";}.k-DocumentsDropUploader__file__button{padding:0 ", ";margin-right:", ";}.k-DocumentsDropUploader__content,.k-DocumentsDropUploader__fileList,.k-DocumentsDropUploader__file,.k-DocumentsDropUploader__file__text{overflow:hidden;max-width:100%;}.k-DocumentsDropUploader__file__text{text-overflow:ellipsis;display:inline-block;}"], (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(2), _colorsConfig.default.line1, (0, _typography.pxToRem)(35), _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(8), _colorsConfig.default.primary4, _colorsConfig.default.error2, _colorsConfig.default.line2, _colorsConfig.default.background2, _colorsConfig.default.font2, _colorsConfig.default.primary1, (0, _typography.pxToRem)(5), _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(-10));

var StyledErrorList = _styledComponents.default.ul.withConfig({
  displayName: "documents-drop-uploader__StyledErrorList",
  componentId: "f0cfc8-1"
})(["margin:", " 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:", ";li{line-height:1.2;}"], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(5));

var DocumentsDropUploader = function DocumentsDropUploader(_ref) {
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

  var _useState = (0, _react.useState)(status),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      internalStatus = _useState2[0],
      setInternalStatus = _useState2[1];

  (0, _react.useEffect)(function () {
    return setInternalStatus(status);
  }, [status]);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isDraggingOver = _useState4[0],
      setDraggingOver = _useState4[1];

  var _useState5 = (0, _react.useState)(initialValue),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      fileList = _useState6[0],
      setFileList = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      errorList = _useState8[0],
      setErrorList = _useState8[1];

  var _useState9 = (0, _react.useState)([errorMessageList]),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      internalErrorMessageList = _useState10[0],
      setErrorMessageList = _useState10[1];

  (0, _react.useEffect)(function () {
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
    addFilesToList((0, _toConsumableArray2.default)(e === null || e === void 0 ? void 0 : (_e$dataTransfer = e.dataTransfer) === null || _e$dataTransfer === void 0 ? void 0 : _e$dataTransfer.files));
  };

  var onFileInputChange = function onFileInputChange(e) {
    var _e$target;

    addFilesToList((0, _toConsumableArray2.default)(e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.files));
  };

  (0, _react.useEffect)(function () {
    setErrorMessageList([]);
    setErrorList([]);
    onChange(fileList);
    if (fileList.length === 0) return setInternalStatus(status);
    setInternalStatus('manage');
    fileList.forEach(function (file) {
      if ('File' in window && file instanceof File) {
        if (acceptedMimeTypes.length > 0 && !acceptedMimeTypes.includes(file.type)) {
          setErrorMessageList(function (current) {
            return [].concat((0, _toConsumableArray2.default)(current), [typeErrorText(file.name)]);
          });
          setInternalStatus('error');
          setErrorList(function (current) {
            return [].concat((0, _toConsumableArray2.default)(current), [{
              file: file,
              error: typeErrorText(file.name)
            }]);
          });
        }

        if (!!acceptedFileSize && file.size > acceptedFileSize) {
          setErrorMessageList(function (current) {
            return [].concat((0, _toConsumableArray2.default)(current), [sizeErrorText(file.name)]);
          });
          setInternalStatus('error');
          setErrorList(function (current) {
            return [].concat((0, _toConsumableArray2.default)(current), [{
              file: file,
              error: typeErrorText(file.name)
            }]);
          });
        }
      }
    });
  }, [fileList]);
  (0, _react.useEffect)(function () {
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
      var newList = (0, _toConsumableArray2.default)(currentList);
      files.forEach(function (file) {
        if (currentList.indexOf(file) === -1) {
          newList.push(file);
        }
      });
      return newList;
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StyledDocumentsDropUploader, {
    className: (0, _classnames.default)('k-DocumentsDropUploader', className, "k-DocumentsDropUploader--".concat(internalStatus), {
      'k-DocumentsDropUploader--isDraggingOver': isDraggingOver,
      'k-DocumentsDropUploader--disabled': disabled
    }),
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDragOver: handleDragOver,
    onDrop: handleDrop
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DrocumentDropUploader__icon"
  }, /*#__PURE__*/_react.default.createElement(_uploadIcon.UploadIcon, {
    color: "currentColor"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DocumentsDropUploader__content",
    id: "".concat(id, "-cropper-description")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DocumentsDropUploader__title"
  }, managerTitle), ['ready', 'error'].includes(internalStatus) && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DocumentsDropUploader__text"
  }, managerText), fileList.length > 0 && /*#__PURE__*/_react.default.createElement("ul", {
    className: "k-DocumentsDropUploader__fileList"
  }, ['error', 'manage'].includes(internalStatus) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, fileList.map(function (file, index) {
    return /*#__PURE__*/_react.default.createElement(_tag.Tag, {
      key: file.name + index,
      as: "li",
      className: "k-DocumentsDropUploader__file"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "k-DocumentsDropUploader__file__text"
    }, file.name), !disabled && /*#__PURE__*/_react.default.createElement("button", {
      className: "k-DocumentsDropUploader__file__button k-u-reset-button",
      type: "button",
      onClick: function onClick() {
        return removeFilesFromList(file);
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "k-u-a11y-visuallyHidden"
    }, removeActionMessage(file.name)), /*#__PURE__*/_react.default.createElement(_crossIcon.CrossIcon, {
      color: "currentColor"
    })));
  }))), /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, fileInputProps, {
    type: "file",
    id: id,
    onChange: onFileInputChange,
    disabled: disabled,
    "aria-describedby": internalStatus === 'error' && internalErrorMessageList ? "".concat(id, "-error-description") : null,
    accept: acceptedMimeTypes.join(', '),
    multiple: true
  })), disabled || internalStatus === 'ready' ? /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    className: "k-DocumentsDropUploader__button",
    children: labelText
  }) : /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "label",
    htmlFor: id,
    size: "tiny",
    weight: "regular",
    className: "k-DocumentsDropUploader__label k-u-link k-u-link-primary1 k-u-cursor-pointer"
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": true
  }, "+\xA0"), labelText))), displayErrors && internalStatus === 'error' && internalErrorMessageList.length > 0 && /*#__PURE__*/_react.default.createElement(StyledErrorList, {
    className: "k-DocumentsDropUploader__errorList",
    id: "".concat(id, "-error-description")
  }, internalErrorMessageList.map(function (errorMsg) {
    return /*#__PURE__*/_react.default.createElement(_text.Text, {
      key: errorMsg,
      as: "li",
      size: "micro",
      color: "error",
      weight: "bold"
    }, errorMsg);
  })));
};

exports.DocumentsDropUploader = DocumentsDropUploader;
DocumentsDropUploader.propTypes = {
  id: _propTypes.default.string.isRequired,
  acceptedFileSize: _propTypes.default.number,
  acceptedMimeTypes: _propTypes.default.array,
  labelText: _propTypes.default.node,
  cropRatio: _propTypes.default.number,
  disabled: _propTypes.default.bool,
  errorMessageList: _propTypes.default.node,
  fileInputProps: _propTypes.default.object,
  initialCrop: _propTypes.default.object,
  initialValue: _propTypes.default.array,
  managerText: _propTypes.default.node,
  managerTitle: _propTypes.default.node,
  onChange: _propTypes.default.func,
  quantityErrorText: _propTypes.default.node,
  sizeErrorText: _propTypes.default.func,
  status: _propTypes.default.oneOf(['ready', 'error', 'manage']),
  typeErrorText: _propTypes.default.func,
  onError: _propTypes.default.func,
  displayErrors: _propTypes.default.bool
};