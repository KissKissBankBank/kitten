"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldCheckbox = void 0;

var _react = _interopRequireDefault(require("react"));

var _checkbox = require("../../../form/checkbox");

var FieldCheckbox = function FieldCheckbox(props) {
  return /*#__PURE__*/_react.default.createElement(_checkbox.Checkbox, props);
};

exports.FieldCheckbox = FieldCheckbox;