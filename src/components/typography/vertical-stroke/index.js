"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.VerticalStroke = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _deprecated = require("../../../helpers/utils/deprecated");

var _excluded = ["className", "size"];
var VerticalStroke = (0, _styledComponents.default)(function (_ref) {
  var className = _ref.className,
      size = _ref.size,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  (0, _deprecated.checkDeprecatedSizes)(size);
  var verticalStrokeClassName = (0, _classnames.default)('k-VerticalStroke', {
    'k-VerticalStroke--tiny': size === 'tiny',
    // Deprecated
    'k-VerticalStroke--small': size === 'small',
    'k-VerticalStroke--default': size === 'default',
    // Deprecated
    'k-VerticalStroke--medium': size === 'medium',
    'k-VerticalStroke--big': size === 'big',
    // Deprecated
    'k-VerticalStroke--large': size === 'large',
    'k-VerticalStroke--huge': size === 'huge'
  }, className);
  return /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({
    className: verticalStrokeClassName
  }, others));
}).withConfig({
  displayName: "vertical-stroke__VerticalStroke",
  componentId: "sc-1gvmwyd-0"
})(["&.k-VerticalStroke{display:block;border:none;background:", ";}&.k-VerticalStroke--tiny,&.k-VerticalStroke--small{height:", ";width:", ";}&.k-VerticalStroke--default,&.k-VerticalStroke--medium{height:", ";width:", ";}&.k-VerticalStroke--big,&.k-VerticalStroke--large{height:", ";width:", ";}&.k-VerticalStroke--huge{height:", ";width:", ";}"], _colorsConfig.default.font1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(6));
exports.VerticalStroke = VerticalStroke;
VerticalStroke.propTypes = {
  size: _propTypes.default.oneOf(['small', 'medium', 'large', 'huge'])
};
VerticalStroke.defaultProps = {
  size: 'medium'
};