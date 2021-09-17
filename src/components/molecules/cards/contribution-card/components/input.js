"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Input = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _textInputWithUnit = require("../../../../form/text-input-with-unit");

var _context = require("../context");

var _excluded = ["valid", "onChange", "className"];

var Input = function Input(_ref) {
  var valid = _ref.valid,
      _onChange = _ref.onChange,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_context.Context.Consumer, null, function (_ref2) {
    var setEmptyInput = _ref2.setEmptyInput;
    return /*#__PURE__*/_react.default.createElement(_textInputWithUnit.TextInputWithUnit, (0, _extends2.default)({
      wrapperProps: {
        className: 'k-ContributionCard__inputWrapper'
      },
      variant: "orion",
      valid: valid,
      className: (0, _classnames.default)('k-ContributionCard__input', className),
      onChange: function onChange(event) {
        var _event$target, _event$target$value;

        setEmptyInput(((_event$target = event.target) == null ? void 0 : (_event$target$value = _event$target.value) == null ? void 0 : _event$target$value.length) === 0);

        _onChange(event);
      }
    }, props));
  });
};

exports.Input = Input;
Input.propTypes = {
  valid: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  className: _propTypes.default.string
};
Input.defaultProps = {
  onChange: function onChange() {
    return null;
  }
};