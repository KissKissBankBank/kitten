"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldPassword = void 0;

var _react = _interopRequireDefault(require("react"));

var _passwordInput = require("../../password-input");

var FieldPassword = function FieldPassword(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "k-u-margin-top-single"
  }, /*#__PURE__*/_react.default.createElement(_passwordInput.PasswordInput, props));
};

exports.FieldPassword = FieldPassword;