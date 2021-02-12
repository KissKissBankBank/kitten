"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var Circle = function Circle(_ref) {
  var color = _ref.color,
      others = (0, _objectWithoutProperties2.default)(_ref, ["color"]);
  var size = 5;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 ".concat(size * 2, " ").concat(size * 2)
  }, others), /*#__PURE__*/_react.default.createElement("circle", {
    fill: color,
    cx: size,
    cy: size,
    r: size
  }));
};

var circleSize = (0, _typography.pxToRem)(5);
var spacing = (0, _typography.pxToRem)(2);
var easing = 'cubic-bezier(0.2, 0.68, 0.18, 1.08)';
var duration = '1.75s';
var loaderAnimationKeyframes = (0, _styledComponents.keyframes)(["0%{transform:scale(1);opacity:1;}45%{transform:scale(.1);opacity:.7;}80%{transform:scale(1);opacity:1;}"]);
var Loader = (0, _styledComponents.default)(function (_ref2) {
  var tag = _ref2.tag,
      className = _ref2.className,
      color = _ref2.color,
      others = (0, _objectWithoutProperties2.default)(_ref2, ["tag", "className", "color"]);
  var Tag = tag;
  var loaderClassName = (0, _classnames.default)('k-Loader', className);

  var circle = /*#__PURE__*/_react.default.createElement(Circle, {
    className: "k-Loader__circle",
    color: color
  });

  return /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({
    className: loaderClassName
  }, others), circle, circle, circle);
}).withConfig({
  displayName: "loader__Loader",
  componentId: "s50q4c-0"
})(["display:flex;height:", ";line-height:1;.k-Loader__circle{display:inline-block;margin-left:", ";width:", ";height:", ";border-radius:", ";animation:", " ", " 0s infinite ", ";animation-fill-mode:both;&:nth-child(1){animation-delay:calc(-", " / 3);margin-left:0;}&:nth-child(2){animation-delay:calc(-", " / 3 / 2);}&:nth-child(3){animation-delay:0s;}}"], circleSize, spacing, circleSize, circleSize, circleSize, loaderAnimationKeyframes, duration, easing, duration, duration);
exports.Loader = Loader;
Loader.propTypes = {
  tag: _propTypes.default.string,
  className: _propTypes.default.string,
  color: _propTypes.default.string
};
Loader.defaultProps = {
  tag: 'div',
  className: null,
  color: null
};