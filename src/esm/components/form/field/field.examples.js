import React from 'react';
import { Field } from '../field';

var FieldBase = function FieldBase(_ref) {
  var tooltip = _ref.tooltip,
      tooltipId = _ref.tooltipId,
      tooltipProps = _ref.tooltipProps,
      label = _ref.label,
      id = _ref.id,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    labelProps: {
      htmlFor: id
    },
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId
  }, label), children, error && /*#__PURE__*/React.createElement(Field.ErrorMessage, null, errorMessage));
};

export var FieldInputExample = function FieldInputExample(_ref2) {
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
      tiny = _ref2.tiny;
  return /*#__PURE__*/React.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage
  }, /*#__PURE__*/React.createElement(Field.Input, {
    id: id,
    tiny: tiny,
    limit: limit,
    unit: unit,
    name: "field",
    placeholder: placeholder,
    error: error
  }));
};
export var FieldPasswordExample = function FieldPasswordExample(_ref3) {
  var id = _ref3.id,
      label = _ref3.label,
      tooltip = _ref3.tooltip,
      tooltipId = _ref3.tooltipId,
      tooltipProps = _ref3.tooltipProps,
      placeholder = _ref3.placeholder,
      error = _ref3.error,
      errorMessage = _ref3.errorMessage,
      tiny = _ref3.tiny;
  return /*#__PURE__*/React.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage
  }, /*#__PURE__*/React.createElement(Field.Password, {
    id: id,
    tiny: tiny,
    name: "field",
    iconLabel: "Show password",
    hiddenIconLabel: "Hide password",
    placeholder: placeholder,
    error: error
  }));
};
export var FieldRadioButtonSetExample = function FieldRadioButtonSetExample(_ref4) {
  var id = _ref4.id,
      label = _ref4.label,
      tooltip = _ref4.tooltip,
      tooltipId = _ref4.tooltipId,
      tooltipProps = _ref4.tooltipProps,
      items = _ref4.items,
      error = _ref4.error,
      errorMessage = _ref4.errorMessage;
  return /*#__PURE__*/React.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage
  }, /*#__PURE__*/React.createElement(Field.RadioButtonSet, {
    name: "radio",
    items: items,
    error: error
  }));
};
export var FieldAutocompleteExample = function FieldAutocompleteExample(_ref5) {
  var id = _ref5.id,
      label = _ref5.label,
      tooltip = _ref5.tooltip,
      tooltipId = _ref5.tooltipId,
      tooltipProps = _ref5.tooltipProps,
      placeholder = _ref5.placeholder,
      error = _ref5.error,
      errorMessage = _ref5.errorMessage,
      items = _ref5.items,
      tiny = _ref5.tiny;
  return /*#__PURE__*/React.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage
  }, /*#__PURE__*/React.createElement(Field.Autocomplete, {
    id: id,
    tiny: tiny,
    name: "field",
    placeholder: placeholder,
    error: error,
    items: items
  }));
};