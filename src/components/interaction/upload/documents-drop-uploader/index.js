"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DocumentsDropUploader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var _uploadIcon = require("../../../graphics/icons/upload-icon");

var _crossIcon = require("../../../graphics/icons/cross-icon");

var _text = require("../../../typography/text");

var _tag = require("../../../information/tag");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledDocumentsDropUploader = _styledComponents.default.div.withConfig({
  displayName: "documents-drop-uploader__StyledDocumentsDropUploader",
  componentId: "sc-klc7wx-0"
})(["border-radius:var(--border-radius-m);padding:", " ", " ", ";width:100%;position:relative;box-sizing:border-box;border:var(--border);position:relative;display:flex;flex-direction:row;align-items:flex-start;gap:", ";transition:border-color 0.2s ease;input[type='file']{border:0;clip-path:inset(100%);height:1px;overflow:hidden;padding:0;position:absolute !important;white-space:nowrap;width:1px;}input[type='file']:focus + label.k-DocumentsDropUploader__button{border:", " solid ", ";}input[type='file']:focus-visible + label.k-DocumentsDropUploader__button{outline:auto;}input[type='file']:focus-visible + label.k-DocumentsDropUploader__label{outline:auto;outline-offset:", ";}.k-DrocumentDropUploader__icon{margin-top:", ";margin-left:", ";}.k-DocumentsDropUploader__button{position:absolute;z-index:1;top:", ";left:", ";right:", ";bottom:", ";color:transparent;cursor:pointer;border:var(--border-width) solid transparent;transition:border-color 0.2s ease;border-radius:var(--border-radius-m);}&.k-DocumentsDropUploader--ready:hover:not(.k-DocumentsDropUploader--disabled){border-color:", ";}&.k-DocumentsDropUploader--error{border-color:", ";}&.k-DocumentsDropUploader--disabled{border-color:", ";color:", ";.k-DocumentsDropUploader__info{color:", ";}&,.k-DocumentsDropUploader__button{cursor:not-allowed;}}input[type='file']:active:not(:disabled) + .k-DocumentsDropUploader__button,&.k-DocumentsDropUploader--isDraggingOver:not(.k-DocumentsDropUploader--disabled){border-color:", ";}.k-DocumentsDropUploader__content{display:flex;flex-direction:column;gap:", ";}.k-DocumentsDropUploader__title{", " font-size:", ";line-height:1;}.k-DocumentsDropUploader__text,.k-DocumentsDropUploader__info{", " font-size:", ";line-height:", ";&:empty{display:none;}}.k-DocumentsDropUploader__info{color:", ";}.k-DocumentsDropUploader__fileList{margin:0;padding:0;list-style:none;display:flex;align-items:flex-start;flex-direction:column;gap:", ";padding:", " 0;}.k-DocumentsDropUploader__file{font-weight:500;display:flex;align-items:center;outline-offset:", ";cursor:default;transition:color 0.2s ease,background-color 0.2s ease;&:hover{background-color:", ";}}.k-DocumentsDropUploader__file__button{padding:0 ", ";margin-right:", ";:focus,:focus-visible{outline-offset:", ";}}.k-DocumentsDropUploader__content,.k-DocumentsDropUploader__fileList,.k-DocumentsDropUploader__file,.k-DocumentsDropUploader__file__text{overflow:hidden;max-width:100%;}.k-DocumentsDropUploader__file__text{text-overflow:ellipsis;display:inline-block;}"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(35), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(-2), _colorsConfig.default.primary4, _colorsConfig.default.error3, _colorsConfig.default.line2, _colorsConfig.default.font3, _colorsConfig.default.font3, _colorsConfig.default.primary1, (0, _typography.pxToRem)(5), _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(16), _colorsConfig.default.grey1, (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(-10), (0, _typography.pxToRem)(-2));

var StyledErrorList = _styledComponents.default.ul.withConfig({
  displayName: "documents-drop-uploader__StyledErrorList",
  componentId: "sc-klc7wx-1"
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

  var _useState = (0, _react.useState)(status),
      internalStatus = _useState[0],
      setInternalStatus = _useState[1];

  (0, _react.useEffect)(function () {
    return setInternalStatus(status);
  }, [status]);

  var _useState2 = (0, _react.useState)(false),
      isDraggingOver = _useState2[0],
      setDraggingOver = _useState2[1];

  var _useState3 = (0, _react.useState)(initialValue),
      fileList = _useState3[0],
      setFileList = _useState3[1];

  var _useState4 = (0, _react.useState)([]),
      errorList = _useState4[0],
      setErrorList = _useState4[1];

  var _useState5 = (0, _react.useState)([errorMessageList]),
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

  (0, _react.useEffect)(function () {
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

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StyledDocumentsDropUploader, {
    className: (0, _classnames.default)('k-DocumentsDropUploader', className, "k-DocumentsDropUploader--" + internalStatus, {
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
    id: id + "-cropper-description"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DocumentsDropUploader__title"
  }, managerTitle), fileList.length === 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DocumentsDropUploader__text"
  }, managerText), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DocumentsDropUploader__info"
  }, managerInfo)), fileList.length > 0 && /*#__PURE__*/_react.default.createElement("ul", {
    className: "k-DocumentsDropUploader__fileList"
  }, fileList.map(function (file, index) {
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
  })), /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, fileInputProps, {
    type: "file",
    id: id,
    onChange: onFileInputChange,
    disabled: disabled,
    "aria-describedby": internalStatus === 'error' && internalErrorMessageList ? id + "-error-description" : null,
    accept: acceptedMimeTypes.join(', '),
    multiple: true
  })), disabled || fileList.length === 0 ? /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id,
    className: "k-DocumentsDropUploader__button",
    children: labelText
  }) : /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "label",
    htmlFor: id,
    size: "small",
    weight: "regular",
    className: "k-DocumentsDropUploader__label k-u-link k-u-link-primary1 k-u-cursor-pointer"
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": true
  }, "+\xA0"), labelText))), displayErrors && internalStatus === 'error' && internalErrorMessageList.length > 0 && /*#__PURE__*/_react.default.createElement(StyledErrorList, {
    className: "k-DocumentsDropUploader__errorList",
    id: id + "-error-description"
  }, internalErrorMessageList.map(function (errorMsg, index) {
    return /*#__PURE__*/_react.default.createElement(_text.Text, {
      key: errorMsg + index,
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
  managerInfo: _propTypes.default.node,
  onChange: _propTypes.default.func,
  sizeErrorText: _propTypes.default.func,
  status: _propTypes.default.oneOf(['ready', 'error']),
  typeErrorText: _propTypes.default.func,
  onError: _propTypes.default.func,
  displayErrors: _propTypes.default.bool
};