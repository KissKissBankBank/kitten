"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldRadioSet = void 0;

var _react = _interopRequireDefault(require("react"));

var _radioSet = require("../../../form/radio-set");

const FieldRadioSet = props => /*#__PURE__*/_react.default.createElement("div", {
  className: "k-u-margin-top-single k-Field__control"
}, /*#__PURE__*/_react.default.createElement(_radioSet.RadioSet, props));

exports.FieldRadioSet = FieldRadioSet;