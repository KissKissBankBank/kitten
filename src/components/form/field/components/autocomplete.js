"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldAutocomplete = void 0;

var _react = _interopRequireDefault(require("react"));

var _autocomplete = require("../../../form/input/autocomplete");

const FieldAutocomplete = props => /*#__PURE__*/_react.default.createElement("div", {
  className: "k-u-margin-top-single k-Field__control"
}, /*#__PURE__*/_react.default.createElement(_autocomplete.Autocomplete, props));

exports.FieldAutocomplete = FieldAutocomplete;