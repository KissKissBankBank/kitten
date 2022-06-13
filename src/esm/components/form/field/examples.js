import React from 'react';
import { Field } from '.';

var FieldBase = function FieldBase(_ref) {
  var tooltip = _ref.tooltip,
      tooltipId = _ref.tooltipId,
      tooltipProps = _ref.tooltipProps,
      label = _ref.label,
      id = _ref.id,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      help = _ref.help,
      helpHiddenOnBlur = _ref.helpHiddenOnBlur,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    labelProps: {
      htmlFor: id
    },
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId
  }, label), children, error && /*#__PURE__*/React.createElement(Field.ErrorMessage, null, errorMessage), help && /*#__PURE__*/React.createElement(Field.Help, {
    hiddenOnBlur: helpHiddenOnBlur
  }, help));
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
      help = _ref2.help,
      helpHiddenOnBlur = _ref2.helpHiddenOnBlur,
      limit = _ref2.limit,
      unit = _ref2.unit,
      size = _ref2.size,
      noMargin = _ref2.noMargin;
  return /*#__PURE__*/React.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage,
    help: help,
    helpHiddenOnBlur: helpHiddenOnBlur
  }, /*#__PURE__*/React.createElement(Field.Input, {
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
export var FieldPasswordExample = function FieldPasswordExample(_ref3) {
  var id = _ref3.id,
      label = _ref3.label,
      tooltip = _ref3.tooltip,
      tooltipId = _ref3.tooltipId,
      tooltipProps = _ref3.tooltipProps,
      placeholder = _ref3.placeholder,
      error = _ref3.error,
      errorMessage = _ref3.errorMessage,
      help = _ref3.help,
      helpHiddenOnBlur = _ref3.helpHiddenOnBlur,
      size = _ref3.size;
  return /*#__PURE__*/React.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage,
    help: help,
    helpHiddenOnBlur: helpHiddenOnBlur
  }, /*#__PURE__*/React.createElement(Field.Password, {
    id: id,
    size: size,
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
      errorMessage = _ref4.errorMessage,
      help = _ref4.help,
      helpHiddenOnBlur = _ref4.helpHiddenOnBlur;
  return /*#__PURE__*/React.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage,
    help: help,
    helpHiddenOnBlur: helpHiddenOnBlur
  }, /*#__PURE__*/React.createElement(Field.RadioButtonSet, {
    name: "radio",
    items: items,
    error: error
  }));
};
export var FieldRadioSetExample = function FieldRadioSetExample(_ref5) {
  var id = _ref5.id,
      label = _ref5.label,
      tooltip = _ref5.tooltip,
      tooltipId = _ref5.tooltipId,
      tooltipProps = _ref5.tooltipProps,
      items = _ref5.items,
      error = _ref5.error,
      errorMessage = _ref5.errorMessage,
      help = _ref5.help,
      helpHiddenOnBlur = _ref5.helpHiddenOnBlur;
  return /*#__PURE__*/React.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage,
    help: help,
    helpHiddenOnBlur: helpHiddenOnBlur
  }, /*#__PURE__*/React.createElement(Field.RadioSet, {
    name: "radio",
    items: items,
    error: error
  }));
};
export var FieldAutocompleteExample = function FieldAutocompleteExample(_ref6) {
  var id = _ref6.id,
      label = _ref6.label,
      tooltip = _ref6.tooltip,
      tooltipId = _ref6.tooltipId,
      tooltipProps = _ref6.tooltipProps,
      placeholder = _ref6.placeholder,
      error = _ref6.error,
      errorMessage = _ref6.errorMessage,
      help = _ref6.help,
      helpHiddenOnBlur = _ref6.helpHiddenOnBlur,
      items = _ref6.items,
      size = _ref6.size;
  return /*#__PURE__*/React.createElement(FieldBase, {
    id: id,
    label: label,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    tooltipId: tooltipId,
    error: error,
    errorMessage: errorMessage,
    help: help,
    helpHiddenOnBlur: helpHiddenOnBlur
  }, /*#__PURE__*/React.createElement(Field.Autocomplete, {
    id: id,
    size: size,
    name: "field",
    placeholder: placeholder,
    error: error,
    items: items
  }));
};