"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _deprecated = require("../../../helpers/utils/deprecated");

var _index = require("./index.js");

var Button = function Button(props) {
  var message = "Please import Button from kitten/buttons/button.";
  return /*#__PURE__*/_react.default.createElement(_deprecated.Deprecated, {
    warningMessage: message
  }, /*#__PURE__*/_react.default.createElement(_index.Button, props));
};

exports.Button = Button;