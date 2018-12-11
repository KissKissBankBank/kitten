"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldSelectExample = exports.FieldRadioButtonSetExample = exports.FieldInputExample = void 0;

var _react = _interopRequireDefault(require("react"));

var _field = require("../field");

var FieldBase = function FieldBase(_ref) {
  var tooltip = _ref.tooltip,
      tooltipId = _ref.tooltipId,
      label = _ref.label,
      id = _ref.id,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      children = _ref.children;
  return _react.default.createElement(_field.Field, null, _react.default.createElement(_field.Field.Label, {
    labelProps: {
      htmlFor: id
    },
    tooltip: tooltip,
    tooltipId: tooltipId
  }, label), children, error && _react.default.createElement(_field.Field.ErrorMessage, null, errorMessage));
};

var FieldInputExample = function FieldInputExample(_ref2) {
  var id = _ref2.id,
      label = _ref2.label,
      tooltip = _ref2.tooltip,
      tooltipId = _ref2.tooltipId,
      placeholder = _ref2.placeholder,
      error = _ref2.error,
      errorMessage = _ref2.errorMessage;
  return _react.default.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage
  }, _react.default.createElement(_field.Field.Input, {
    id: id,
    name: "field",
    placeholder: placeholder,
    error: error
  }));
};

exports.FieldInputExample = FieldInputExample;

var FieldRadioButtonSetExample = function FieldRadioButtonSetExample(_ref3) {
  var id = _ref3.id,
      label = _ref3.label,
      tooltip = _ref3.tooltip,
      tooltipId = _ref3.tooltipId,
      items = _ref3.items,
      error = _ref3.error,
      errorMessage = _ref3.errorMessage;
  return _react.default.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage
  }, _react.default.createElement(_field.Field.RadioButtonSet, {
    name: "radio",
    items: items,
    error: error
  }));
};

exports.FieldRadioButtonSetExample = FieldRadioButtonSetExample;

var FieldSelectExample = function FieldSelectExample(_ref4) {
  var id = _ref4.id,
      label = _ref4.label,
      tooltip = _ref4.tooltip,
      tooltipId = _ref4.tooltipId,
      placeholder = _ref4.placeholder,
      options = _ref4.options,
      error = _ref4.error,
      errorMessage = _ref4.errorMessage;
  return _react.default.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage
  }, _react.default.createElement(_field.Field.Select, {
    id: id,
    name: "select",
    placeholder: placeholder,
    options: options,
    error: error
  }));
};

exports.FieldSelectExample = FieldSelectExample;