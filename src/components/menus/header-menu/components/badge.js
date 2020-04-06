"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _visuallyHidden = require("../../../../components/accessibility/visually-hidden");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var Badge = function Badge(_ref) {
  var children = _ref.children,
      className = _ref.className,
      backgroundColor = _ref.backgroundColor,
      a11yText = _ref.a11yText,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "backgroundColor", "a11yText"]);
  var badgeClassNames = (0, _classnames.default)('k-Badge', 'k-Badge--spaced', 'k-Badge--no-border', className);
  return /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({}, props, {
    className: badgeClassNames,
    "aria-hidden": "true",
    style: {
      backgroundColor: backgroundColor
    }
  }), children, a11yText && /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, a11yText));
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