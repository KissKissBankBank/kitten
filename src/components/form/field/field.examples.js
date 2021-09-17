"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldAutocompleteExample = exports.FieldRadioButtonSetExample = exports.FieldPasswordExample = exports.FieldInputExample = void 0;

var _react = _interopRequireDefault(require("react"));

var _field = require("../field");

var FieldBase = function FieldBase(_ref) {
  var tooltip = _ref.tooltip,
      tooltipId = _ref.tooltipId,
      tooltipProps = _ref.tooltipProps,
      label = _ref.label,
      id = _ref.id,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_field.Field, null, /*#__PURE__*/_react.default.createElement(_field.Field.Label, {
    labelProps: {
      htmlFor: id
    },
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId
  }, label), children, error && /*#__PURE__*/_react.default.createElement(_field.Field.ErrorMessage, null, errorMessage));
};

var FieldInputExample = function FieldInputExample(_ref2) {
  var id = _ref2.id,
      label = _ref2.label,
      tooltip = _ref2.tooltip,
      tooltipId = _ref2.tooltipId,
      tooltipProps = _ref2.tooltipProps,
      placeholder = _ref2.placeholder,
      error = _ref2.error,
      errorMessage = _ref2.errorMessage,
      limit = _ref2.limit,
      unit = _ref2.unit,
      size = _ref2.size,
      noMargin = _ref2.noMargin,
      variant = _ref2.variant;
  return /*#__PURE__*/_react.default.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage
  }, /*#__PURE__*/_react.default.createElement(_field.Field.Input, {
    id: id,
    size: size,
    limit: limit,
    unit: unit,
    name: "field",
    placeholder: placeholder,
    error: error,
    noMargin: noMargin,
    variant: variant
  }));
};

exports.FieldInputExample = FieldInputExample;

var FieldPasswordExample = function FieldPasswordExample(_ref3) {
  var id = _ref3.id,
      label = _ref3.label,
      tooltip = _ref3.tooltip,
      tooltipId = _ref3.tooltipId,
      tooltipProps = _ref3.tooltipProps,
      placeholder = _ref3.placeholder,
      error = _ref3.error,
      errorMessage = _ref3.errorMessage,
      variant = _ref3.variant,
      size = _ref3.size;
  return /*#__PURE__*/_react.default.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage
  }, /*#__PURE__*/_react.default.createElement(_field.Field.Password, {
    id: id,
    size: size,
    name: "field",
    iconLabel: "Show password",
    hiddenIconLabel: "Hide password",
    placeholder: placeholder,
    error: error,
    variant: variant
  }));
};

exports.FieldPasswordExample = FieldPasswordExample;

var FieldRadioButtonSetExample = function FieldRadioButtonSetExample(_ref4) {
  var id = _ref4.id,
      label = _ref4.label,
      tooltip = _ref4.tooltip,
      tooltipId = _ref4.tooltipId,
      tooltipProps = _ref4.tooltipProps,
      items = _ref4.items,
      error = _ref4.error,
      errorMessage = _ref4.errorMessage,
      variant = _ref4.variant;
  return /*#__PURE__*/_react.default.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage
  }, /*#__PURE__*/_react.default.createElement(_field.Field.RadioButtonSet, {
    name: "radio",
    items: items,
    error: error,
    variant: variant
  }));
};

exports.FieldRadioButtonSetExample = FieldRadioButtonSetExample;

var FieldAutocompleteExample = function FieldAutocompleteExample(_ref5) {
  var id = _ref5.id,
      label = _ref5.label,
      tooltip = _ref5.tooltip,
      tooltipId = _ref5.tooltipId,
      tooltipProps = _ref5.tooltipProps,
      placeholder = _ref5.placeholder,
      error = _ref5.error,
      errorMessage = _ref5.errorMessage,
      items = _ref5.items,
      size = _ref5.size,
      variant = _ref5.variant;
  return /*#__PURE__*/_react.default.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage
  }, /*#__PURE__*/_react.default.createElement(_field.Field.Autocomplete, {
    id: id,
    size: size,
    name: "field",
    placeholder: placeholder,
    error: error,
    items: items,
    variant: variant
  }));
};

exports.FieldAutocompleteExample = FieldAutocompleteExample;