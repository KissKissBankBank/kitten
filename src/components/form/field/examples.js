"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldRadioSetExample = exports.FieldRadioButtonSetExample = exports.FieldPasswordExample = exports.FieldInputExample = exports.FieldAutocompleteExample = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

const FieldBase = _ref => {
  let {
    tooltip,
    tooltipId,
    tooltipProps,
    label,
    id,
    error,
    errorMessage,
    help,
    helpHiddenOnBlur,
    children,
    tag
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_.Field, {
    tag: tag
  }, /*#__PURE__*/_react.default.createElement(_.Field.Label, {
    labelProps: {
      htmlFor: id
    },
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId
  }, label), children, error && /*#__PURE__*/_react.default.createElement(_.Field.ErrorMessage, null, errorMessage), help && /*#__PURE__*/_react.default.createElement(_.Field.Help, {
    hiddenOnBlur: helpHiddenOnBlur
  }, help));
};

const FieldInputExample = _ref2 => {
  let {
    id,
    label,
    tooltip,
    tooltipId,
    tooltipProps,
    placeholder,
    error,
    errorMessage,
    help,
    helpHiddenOnBlur,
    limit,
    unit,
    size,
    noMargin,
    tag
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage,
    help: help,
    helpHiddenOnBlur: helpHiddenOnBlur,
    tag: tag
  }, /*#__PURE__*/_react.default.createElement(_.Field.Input, {
    id: id,
    size: size,
    limit: limit,
    unit: unit,
    name: "field",
    placeholder: placeholder,
    error: error,
    noMargin: noMargin
  }));
};

exports.FieldInputExample = FieldInputExample;

const FieldPasswordExample = _ref3 => {
  let {
    id,
    label,
    tooltip,
    tooltipId,
    tooltipProps,
    placeholder,
    error,
    errorMessage,
    help,
    helpHiddenOnBlur,
    size,
    tag
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage,
    help: help,
    helpHiddenOnBlur: helpHiddenOnBlur,
    tag: tag
  }, /*#__PURE__*/_react.default.createElement(_.Field.Password, {
    id: id,
    size: size,
    name: "field",
    iconLabel: "Show password",
    hiddenIconLabel: "Hide password",
    placeholder: placeholder,
    error: error
  }));
};

exports.FieldPasswordExample = FieldPasswordExample;

const FieldRadioButtonSetExample = _ref4 => {
  let {
    id,
    label,
    tooltip,
    tooltipId,
    tooltipProps,
    items,
    error,
    errorMessage,
    help,
    helpHiddenOnBlur,
    tag
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage,
    help: help,
    helpHiddenOnBlur: helpHiddenOnBlur,
    tag: tag
  }, /*#__PURE__*/_react.default.createElement(_.Field.RadioButtonSet, {
    name: "radio",
    items: items,
    error: error
  }));
};

exports.FieldRadioButtonSetExample = FieldRadioButtonSetExample;

const FieldRadioSetExample = _ref5 => {
  let {
    id,
    label,
    tooltip,
    tooltipId,
    tooltipProps,
    items,
    error,
    errorMessage,
    help,
    helpHiddenOnBlur,
    tag
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage,
    help: help,
    helpHiddenOnBlur: helpHiddenOnBlur,
    tag: tag
  }, /*#__PURE__*/_react.default.createElement(_.Field.RadioSet, {
    name: "radio",
    items: items,
    error: error
  }));
};

exports.FieldRadioSetExample = FieldRadioSetExample;

const FieldAutocompleteExample = _ref6 => {
  let {
    id,
    label,
    tooltip,
    tooltipId,
    tooltipProps,
    placeholder,
    error,
    errorMessage,
    help,
    helpHiddenOnBlur,
    items,
    size,
    tag
  } = _ref6;
  return /*#__PURE__*/_react.default.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage,
    help: help,
    helpHiddenOnBlur: helpHiddenOnBlur,
    tag: tag
  }, /*#__PURE__*/_react.default.createElement(_.Field.Autocomplete, {
    id: id,
    size: size,
    name: "field",
    placeholder: placeholder,
    error: error,
    items: items
  }));
};

exports.FieldAutocompleteExample = FieldAutocompleteExample;