"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldCheckbox = void 0;

var _react = _interopRequireDefault(require("react"));

var _checkbox = require("../../../form/checkbox");

const FieldCheckbox = props => /*#__PURE__*/_react.default.createElement("div", {
  className: "k-Field__control"
}, /*#__PURE__*/_react.default.createElement(_checkbox.Checkbox, props));

exports.FieldCheckbox = FieldCheckbox;