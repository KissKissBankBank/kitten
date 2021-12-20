"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Badge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _badge = require("../../../../components/atoms/badge");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _excluded = ["backgroundColor"];

var Badge = function Badge(_ref) {
  var backgroundColor = _ref.backgroundColor,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_badge.Badge, (0, _extends2.default)({
    color: backgroundColor,
    spaced: true
  }, props));
};

exports.Badge = Badge;
Badge.propTypes = {
  backgroundColor: _propTypes.default.string,
  a11yText: _propTypes.default.string
};
Badge.defaultProps = {
  backgroundColor: _colorsConfig.default.primary1,
  a11yText: 'Notification(s)'
};