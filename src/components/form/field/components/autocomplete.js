"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldAutocomplete = void 0;

var _react = _interopRequireDefault(require("react"));

var _marger = require("../../../layout/marger");

var _autocomplete = require("../../../form/autocomplete");

var FieldAutocomplete = function FieldAutocomplete(props) {
  return _react.default.createElement(_marger.Marger, {
    top: "1.5"
  }, _react.default.createElement(_autocomplete.Autocomplete, props));
};

exports.FieldAutocomplete = FieldAutocomplete;