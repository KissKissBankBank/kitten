"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldRadioButtonSet = void 0;

var _react = _interopRequireDefault(require("react"));

var _marger = require("../../../layout/marger");

var _radioButtonSet = require("../../../form/radio-button-set");

var FieldRadioButtonSet = function FieldRadioButtonSet(props) {
  return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: "1"
  }, /*#__PURE__*/_react.default.createElement(_radioButtonSet.RadioButtonSet, props));
};

exports.FieldRadioButtonSet = FieldRadioButtonSet;