"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldAutocomplete = void 0;

var _react = _interopRequireDefault(require("react"));

var _autocomplete = require("../../../form/input/autocomplete");

var FieldAutocomplete = function FieldAutocomplete(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "k-u-margin-top-single"
  }, /*#__PURE__*/_react.default.createElement(_autocomplete.Autocomplete, props));
};

exports.FieldAutocomplete = FieldAutocomplete;