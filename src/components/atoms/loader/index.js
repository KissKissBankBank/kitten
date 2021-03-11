"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _useFlexGapCheck = require("../../../helpers/dom/use-flex-gap-check");

var BULLET_SIZE = 5;

var StyledLoader = _styledComponents.default.div.withConfig({
  displayName: "loader__StyledLoader",
  componentId: "s50q4c-0"
})(["display:flex;height:", ";line-height:1;gap:", ";.k-Loader__circle{width:", ";height:", ";border-radius:", ";animation:k-Loader-animation-scale 1.75s 0s infinite cubic-bezier(0.2,0.68,0.18,1.08);animation-fill-mode:both;&:nth-child(1){animation-delay:calc(-1.75s / 3);}&:nth-child(2){animation-delay:calc(-1.75s / 3 / 2);}&:nth-child(3){animation-delay:0s;}}&.k-Loader--noGap .k-Loader__circle:not(:last-child){margin-right:", ";}@keyframes k-Loader-animation-scale{0%{transform:scale(1);}45%{transform:scale(0.1);fill:transparent;}80%{transform:scale(1);}}"], (0, _typography.pxToRem)(BULLET_SIZE), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(BULLET_SIZE), (0, _typography.pxToRem)(BULLET_SIZE), (0, _typography.pxToRem)(BULLET_SIZE), (0, _typography.pxToRem)(2));

var Circle = function Circle(_ref) {
  var color = _ref.color,
      others = (0, _objectWithoutProperties2.default)(_ref, ["color"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 ".concat(BULLET_SIZE, " ").concat(BULLET_SIZE),
    fill: color
  }, others), /*#__PURE__*/_react.default.createElement("circle", {
    cx: BULLET_SIZE / 2,
    cy: BULLET_SIZE / 2,
    r: BULLET_SIZE
  }));
};

var Loader = function Loader(_ref2) {
  var tag = _ref2.tag,
      className = _ref2.className,
      color = _ref2.color,
      others = (0, _objectWithoutProperties2.default)(_ref2, ["tag", "className", "color"]);
  var canUseGap = (0, _useFlexGapCheck.useFlexGapCheck)();
  return /*#__PURE__*/_react.default.createElement(StyledLoader, (0, _extends2.default)({
    as: tag,
    className: (0, _classnames.default)('k-Loader', className, {
      'k-Loader--noGap': !canUseGap
    })
  }, others), /*#__PURE__*/_react.default.createElement(Circle, {
    className: "k-Loader__circle",
    color: color
  }), /*#__PURE__*/_react.default.createElement(Circle, {
    className: "k-Loader__circle",
    color: color
  }), /*#__PURE__*/_react.default.createElement(Circle, {
    className: "k-Loader__circle",
    color: color
  }));
};

exports.Loader = Loader;
Loader.defaultProps = {
  tag: 'div',
  color: _colorsConfig.default.font1
};
Loader.propTypes = {
  tag: _propTypes.default.string,
  color: _propTypes.default.string
};