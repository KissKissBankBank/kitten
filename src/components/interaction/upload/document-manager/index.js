"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DocumentManager = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _button = require("../../../action/button");

var _text = require("../../../typography/text");

var _classnames = _interopRequireDefault(require("classnames"));

var _uploadIcon = require("../../../graphics/icons/upload-icon");

var _checkedCircleIcon = require("../../../graphics/icons/checked-circle-icon");

var _crossCircleIcon = require("../../../graphics/icons/cross-circle-icon");

var _clockCircleIcon = require("../../../graphics/icons/clock-circle-icon");

var _loader = require("../../../graphics/animations/loader");

var _documentIconEmpty = require("../../../graphics/icons/document-icon-empty");

var _visuallyHidden = require("../../../accessibility/visually-hidden");

var _screenConfig = require("../../../../constants/screen-config");

var _excluded = ["id", "buttonProps", "buttonSubtitle", "buttonTitle", "canCancel", "cancelButtonText", "canReplace", "disabled", "displayContent", "displaySubtitle", "displayTitle", "documentIcon", "fileInputProps", "loaderAnimation", "loaderText", "onCancel", "onUpload", "replaceButtonText", "status"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledDocumentUploader = _styledComponents.default.div.withConfig({
  displayName: "document-manager__StyledDocumentUploader",
  componentId: "sc-mfphy2-0"
})(["input[type='file']{border:0;clip-path:inset(100%);height:1px;overflow:hidden;padding:0;position:absolute !important;white-space:nowrap;width:1px;}input[type='file']:focus + label{border:", " solid ", ";}input[type='file']:focus-visible + label{outline:auto;}input[type='file']:focus,input[type='file']:hover{& + label{background-color:", ";border-color:var(--color-grey-400);color:", ";svg,path{fill:", ";}}}input[type='file']:active{& + label{background-color:", ";border-color:", ";color:", ";svg,path{fill:", ";}}}input[type='file']:disabled + label{border-color:", ";background-color:", ";color:", ";pointer-events:none;svg,path{fill:", ";}}.k-DocumentManager__uploader__button{padding:", ";}.k-DocumentManager__uploader__container{display:flex;justify-content:stretch;align-items:center;width:100%;}.k-DocumentManager__uploader__documentIcon{flex:0 0 auto;margin-right:", ";align-self:flex-start;@media (max-width:", "){display:none;}}.k-DocumentManager__uploader__content{flex:1 1 auto;}.k-DocumentManager__uploader__uploadIcon{margin-left:", ";flex:0 0 auto;}"], (0, _typography.pxToRem)(1), _colorsConfig.default.primary4, _colorsConfig.default.background2, _colorsConfig.default.font1, _colorsConfig.default.font1, _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.line2, _colorsConfig.default.line2, _colorsConfig.default.background1, _colorsConfig.default.background1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(20));

var StyledDocumentLoading = _styledComponents.default.div.withConfig({
  displayName: "document-manager__StyledDocumentLoading",
  componentId: "sc-mfphy2-1"
})([".k-DocumentManager__loading__button{min-height:", ";}"], (0, _typography.pxToRem)(100));

var StyledDocumentDisplay = _styledComponents.default.div.withConfig({
  displayName: "document-manager__StyledDocumentDisplay",
  componentId: "sc-mfphy2-2"
})([".k-DocumentManager__display__container{display:flex;justify-content:stretch;align-items:center;width:100%;}.k-DocumentManager__display__documentIcon{flex:0 0 auto;margin-right:", ";align-self:flex-start;}.k-DocumentManager__display__content{flex:1 1 auto;}.k-DocumentManager__actionButton{margin-top:", ";cursor:pointer;transition:color 0.2s;color:", ";&:hover,&:focus{color:", ";}&:focus-visible{outline:auto;}&:active{color:", ";transition:none;}}&.k-DocumentManager__display--error .k-DocumentManager__actionButton{color:", ";}"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), _colorsConfig.default.primary1, _colorsConfig.default.primary3, _colorsConfig.default.primary1, _colorsConfig.default.error);

var StyledIconContainer = _styledComponents.default.div.withConfig({
  displayName: "document-manager__StyledIconContainer",
  componentId: "sc-mfphy2-3"
})(["position:relative;box-sizing:border-box;width:", ";height:", ";border-radius:var(--border-radius-rounded);background-color:#caf4fe;padding-top:", ";padding-left:", ";&.k-DocumentManager__iconContainer--error{background-color:", ";}&.k-DocumentManager__iconContainer--valid{background-color:", ";}.k-DocumentManager__iconContainer__statusIcon{position:absolute;right:", ";top:", ";border:var(--border-width) solid ", ";width:", ";height:", ";border-radius:var(--border-radius-rounded);}"], (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(19), _colorsConfig.default.error3, _colorsConfig.default.tertiary2, (0, _typography.pxToRem)(-12), (0, _typography.pxToRem)(-4), _colorsConfig.default.background1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20));

var statusesWithIcons = ['error', 'valid', 'wait'];

var IconContainer = function IconContainer(_ref) {
  var status = _ref.status,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(StyledIconContainer, {
    className: (0, _classnames.default)('k-DocumentManager__iconContainer', "k-DocumentManager__iconContainer--" + status)
  }, children, statusesWithIcons.includes(status) && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DocumentManager__iconContainer__statusIcon"
  }, status === 'valid' && /*#__PURE__*/_react.default.createElement(_checkedCircleIcon.CheckedCircleIcon, {
    bgColor: _colorsConfig.default.valid,
    color: _colorsConfig.default.background1,
    width: 20,
    height: 20
  }), status === 'error' && /*#__PURE__*/_react.default.createElement(_crossCircleIcon.CrossCircleIcon, {
    bgColor: _colorsConfig.default.error,
    color: _colorsConfig.default.background1,
    width: 20,
    height: 20
  }), status === 'wait' && /*#__PURE__*/_react.default.createElement(_clockCircleIcon.ClockCircleIcon, {
    bgColor: _colorsConfig.default.primary1,
    color: _colorsConfig.default.background1,
    width: 20,
    height: 20
  })));
};

var DocumentManager = function DocumentManager(_ref2) {
  var id = _ref2.id,
      _ref2$buttonProps = _ref2.buttonProps,
      buttonProps = _ref2$buttonProps === void 0 ? {} : _ref2$buttonProps,
      _ref2$buttonSubtitle = _ref2.buttonSubtitle,
      buttonSubtitle = _ref2$buttonSubtitle === void 0 ? '' : _ref2$buttonSubtitle,
      _ref2$buttonTitle = _ref2.buttonTitle,
      buttonTitle = _ref2$buttonTitle === void 0 ? '' : _ref2$buttonTitle,
      _ref2$canCancel = _ref2.canCancel,
      canCancel = _ref2$canCancel === void 0 ? false : _ref2$canCancel,
      _ref2$cancelButtonTex = _ref2.cancelButtonText,
      cancelButtonText = _ref2$cancelButtonTex === void 0 ? 'Upload another document' : _ref2$cancelButtonTex,
      _ref2$canReplace = _ref2.canReplace,
      canReplace = _ref2$canReplace === void 0 ? false : _ref2$canReplace,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
      _ref2$displayContent = _ref2.displayContent,
      displayContent = _ref2$displayContent === void 0 ? null : _ref2$displayContent,
      _ref2$displaySubtitle = _ref2.displaySubtitle,
      displaySubtitle = _ref2$displaySubtitle === void 0 ? '' : _ref2$displaySubtitle,
      _ref2$displayTitle = _ref2.displayTitle,
      displayTitle = _ref2$displayTitle === void 0 ? '' : _ref2$displayTitle,
      _ref2$documentIcon = _ref2.documentIcon,
      documentIcon = _ref2$documentIcon === void 0 ? /*#__PURE__*/_react.default.createElement(_documentIconEmpty.DocumentIconEmpty, null) : _ref2$documentIcon,
      _ref2$fileInputProps = _ref2.fileInputProps,
      fileInputProps = _ref2$fileInputProps === void 0 ? {} : _ref2$fileInputProps,
      _ref2$loaderAnimation = _ref2.loaderAnimation,
      loaderAnimation = _ref2$loaderAnimation === void 0 ? /*#__PURE__*/_react.default.createElement(_loader.Loader, null) : _ref2$loaderAnimation,
      _ref2$loaderText = _ref2.loaderText,
      loaderText = _ref2$loaderText === void 0 ? '' : _ref2$loaderText,
      _ref2$onCancel = _ref2.onCancel,
      onCancel = _ref2$onCancel === void 0 ? function () {} : _ref2$onCancel,
      _ref2$onUpload = _ref2.onUpload,
      onUpload = _ref2$onUpload === void 0 ? function () {} : _ref2$onUpload,
      _ref2$replaceButtonTe = _ref2.replaceButtonText,
      replaceButtonText = _ref2$replaceButtonTe === void 0 ? 'Replace current' : _ref2$replaceButtonTe,
      _ref2$status = _ref2.status,
      status = _ref2$status === void 0 ? 'ready' : _ref2$status,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded);

  var _useState = (0, _react.useState)(''),
      internalFileName = _useState[0],
      setInternalFileName = _useState[1];

  var _useState2 = (0, _react.useState)(status),
      internalStatus = _useState2[0],
      setInternalStatus = _useState2[1];

  (0, _react.useEffect)(function () {
    setInternalStatus(status);
  }, [status]);

  var _useState3 = (0, _react.useState)(disabled),
      internalDisabled = _useState3[0],
      setInternalDisabled = _useState3[1];

  (0, _react.useEffect)(function () {
    setInternalDisabled(disabled);
  }, [disabled]);

  var onFileInputChange = function onFileInputChange(event) {
    var files = event.currentTarget.files;
    if (files.length < 1) return;
    var tempFileName = files[0].name;
    var tempText = files.length > 1 ? tempFileName + " + " + (files.length - 1) : tempFileName;
    setInternalStatus('file-selected');
    setInternalFileName(tempText);
    onUpload(event);
  };

  var handleReplaceClick = function handleReplaceClick() {
    setInternalStatus('ready');
  };

  var handleCancelClick = function handleCancelClick() {
    onCancel();
  };

  if (internalStatus === 'ready' || internalStatus === 'file-selected') {
    return /*#__PURE__*/_react.default.createElement(StyledDocumentUploader, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)('k-DocumentManager__uploader', props.className)
    }), /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, fileInputProps, {
      type: "file",
      id: id,
      onChange: onFileInputChange,
      disabled: internalDisabled
    })), /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
      fit: "fluid"
    }, buttonProps, {
      as: "label",
      htmlFor: id,
      className: (0, _classnames.default)('k-DocumentManager__uploader__button', buttonProps.className)
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "k-DocumentManager__uploader__container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "k-DocumentManager__uploader__documentIcon"
    }, /*#__PURE__*/_react.default.createElement(IconContainer, {
      status: internalStatus
    }, documentIcon)), /*#__PURE__*/_react.default.createElement("div", {
      className: "k-DocumentManager__uploader__content"
    }, /*#__PURE__*/_react.default.createElement(_text.Text, {
      tag: "div",
      weight: "regular",
      size: "tiny",
      lineHeight: "normal",
      className: "k-DocumentManager__statusTitle k-u-margin-none k-u-line-height-1-3"
    }, internalStatus === 'file-selected' ? internalFileName : buttonTitle), internalStatus === 'ready' && /*#__PURE__*/_react.default.createElement(_text.Text, {
      tag: "div",
      weight: "light",
      size: "micro",
      lineHeight: "normal",
      className: "k-DocumentManager__statusSubtitle k-u-margin-none k-u-margin-top-noneHalf k-u-line-height-1-3"
    }, buttonSubtitle)), /*#__PURE__*/_react.default.createElement("div", {
      className: "k-DocumentManager__uploader__uploadIcon"
    }, /*#__PURE__*/_react.default.createElement(_uploadIcon.UploadIcon, {
      "aria-hidden": true,
      className: "k-DocumentManager__uploader__button__uploadIcon"
    })))));
  }

  if (internalStatus === 'loading') {
    return /*#__PURE__*/_react.default.createElement(StyledDocumentLoading, (0, _extends2.default)({}, props, {
      id: id,
      className: (0, _classnames.default)('k-DocumentManager__loading', props.className)
    }), /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
      fit: "fluid"
    }, buttonProps, {
      as: "div",
      className: (0, _classnames.default)('k-DocumentManager__loading__button', buttonProps.className)
    }), loaderAnimation, /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, loaderText)));
  }

  return /*#__PURE__*/_react.default.createElement(StyledDocumentDisplay, (0, _extends2.default)({}, props, {
    id: id,
    className: (0, _classnames.default)('k-DocumentManager__display', "k-DocumentManager__display--" + status, props.className)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DocumentManager__display__container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DocumentManager__display__documentIcon"
  }, /*#__PURE__*/_react.default.createElement(IconContainer, {
    status: status
  }, documentIcon)), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DocumentManager__display__content"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "div",
    weight: "regular",
    size: "tiny",
    className: "k-DocumentManager__statusTitle k-u-margin-none k-u-line-height-1-3"
  }, displayTitle), displayContent && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DocumentManager__display__content__content k-u-margin-top-noneHalf"
  }, displayContent), /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "div",
    weight: "light",
    size: "micro",
    className: "k-DocumentManager__statusSubtitle k-u-margin-none k-u-margin-top-noneHalf k-u-line-height-1-3"
  }, displaySubtitle), canCancel && /*#__PURE__*/_react.default.createElement("button", {
    className: "k-DocumentManager__actionButton k-u-reset-button",
    onClick: handleCancelClick
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    weight: "regular",
    size: "tiny",
    className: "k-DocumentManager__actionButton__text"
  }, cancelButtonText)), canReplace && /*#__PURE__*/_react.default.createElement("button", {
    className: "k-DocumentManager__actionButton k-u-reset-button",
    onClick: handleReplaceClick
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    weight: "regular",
    size: "tiny",
    className: "k-DocumentManager__actionButton__text"
  }, replaceButtonText)))));
};

exports.DocumentManager = DocumentManager;
DocumentManager.propTypes = {
  id: _propTypes.default.string.isRequired,
  buttonProps: _propTypes.default.object,
  buttonSubtitle: _propTypes.default.node,
  buttonTitle: _propTypes.default.node,
  canCancel: _propTypes.default.bool,
  cancelButtonText: _propTypes.default.string,
  canReplace: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  displayContent: _propTypes.default.node,
  displaySubtitle: _propTypes.default.node,
  displayTitle: _propTypes.default.node,
  documentIcon: _propTypes.default.node,
  fileInputProps: _propTypes.default.object,
  loaderAnimation: _propTypes.default.node,
  loaderText: _propTypes.default.node,
  onCancel: _propTypes.default.func,
  onUpload: _propTypes.default.func,
  replaceButtonText: _propTypes.default.node,
  status: _propTypes.default.oneOf(['ready', 'error', 'valid', 'wait', 'loading'])
};