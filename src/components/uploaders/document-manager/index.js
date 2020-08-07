"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentManager = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _button = require("../../../components/buttons/button/button");

var _text = require("../../../components/typography/text");

var _classnames = _interopRequireDefault(require("classnames"));

var _uploadIcon = require("../../../components/icons/upload-icon");

var _checkedCircleIcon = require("../../../components/icons/checked-circle-icon");

var _crossCircleIcon = require("../../../components/icons/cross-circle-icon");

var _clockCircleIcon = require("../../../components/icons/clock-circle-icon");

var _loader = require("../../../components/loaders/loader");

var _documentIconEmpty = require("../../../components/icons/document-icon-empty");

var _visuallyHidden = require("../../../components/accessibility/visually-hidden");

var StyledDocumentUploader = _styledComponents.default.div.withConfig({
  displayName: "document-manager__StyledDocumentUploader",
  componentId: "fhf9cu-0"
})(["{input[type='file']{border:0;clip-path:inset(100%);height:1px;overflow:hidden;padding:0;position:absolute !important;white-space:nowrap;width:1px;}input[type='file']:focus + label{background-color:", ";border-color:", ";color:", ";svg,path{fill:", ";}}input[type='file']:disabled + label{border-color:", ";background-color:", ";color:", ";pointer-events:none;svg,path{fill:", ";}}.k-DocumentManager__uploader__button{padding:", ";}.k-DocumentManager__uploader__container{display:flex;justify-content:stretch;align-items:center;width:100%;}.k-DocumentManager__uploader__documentIcon{flex:0 0 auto;margin-right:", ";align-self:flex-start;}.k-DocumentManager__uploader__content{flex:1 1 auto;}.k-DocumentManager__uploader__uploadIcon{margin-left:", ";flex:0 0 auto;}}"], _colorsConfig.default.primary2, _colorsConfig.default.primary2, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.line2, _colorsConfig.default.line2, _colorsConfig.default.background1, _colorsConfig.default.background1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20));

var StyledDocumentLoading = _styledComponents.default.div.withConfig({
  displayName: "document-manager__StyledDocumentLoading",
  componentId: "fhf9cu-1"
})([".k-DocumentManager__loading__button{min-height:", ";}"], (0, _typography.pxToRem)(100));

var StyledDocumentDisplay = _styledComponents.default.div.withConfig({
  displayName: "document-manager__StyledDocumentDisplay",
  componentId: "fhf9cu-2"
})([".k-DocumentManager__display__container{display:flex;justify-content:stretch;align-items:center;width:100%;}.k-DocumentManager__display__documentIcon{flex:0 0 auto;margin-right:", ";align-self:flex-start;}.k-DocumentManager__display__content{flex:1 1 auto;}.k-DocumentManager__actionButton{margin-top:", ";cursor:pointer;transition:color 0.2s;color:", ";&:hover,&:focus{color:", ";}&:active{color:", ";transition:none;}}&.k-DocumentManager__display--error .k-DocumentManager__actionButton{color:", ";}"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10), _colorsConfig.default.primary1, _colorsConfig.default.primary3, _colorsConfig.default.primary1, _colorsConfig.default.error);

var StyledIconContainer = _styledComponents.default.div.withConfig({
  displayName: "document-manager__StyledIconContainer",
  componentId: "fhf9cu-3"
})(["position:relative;box-sizing:border-box;width:", ";height:", ";border-radius:50%;background-color:#caf4fe;padding-top:", ";padding-left:", ";&.k-DocumentManager__iconContainer--error{background-color:", ";}&.k-DocumentManager__iconContainer--valid{background-color:", ";}.k-DocumentManager__iconContainer__statusIcon{position:absolute;right:", ";top:", ";border:", " solid ", ";width:", ";height:", ";border-radius:50%;}"], (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(60), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(19), _colorsConfig.default.error3, _colorsConfig.default.tertiary2, (0, _typography.pxToRem)(-12), (0, _typography.pxToRem)(-4), (0, _typography.pxToRem)(2), _colorsConfig.default.background1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20));

var statusesWithIcons = ['error', 'valid', 'wait'];

var IconContainer = function IconContainer(_ref) {
  var status = _ref.status,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(StyledIconContainer, {
    className: (0, _classnames.default)('k-DocumentManager__iconContainer', "k-DocumentManager__iconContainer--".concat(status))
  }, children, statusesWithIcons.includes(status) && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DocumentManager__iconContainer__statusIcon"
  }, status === 'valid' && /*#__PURE__*/_react.default.createElement(_checkedCircleIcon.CheckedCircleIcon, {
    circleColor: _colorsConfig.default.valid,
    checkedColor: _colorsConfig.default.background1,
    width: 20,
    height: 20
  }), status === 'error' && /*#__PURE__*/_react.default.createElement(_crossCircleIcon.CrossCircleIcon, {
    circleColor: _colorsConfig.default.error,
    crossColor: _colorsConfig.default.background1,
    width: 20,
    height: 20
  }), status === 'wait' && /*#__PURE__*/_react.default.createElement(_clockCircleIcon.ClockCircleIcon, {
    circleColor: _colorsConfig.default.primary1,
    clockColor: _colorsConfig.default.background1,
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
      props = (0, _objectWithoutProperties2.default)(_ref2, ["id", "buttonProps", "buttonSubtitle", "buttonTitle", "canCancel", "cancelButtonText", "canReplace", "disabled", "displaySubtitle", "displayTitle", "documentIcon", "fileInputProps", "loaderAnimation", "loaderText", "onCancel", "onUpload", "replaceButtonText", "status"]);

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      internalFileName = _useState2[0],
      setInternalFileName = _useState2[1];

  var _useState3 = (0, _react.useState)(status),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      internalStatus = _useState4[0],
      setInternalStatus = _useState4[1];

  (0, _react.useEffect)(function () {
    setInternalStatus(status);
  }, [status]);

  var _useState5 = (0, _react.useState)(disabled),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      internalDisabled = _useState6[0],
      setInternalDisabled = _useState6[1];

  (0, _react.useEffect)(function () {
    setInternalDisabled(disabled);
  }, [disabled]);

  var onFileInputChange = function onFileInputChange(event) {
    var files = event.currentTarget.files;
    if (files.length < 1) return;
    var tempFileName = files[0].name;
    var tempText = files.length > 1 ? "".concat(tempFileName, " + ").concat(files.length - 1) : tempFileName;
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
      fluid: true,
      borderRadius: 4
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
      tag: "p",
      weight: "regular",
      size: "tiny",
      lineHeight: "normal",
      className: "k-DocumentManager__statusTitle k-u-margin-none k-u-line-height-1-3"
    }, internalStatus === 'file-selected' ? internalFileName : buttonTitle), internalStatus === 'ready' && /*#__PURE__*/_react.default.createElement(_text.Text, {
      tag: "p",
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
      fluid: true,
      borderRadius: 4
    }, buttonProps, {
      as: "div",
      className: (0, _classnames.default)('k-DocumentManager__loading__button', buttonProps.className)
    }), loaderAnimation, /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, loaderText)));
  }

  return /*#__PURE__*/_react.default.createElement(StyledDocumentDisplay, (0, _extends2.default)({}, props, {
    id: id,
    className: (0, _classnames.default)('k-DocumentManager__display', "k-DocumentManager__display--".concat(status), props.className)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DocumentManager__display__container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DocumentManager__display__documentIcon"
  }, /*#__PURE__*/_react.default.createElement(IconContainer, {
    status: status
  }, documentIcon)), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DocumentManager__display__content"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "p",
    weight: "regular",
    size: "tiny",
    className: "k-DocumentManager__statusTitle k-u-margin-none k-u-line-height-1-3"
  }, displayTitle), /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "p",
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
  canCancel: _propTypes.default.bool,
  cancelButtonText: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  documentIcon: _propTypes.default.node,
  errorText: _propTypes.default.string,
  fileInputProps: _propTypes.default.object,
  fileName: _propTypes.default.string,
  loaderAnimation: _propTypes.default.node,
  loaderText: _propTypes.default.node,
  onCancel: _propTypes.default.func,
  onUpload: _propTypes.default.func,
  status: _propTypes.default.oneOf(['ready', 'error', 'valid', 'wait', 'loading']),
  subtitle: _propTypes.default.node,
  title: _propTypes.default.node
};