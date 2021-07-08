"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _textInputWithUnit = require("../../../form/text-input-with-unit");

var Input = function Input(_ref) {
  var valid = _ref.valid,
      _onChange = _ref.onChange,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["valid", "onChange", "className"]);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isInputEmpty = _useState2[0],
      setEmptyInput = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_textInputWithUnit.TextInputWithUnit, (0, _extends2.default)({
    wrapperProps: {
      className: (0, _classnames.default)({
        'k-ContributionCard__inputWrapper--isEmpty': isInputEmpty
      })
    },
    variant: "orion",
    valid: valid,
    className: (0, _classnames.default)('k-ContributionCard__input', className),
    onChange: function onChange(event) {
      var _event$target, _event$target$value;

      setEmptyInput(((_event$target = event.target) === null || _event$target === void 0 ? void 0 : (_event$target$value = _event$target.value) === null || _event$target$value === void 0 ? void 0 : _event$target$value.length) === 0);

      _onChange(event);
    }
  }, props));
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