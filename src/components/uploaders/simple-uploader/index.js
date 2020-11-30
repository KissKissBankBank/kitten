"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleUploader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _uploader = require("../../../components/uploaders/uploader");

var _button = require("../../../components/buttons/button");

var _buttonIcon = require("../../../components/buttons/button-icon");

var _crossIcon = require("../../../components/icons/cross-icon");

var Theme = function Theme(props) {
  var handleClick = props.disabled ? null : props.onCancel;
  var deleteButton = props.deletable && props.fileName ? /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, {
    className: "k-SimpleUploader__buttonIcon",
    size: "nano",
    disabled: props.disabled,
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement(_crossIcon.CrossIcon, {
    className: "k-ButtonIcon__svg"
  })) : null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "k-SimpleUploader"
  }, /*#__PURE__*/_react.default.createElement(_button.Button, {
    size: "tiny",
    type: "button",
    className: "k-SimpleUploader__button",
    disabled: props.disabled,
    onClick: props.onClick
  }, props.buttonLabel), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-SimpleUploader__link"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "k-SimpleUploader__text"
  }, props.fileName), deleteButton));
};

Theme.defaultProps = {
  buttonLabel: 'Choose a file',
  fileName: null,
  onClick: function onClick() {},
  onCancel: function onCancel() {},
  disabled: false,
  deletable: true
};

var SimpleUploader = function SimpleUploader(props) {
  return /*#__PURE__*/_react.default.createElement(_uploader.Uploader, (0, _extends2.default)({}, props, {
    theme: Theme
  }));
};

exports.SimpleUploader = SimpleUploader;