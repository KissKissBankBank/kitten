"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.BasicUploader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _button = require("../../../action/button");

var _modifierStyles = require("../../../action/button/helpers/modifier-styles");

var _text = require("../../../typography/text");

var _classnames = _interopRequireDefault(require("classnames"));

var _uploadIcon = require("../../../graphics/icons/upload-icon");

var _checkedCircleIcon = require("../../../graphics/icons/checked-circle-icon");

var _crossCircleIcon = require("../../../graphics/icons/cross-circle-icon");

var _clockCircleIcon = require("../../../graphics/icons/clock-circle-icon");

var _crossIcon = require("../../../graphics/icons/cross-icon");

var _visuallyHidden = require("../../../accessibility/visually-hidden");

var _loader = require("../../../graphics/animations/loader");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledBasicUploader = _styledComponents.default.div.withConfig({
  displayName: "basic-uploader__StyledBasicUploader",
  componentId: "sc-5ptyqe-0"
})(["input[type='file']{border:0;clip-path:inset(100%);height:1px;overflow:hidden;padding:0;position:absolute !important;white-space:nowrap;width:1px;}input[type='file']:focus + label{background-color:", ";border-color:", ";color:", ";svg,path{fill:", ";}}input[type='file']:focus-visible + label{outline:auto;}&:not(.k-BasicUploader--loading){input[type='file']:disabled + label{border-color:", ";background-color:", ";color:", ";pointer-events:none;svg,path{fill:", ";}}}.k-BasicUploader__statusBlock{margin-top:", ";display:flex;& > * + *{margin-left:", ";}}.k-BasicUploader__cancelButton{width:", ";height:", ";cursor:pointer;padding:0;display:flex;justify-content:center;align-items:center;", "}"], _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.line2, _colorsConfig.default.line2, _colorsConfig.default.background1, _colorsConfig.default.background1, (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _modifierStyles.modifierStyles)('beryllium'));

const statusesWithIcons = ['error', 'valid', 'wait'];

const BasicUploader = _ref => {
  let {
    id,
    //required
    buttonProps = {},
    buttonText = 'Document',
    canCancel = false,
    cancelButtonText = 'Cancel and reupload',
    disabled = false,
    errorText = '',
    fileInputProps = {},
    fileName = '',
    loaderAnimation = /*#__PURE__*/_react.default.createElement(_loader.Loader, null),
    onCancel = () => {},
    onUpload = () => {},
    status = 'ready',
    statusText = '',
    ...props
  } = _ref;
  const [internalStatus, setInternalStatus] = (0, _react.useState)(status);
  (0, _react.useEffect)(() => {
    setInternalStatus(status);
  }, [status]);
  const [internalDisabled, setInternalDisabled] = (0, _react.useState)(disabled);
  (0, _react.useEffect)(() => {
    setInternalDisabled(disabled);
  }, [disabled]);
  const [internalFileName, setInternalFileName] = (0, _react.useState)('');
  const [internalCanCancel, setInternalCanCancel] = (0, _react.useState)(canCancel);
  (0, _react.useEffect)(() => {
    setInternalCanCancel(canCancel);
  }, [canCancel]);
  (0, _react.useEffect)(() => {
    if (errorText !== '') {
      setInternalStatus('error');
    }
  }, [errorText]);

  const onFileInputChange = event => {
    const files = event.currentTarget.files;
    if (files.length < 1) return;
    const tempFileName = files[0].name;
    const tempText = files.length > 1 ? tempFileName + " + " + (files.length - 1) : tempFileName;
    setInternalStatus('file-selected');
    setInternalCanCancel(true);
    setInternalFileName(tempText);
    setInternalDisabled(true);
    onUpload(event);
  };

  const onCancelButtonClick = event => {
    setInternalStatus('ready');
    setInternalCanCancel(false);
    setInternalDisabled(false);
    setInternalFileName('');
    onCancel(event);
  };

  return /*#__PURE__*/_react.default.createElement(StyledBasicUploader, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-BasicUploader', props.className, "k-BasicUploader--" + internalStatus)
  }), /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, fileInputProps, {
    type: "file",
    id: id,
    onChange: onFileInputChange,
    disabled: internalDisabled || internalStatus === 'loading'
  })), /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    fit: "fluid"
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
    weight: "500",
    color: internalStatus === 'error' ? 'error' : 'font1',
    size: "small",
    lineHeight: "normal",
    className: "k-BasicUploader__statusTitle  k-u-margin-none k-u-line-height-1-3"
  }, internalStatus === 'file-selected' ? internalFileName : errorText === '' ? fileName : errorText), /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "p",
    weight: "400",
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