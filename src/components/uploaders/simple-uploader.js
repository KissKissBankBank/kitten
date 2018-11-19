"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleUploader = void 0;

var _react = _interopRequireDefault(require("react"));

var _uploader = require("kitten/components/uploaders/uploader");

var _button = require("kitten/components/buttons/button");

var _buttonIcon = require("kitten/components/buttons/button-icon");

var _crossIcon = require("kitten/components/icons/cross-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Theme = function Theme(props) {
  var handleClick = props.disabled ? null : props.onCancel;
  var deleteButton = props.deletable && props.fileName ? _react.default.createElement(_buttonIcon.ButtonIcon, {
    className: "k-SimpleUploader__buttonIcon",
    size: "nano",
    disabled: props.disabled,
    onClick: handleClick
  }, _react.default.createElement(_crossIcon.CrossIcon, {
    className: "k-ButtonIcon__svg"
  })) : null;
  return _react.default.createElement("div", {
    className: "k-SimpleUploader"
  }, _react.default.createElement(_button.Button, {
    size: "tiny",
    type: "button",
    className: "k-SimpleUploader__button",
    disabled: props.disabled,
    onClick: props.onClick
  }, props.buttonLabel), _react.default.createElement("div", {
    className: "k-SimpleUploader__link"
  }, _react.default.createElement("span", {
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
  return _react.default.createElement(_uploader.Uploader, _extends({}, props, {
    theme: Theme
  }));
};

exports.SimpleUploader = SimpleUploader;