"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DocumentsStatusBox = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _text = require("../../../typography/text");

var _clockCircleIcon = require("../../../graphics/icons/clock-circle-icon");

var _checkedCircleIcon = require("../../../graphics/icons/checked-circle-icon");

var _crossCircleIcon = require("../../../graphics/icons/cross-circle-icon");

const StyledDocumentsStatusBox = _styledComponents.default.div.withConfig({
  displayName: "documents-status-box__StyledDocumentsStatusBox",
  componentId: "sc-q7c9jp-0"
})(["border-radius:var(--border-radius-m);padding:", " ", ";width:100%;position:relative;box-sizing:border-box;position:relative;display:flex;flex-direction:row;align-items:center;gap:", ";.k-DocumentsStatusBox__fileList{margin:0;padding:0;list-style:none;display:block;line-height:1.4;}&.k-DocumentsStatusBox--wait{background-color:", ";}&.k-DocumentsStatusBox--accepted{background-color:", ";}&.k-DocumentsStatusBox--denied{background-color:", ";}"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), _colorsConfig.default.line1, _colorsConfig.default.valid1, _colorsConfig.default.error2);

const DocumentsStatusBox = _ref => {
  let {
    className,
    fileList = [],
    title = '',
    status = 'wait',
    message,
    retryActionMessage = '',
    retryAction = () => {}
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledDocumentsStatusBox, {
    className: (0, _classnames.default)('k-DocumentsStatusBox', className, "k-DocumentsStatusBox--" + status)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DrocumentDropUploader__icon"
  }, status === 'wait' && /*#__PURE__*/_react.default.createElement(_clockCircleIcon.ClockCircleIcon, {
    color: _colorsConfig.default.background1,
    bgColor: _colorsConfig.default.font1,
    width: 22,
    height: 22
  }), status === 'accepted' && /*#__PURE__*/_react.default.createElement(_checkedCircleIcon.CheckedCircleIcon, {
    color: _colorsConfig.default.background1,
    bgColor: _colorsConfig.default.valid,
    width: 22,
    height: 22
  }), status === 'denied' && /*#__PURE__*/_react.default.createElement(_crossCircleIcon.CrossCircleIcon, {
    color: _colorsConfig.default.background1,
    bgColor: _colorsConfig.default.error,
    width: 22,
    height: 22
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DocumentsStatusBox__content"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    as: "p",
    className: "k-DocumentsStatusBox__title k-u-margin-top-none k-u-margin-bottom-noneHalf",
    weight: "500",
    size: "small",
    lineHeight: "1"
  }, title), fileList.length > 0 && /*#__PURE__*/_react.default.createElement("ul", {
    className: "k-DocumentsStatusBox__fileList"
  }, fileList.map((file, index) => /*#__PURE__*/_react.default.createElement(_text.Text, {
    key: file + index,
    as: "li",
    className: "k-DocumentsStatusBox__fileName",
    size: "micro",
    weight: "400"
  }, file))), !!message && /*#__PURE__*/_react.default.createElement(_text.Text, {
    as: "p",
    weight: "500",
    size: "micro",
    className: "k-DocumentsStatusBox__message k-u-margin-bottom-none k-u-margin-top-noneHalf",
    lineHeight: "1"
  }, message), status === 'denied' && /*#__PURE__*/_react.default.createElement(_text.Text, {
    as: "button",
    className: "k-DocumentsStatusBox__button k-u-reset-button k-u-align-left k-u-margin-top-single",
    weight: "500",
    color: "error",
    type: "button",
    size: "micro",
    onClick: retryAction
  }, retryActionMessage)));
};

exports.DocumentsStatusBox = DocumentsStatusBox;
DocumentsStatusBox.propTypes = {
  title: _propTypes.default.node,
  message: _propTypes.default.node,
  status: _propTypes.default.oneOf(['wait', 'accepted', 'denied']),
  retryAction: _propTypes.default.func,
  fileList: _propTypes.default.array
};