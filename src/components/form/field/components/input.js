"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.FieldInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _textInput = require("../../../form/input/text-input");

var _textInputWithLimit = require("../../../form/input/text-input-with-limit");

var _textInputWithUnit = require("../../../form/input/text-input-with-unit");

var _excluded = ["limit", "unit", "noMargin", "className"];

var FieldInput = function FieldInput(_ref) {
  var _props$wrapperProps;

  var limit = _ref.limit,
      unit = _ref.unit,
      noMargin = _ref.noMargin,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var has = function () {
    switch (true) {
      case !!limit:
        return 'limit';

      case !!unit:
        return 'unit';

      default:
        return undefined;
    }
  }();

  return /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({
    has: has,
    limit: limit,
    unit: unit
  }, props, {
    wrapperProps: (0, _extends2.default)({}, props.wrapperProps, {
      className: (0, _classnames.default)('k-FieldInput', 'k-Field__control', className, (_props$wrapperProps = props.wrapperProps) == null ? void 0 : _props$wrapperProps.className, {
        'k-u-margin-top-single': !noMargin
      })
    })
  }));
};

exports.FieldInput = FieldInput;
FieldInput.propTypes = {
  limit: _propTypes.default.number,
  unit: _propTypes.default.string,
  noMargin: _propTypes.default.bool
};
FieldInput.defaultProps = {
  limit: undefined,
  unit: undefined,
  noMargin: false
};