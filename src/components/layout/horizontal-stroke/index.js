"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalStroke = exports.HUGE = exports.BIG = exports.DEFAULT = exports.TINY = exports.StyledHorizontalStroke = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var StyledHorizontalStroke = _styledComponents.default.span.withConfig({
  displayName: "horizontal-stroke__StyledHorizontalStroke",
  componentId: "sc-15k7x5m-0"
})(["display:block;border:none;background:", ";", " ", " ", " ", ""], _colorsConfig.default.font1, function (_ref) {
  var modifierSize = _ref.modifierSize;

  switch (modifierSize) {
    case 'tiny':
      return TINY;

    case 'big':
      return BIG;

    case 'huge':
      return HUGE;

    default:
      return DEFAULT;
  }
}, function (_ref2) {
  var width = _ref2.customSize.width;
  return !!width && (0, _styledComponents.css)(["width:", ";"], (0, _typography.pxToRem)(width));
}, function (_ref3) {
  var height = _ref3.customSize.height;
  return !!height && (0, _styledComponents.css)(["height:", ";"], (0, _typography.pxToRem)(height));
}, function (props) {
  return props.styles;
});

exports.StyledHorizontalStroke = StyledHorizontalStroke;
var TINY = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(2));
exports.TINY = TINY;
var DEFAULT = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(4));
exports.DEFAULT = DEFAULT;
var BIG = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(4));
exports.BIG = BIG;
var HUGE = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(6));
exports.HUGE = HUGE;

var HorizontalStroke = function HorizontalStroke(_ref4) {
  var style = _ref4.style,
      size = _ref4.size,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["style", "size"]);
  return _react.default.createElement(StyledHorizontalStroke, (0, _extends2.default)({}, props, {
    modifierSize: size,
    styles: style
  }));
};

exports.HorizontalStroke = HorizontalStroke;
HorizontalStroke.propTypes = {
  size: _propTypes.default.oneOf(['tiny', 'default', 'big', 'huge']),
  customSize: _propTypes.default.shape({
    width: _propTypes.default.number,
    height: _propTypes.default.number
  })
};
HorizontalStroke.defaultProps = {
  size: 'default',
  customSize: {
    width: null,
    height: null
  }
};