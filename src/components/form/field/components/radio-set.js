"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldRadioSet = void 0;

var _react = _interopRequireDefault(require("react"));

var _radioSet = require("../../../form/radio-set");

var FieldRadioSet = function FieldRadioSet(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "k-u-margin-top-single"
  }, /*#__PURE__*/_react.default.createElement(_radioSet.RadioSet, props));
};

exports.FieldRadioSet = FieldRadioSet;