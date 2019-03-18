"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../../layout/marger");

var _textInput = require("../../../form/text-input");

var _textInputWithLimit = require("../../../form/text-input-with-limit");

var _textInputWithUnit = require("../../text-input-with-unit.js");

var FieldInput = function FieldInput(props) {
  var limit = props.limit,
      unit = props.unit,
      withoutMargin = props.withoutMargin;
  var Input = _textInput.TextInput;

  if (limit) {
    Input = _textInputWithLimit.TextInputWithLimit;
  }

  if (unit) {
    Input = _textInputWithUnit.TextInputWithUnit;
  }

  if (withoutMargin) {
    return _react.default.createElement(Input, props);
  }

  return _react.default.createElement(_marger.Marger, {
    top: "1.5"
  }, _react.default.createElement(Input, props));
};

exports.FieldInput = FieldInput;
FieldInput.propTypes = {
  limit: _propTypes.default.number,
  unit: _propTypes.default.string,
  withoutMargin: _propTypes.default.bool
};
FieldInput.defaultProps = {
  limit: undefined,
  unit: undefined
};