"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicUploader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _button = require("../../../components/buttons/button/button");

var _modifierStyles = require("../../../components/buttons/button/helpers/modifier-styles");

var _text = require("../../../components/typography/text");

var _classnames = _interopRequireDefault(require("classnames"));

var _uploadIcon = require("../../../components/icons/upload-icon");

var _checkedCircleIcon = require("../../../components/icons/checked-circle-icon");

var _crossCircleIcon = require("../../../components/icons/cross-circle-icon");

var _clockCircleIcon = require("../../../components/icons/clock-circle-icon");

var _crossIcon = require("../../../components/icons/cross-icon");

var _visuallyHidden = require("../../../components/accessibility/visually-hidden");

var _loader = require("../../../components/loaders/loader");

var StyledBasicUploader = _styledComponents.default.div.withConfig({
  displayName: "basic-uploader__StyledBasicUploader",
  componentId: "sc-1t7apx8-0"
})(["input[type='file']{border:0;clip-path:inset(100%);height:1px;overflow:hidden;padding:0;position:absolute !important;white-space:nowrap;width:1px;}input[type='file']:focus + label{background-color:", ";border-color:", ";color:", ";svg,path{fill:", ";}}&:not(.k-BasicUploader--loading){input[type='file']:disabled + label{border-color:", ";background-color:", ";color:", ";pointer-events:none;svg,path{fill:", ";}}}.k-BasicUploader__statusBlock{margin-top:", ";display:flex;& > * + *{margin-left:", ";}}.k-BasicUploader__cancelButton{width:", ";height:", ";cursor:pointer;padding:0;display:flex;justify-content:center;align-items:center;", "}"], _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.line2, _colorsConfig.default.line2, _colorsConfig.default.background1, _colorsConfig.default.background1, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _modifierStyles.modifierStyles)('beryllium'));

var statusesWithIcons = ['error', 'valid', 'wait'];

var BasicUploader = function BasicUploader(_ref) {
  var id = _ref.id,
      _ref$buttonProps = _ref.buttonProps,
      buttonProps = _ref$buttonProps === void 0 ? {} : _ref$buttonProps,
      _ref$buttonText = _ref.buttonText,
      buttonText = _ref$buttonText === void 0 ? 'Document' : _ref$buttonText,
      _ref$canCancel = _ref.canCancel,
      canCancel = _ref$canCancel === void 0 ? false : _ref$canCancel,
      _ref$cancelButtonText = _ref.cancelButtonText,
      cancelButtonText = _ref$cancelButtonText === void 0 ? 'Cancel and reupload' : _ref$cancelButtonText,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$errorText = _ref.errorText,
      errorText = _ref$errorText === void 0 ? '' : _ref$errorText,
      _ref$fileInputProps = _ref.fileInputProps,
      fileInputProps = _ref$fileInputProps === void 0 ? {} : _ref$fileInputProps,
      _ref$fileName = _ref.fileName,
      fileName = _ref$fileName === void 0 ? '' : _ref$fileName,
      _ref$loaderAnimation = _ref.loaderAnimation,
      loaderAnimation = _ref$loaderAnimation === void 0 ? /*#__PURE__*/_react.default.createElement(_loader.Loader, null) : _ref$loaderAnimation,
      _ref$onCancel = _ref.onCancel,
      onCancel = _ref$onCancel === void 0 ? function () {} : _ref$onCancel,
      _ref$onUpload = _ref.onUpload,
      onUpload = _ref$onUpload === void 0 ? function () {} : _ref$onUpload,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? 'ready' : _ref$status,
      _ref$statusText = _ref.statusText,
      statusText = _ref$statusText === void 0 ? '' : _ref$statusText,
      props = (0, _objectWithoutProperties2.default)(_ref, ["id", "buttonProps", "buttonText", "canCancel", "cancelButtonText", "disabled", "errorText", "fileInputProps", "fileName", "loaderAnimation", "onCancel", "onUpload", "status", "statusText"]);

  var _useState = (0, _react.useState)(status),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      internalStatus = _useState2[0],
      setInternalStatus = _useState2[1];

  (0, _react.useEffect)(function () {
    setInternalStatus(status);
  }, [status]);

  var _useState3 = (0, _react.useState)(disabled),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      internalDisabled = _useState4[0],
      setInternalDisabled = _useState4[1];

  (0, _react.useEffect)(function () {
    setInternalDisabled(disabled);
  }, [disabled]);

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      internalFileName = _useState6[0],
      setInternalFileName = _useState6[1];

  var _useState7 = (0, _react.useState)(canCancel),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      internalCanCancel = _useState8[0],
      setInternalCanCancel = _useState8[1];

  (0, _react.useEffect)(function () {
    setInternalCanCancel(canCancel);
  }, [canCancel]);
  (0, _react.useEffect)(function () {
    if (errorText !== '') {
      setInternalStatus('error');
    }
  }, [errorText]);

  var onFileInputChange = function onFileInputChange(event) {
    var files = event.currentTarget.files;
    if (files.length < 1) return;
    var tempFileName = files[0].name;
    var tempText = files.length > 1 ? "".concat(tempFileName, " + ").concat(files.length - 1) : tempFileName;
    setInternalStatus('file-selected');
    setInternalCanCancel(true);
    setInternalFileName(tempText);
    setInternalDisabled(true);
    onUpload(event);
  };

  var onCancelButtonClick = function onCancelButtonClick(event) {
    setInternalStatus('ready');
    setInternalCanCancel(false);
    setInternalDisabled(false);
    setInternalFileName('');
    onCancel(event);
  };

  return /*#__PURE__*/_react.default.createElement(StyledBasicUploader, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-BasicUploader', props.className, "k-BasicUploader--".concat(internalStatus))
  }), /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, fileInputProps, {
    type: "file",
    id: id,
    onChange: onFileInputChange,
    disabled: internalDisabled || internalStatus === 'loading'
  })), /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    fluid: true
  }, buttonProps, {
    as: "label",
    htmlFor: id,
    className: (0, _classnames.default)('k-BasicUploader__button', buttonProps.className)
  }), internalStatus === 'loading' ? loaderAnimation : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_uploadIcon.UploadIcon, {
    "aria-hidden": true,
    className: "k-BasicUploader__button__uploadIcon k-u-margin-right-singleHalf"
  }), /*#__PURE__*/_react.default.createElement("span", null, buttonText))), internalStatus !== 'ready' && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-BasicUploader__statusBlock"
  }, internalCanCancel && /*#__PURE__*/_react.default.createElement("button", {
    className: "k-BasicUploader__cancelButton",
    onClick: onCancelButtonClick
  }, /*#__PURE__*/_react.default.createElement(_crossIcon.CrossIcon, null), /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, cancelButtonText)), !internalCanCancel && statusesWithIcons.includes(internalStatus) && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-BasicUploader__statusIcon"
  }, internalStatus === 'valid' && /*#__PURE__*/_react.default.createElement(_checkedCircleIcon.CheckedCircleIcon, {
    circleColor: _colorsConfig.default.valid,
    checkedColor: _colorsConfig.default.background1,
    width: 20,
    height: 20,
    "aria-hidden": true
  }), internalStatus === 'error' && /*#__PURE__*/_react.default.createElement(_crossCircleIcon.CrossCircleIcon, {
    circleColor: _colorsConfig.default.error,
    crossColor: _colorsConfig.default.background1,
    width: 20,
    height: 20,
    "aria-hidden": true
  }), internalStatus === 'wait' && /*#__PURE__*/_react.default.createElement(_clockCircleIcon.ClockCircleIcon, {
    circleColor: _colorsConfig.default.primary1,
    clockColor: _colorsConfig.default.background1,
    width: 20,
    height: 20,
    "aria-hidden": true
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "p",
    weight: "regular",
    color: internalStatus === 'error' ? 'error' : 'font1',
    size: "tiny",
    lineHeight: "normal",
    className: "k-BasicUploader__statusTitle  k-u-margin-none k-u-line-height-1-3"
  }, internalStatus === 'file-selected' ? internalFileName : errorText === '' ? fileName : errorText), /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "p",
    weight: "light",
    color: internalStatus === 'error' ? 'error' : 'font1',
    size: "micro",
    lineHeight: "normal",
    className: "k-BasicUploader__statusSubtitle  k-u-margin-none k-u-margin-top-noneHalf k-u-line-height-1-3"
  }, statusesWithIcons.includes(internalStatus) && statusText))));
};

exports.BasicUploader = BasicUploader;
BasicUploader.propTypes = {
  id: _propTypes.default.string.isRequired,
  buttonProps: _propTypes.default.object,
  buttonText: _propTypes.default.string,
  canCancel: _propTypes.default.bool,
  cancelButtonText: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  errorText: _propTypes.default.string,
  fileInputProps: _propTypes.default.object,
  fileName: _propTypes.default.string,
  onCancel: _propTypes.default.func,
  onUpload: _propTypes.default.func,
  status: _propTypes.default.oneOf(['ready', 'error', 'valid', 'wait', 'loading']),
  statusText: _propTypes.default.string
};