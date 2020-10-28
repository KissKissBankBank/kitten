"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldPassword = void 0;

var _react = _interopRequireDefault(require("react"));

var _marger = require("../../../layout/marger");

var _passwordInput = require("../../password-input");

var FieldPassword = function FieldPassword(props) {
  return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: "1"
  }, /*#__PURE__*/_react.default.createElement(_passwordInput.PasswordInput, props));
};

exports.FieldPassword = FieldPassword;