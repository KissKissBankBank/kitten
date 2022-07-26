import React from 'react';
import { Field } from '.';

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
  return /*#__PURE__*/React.createElement(Field, {
    tag: tag
  }, /*#__PURE__*/React.createElement(Field.Label, {
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

export const FieldInputExample = _ref2 => {
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
  return /*#__PURE__*/React.createElement(FieldBase, {
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
export const FieldPasswordExample = _ref3 => {
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
  return /*#__PURE__*/React.createElement(FieldBase, {
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
export const FieldRadioButtonSetExample = _ref4 => {
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
  return /*#__PURE__*/React.createElement(FieldBase, {
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
  }, /*#__PURE__*/React.createElement(Field.RadioButtonSet, {
    name: "radio",
    items: items,
    error: error
  }));
};
export const FieldRadioSetExample = _ref5 => {
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
  return /*#__PURE__*/React.createElement(FieldBase, {
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
  }, /*#__PURE__*/React.createElement(Field.RadioSet, {
    name: "radio",
    items: items,
    error: error
  }));
};
export const FieldAutocompleteExample = _ref6 => {
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
  return /*#__PURE__*/React.createElement(FieldBase, {
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
  }, /*#__PURE__*/React.createElement(Field.Autocomplete, {
    id: id,
    size: size,
    name: "field",
    placeholder: placeholder,
    error: error,
    items: items
  }));
};