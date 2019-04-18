"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../helpers/utils/typography");

var StyledBadge = _styledComponents.default.span.withConfig({
  displayName: "badge__StyledBadge",
  componentId: "sc-7liuod-0"
})(["", " ", ""], function (_ref) {
  var color = _ref.color;
  return color && (0, _styledComponents.css)(["background-color:", ";"], color);
}, function (_ref2) {
  var withIcon = _ref2.withIcon;
  return withIcon && (0, _styledComponents.css)(["position:absolute;margin-left:", ";margin-top:", ";"], (0, _typography.pxToRem)(-8), (0, _typography.pxToRem)(-4));
});

var Badge = function Badge(_ref3) {
  var className = _ref3.className,
      spaced = _ref3.spaced,
      Icon = _ref3.Icon,
      others = (0, _objectWithoutProperties2.default)(_ref3, ["className", "spaced", "Icon"]);
  return _react.default.createElement("div", null, Icon && _react.default.createElement(Icon, null), _react.default.createElement(StyledBadge, (0, _extends2.default)({
    role: "alert",
    className: (0, _classnames.default)('k-Badge', className, {
      'k-Badge--spaced': spaced
    }),
    withIcon: Icon !== null
  }, others)));
};

exports.Badge = Badge;
Badge.propTypes = {
  className: _propTypes.default.string,
  spaced: _propTypes.default.bool,
  color: _propTypes.default.string,
  Icon: _propTypes.default.func
};
Badge.defaultProps = {
  className: null,
  spaced: false,
  Icon: null,
  color: null
};