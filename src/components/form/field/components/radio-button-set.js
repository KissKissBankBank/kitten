"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldRadioButtonSet = void 0;

var _react = _interopRequireDefault(require("react"));

var _radioButtonSet = require("../../../form/radio-button-set");

const FieldRadioButtonSet = props => /*#__PURE__*/_react.default.createElement("div", {
  className: "k-u-margin-top-single k-Field__control"
}, /*#__PURE__*/_react.default.createElement(_radioButtonSet.RadioButtonSet, props));

exports.FieldRadioButtonSet = FieldRadioButtonSet;