"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldPassword = void 0;

var _react = _interopRequireWildcard(require("react"));

var _marger = require("../../../layout/marger");

var _passwordInput = require("../../password-input");

var FieldPassword = function FieldPassword(props) {
  return _react.default.createElement(_marger.Marger, {
    top: "1"
  }, _react.default.createElement(_passwordInput.PasswordInput, props));
};

exports.FieldPassword = FieldPassword;