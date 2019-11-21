"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldSelect = void 0;

var _react = _interopRequireDefault(require("react"));

var _marger = require("../../../layout/marger");

var _selectWithState = require("../../../form/select-with-state");

var FieldSelect = function FieldSelect(props) {
  return _react.default.createElement(_marger.Marger, {
    top: "1"
  }, _react.default.createElement(_selectWithState.SelectWithState, props));
};

exports.FieldSelect = FieldSelect;