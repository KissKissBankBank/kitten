"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalStroke = exports.StyledHorizontalStroke = exports.HUGE = exports.BIG = exports.DEFAULT = exports.TINY = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

var _strokeModifierStyles = require("./common/stroke-modifier-styles");

var TINY = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(2));
exports.TINY = TINY;
var DEFAULT = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(4));
exports.DEFAULT = DEFAULT;
var BIG = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(4));
exports.BIG = BIG;
var HUGE = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(6));
exports.HUGE = HUGE;

var StyledHorizontalStroke = _styledComponents.default.div.withConfig({
  displayName: "horizontal-stroke__StyledHorizontalStroke",
  componentId: "sc-15k7x5m-0"
})(["border:none;background:", ";&.k-HorizontalStroke--size--tiny{", "}&.k-HorizontalStroke--size--default{", "}&.k-HorizontalStroke--size--big{", "}&.k-HorizontalStroke--size--huge{", "}", ""], function (_ref) {
  var color = _ref.color;
  return color || _colorsConfig.default.font1;
}, TINY, DEFAULT, BIG, HUGE, (0, _strokeModifierStyles.strokeModifierStylesWithoutMargin)('&.k-HorizontalStroke--modifier'));

exports.StyledHorizontalStroke = StyledHorizontalStroke;

var HorizontalStroke = function HorizontalStroke(_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      size = _ref2.size,
      modifier = _ref2.modifier,
      customSize = _ref2.customSize,
      color = _ref2.color,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className", "style", "size", "modifier", "customSize", "color"]);

  var modifierClassName = function modifierClassName() {
    if (!modifier) return "k-HorizontalStroke--size--".concat(size);
    return "k-HorizontalStroke--modifier--".concat(modifier);
  };

  var customStyles = function customStyles() {
    if (!customSize) return;
    return {
      height: customSize && customSize.height,
      width: customSize && customSize.width
    };
  };

  return /*#__PURE__*/_react.default.createElement(StyledHorizontalStroke, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-HorizontalStroke', className, modifierClassName()),
    style: (0, _extends2.default)((0, _extends2.default)({}, customStyles()), style),
    color: color
  }));
};

exports.HorizontalStroke = HorizontalStroke;
HorizontalStroke.propTypes = {
  size: _propTypes.default.oneOf(['tiny', 'default', 'big', 'huge']),
  modifier: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary']),
  customSize: _propTypes.default.shape({
    width: _propTypes.default.number,
    height: _propTypes.default.number
  }),
  color: _propTypes.default.string
};
HorizontalStroke.defaultProps = {
  size: 'default',
  customSize: {
    width: null,
    height: null
  },
  color: _colorsConfig.default.font1
};