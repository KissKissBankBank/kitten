"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalStroke = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var VerticalStroke = (0, _styledComponents.default)(function (_ref) {
  var className = _ref.className,
      size = _ref.size,
      others = (0, _objectWithoutProperties2.default)(_ref, ["className", "size"]);
  var verticalStrokeClassName = (0, _classnames.default)('k-VerticalStroke', {
    'k-VerticalStroke--tiny': size === 'tiny',
    'k-VerticalStroke--default': size === 'default',
    'k-VerticalStroke--big': size === 'big',
    'k-VerticalStroke--huge': size === 'huge'
  }, className);
  return /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({
    className: verticalStrokeClassName
  }, others));
}).withConfig({
  displayName: "vertical-stroke__VerticalStroke",
  componentId: "sc-5qljff-0"
})(["&.k-VerticalStroke{display:block;border:none;background:", ";}&.k-VerticalStroke--tiny{height:", ";width:", ";}&.k-VerticalStroke--default{height:", ";width:", ";}&.k-VerticalStroke--big{height:", ";width:", ";}&.k-VerticalStroke--huge{height:", ";width:", ";}"], _colorsConfig.default.font1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(6));
exports.VerticalStroke = VerticalStroke;
VerticalStroke.propTypes = {
  size: _propTypes.default.oneOf(['tiny', 'default', 'big', 'huge'])
};
VerticalStroke.defaultProps = {
  size: 'default'
};