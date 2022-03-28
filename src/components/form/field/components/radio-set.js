"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldRadioSet = void 0;

var _react = _interopRequireDefault(require("react"));

var _radioButtonSet = require("../../../form/radio-button-set");

var FieldRadioSet = function FieldRadioSet(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "k-u-margin-top-single"
  }, /*#__PURE__*/_react.default.createElement(_radioButtonSet.RadioSet, props));
};

exports.FieldRadioSet = FieldRadioSet;