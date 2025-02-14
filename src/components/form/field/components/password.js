"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldPassword = void 0;

var _react = _interopRequireDefault(require("react"));

var _passwordInput = require("../../../form/input/password-input");

const FieldPassword = props => /*#__PURE__*/_react.default.createElement("div", {
  className: "k-u-margin-top-single k-Field__control"
}, /*#__PURE__*/_react.default.createElement(_passwordInput.PasswordInput, props));

exports.FieldPassword = FieldPassword;