"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.VerticalStroke = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

const VerticalStroke = (0, _styledComponents.default)(_ref => {
  let {
    className,
    size,
    ...others
  } = _ref;
  const verticalStrokeClassName = (0, _classnames.default)('k-VerticalStroke', {
    'k-VerticalStroke--small': size === 'small',
    'k-VerticalStroke--medium': size === 'medium',
    'k-VerticalStroke--large': size === 'large',
    'k-VerticalStroke--huge': size === 'huge'
  }, className);
  return /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({
    className: verticalStrokeClassName
  }, others));
}).withConfig({
  displayName: "vertical-stroke__VerticalStroke",
  componentId: "sc-1gvmwyd-0"
})(["&.k-VerticalStroke{display:block;border:none;background:", ";}&.k-VerticalStroke--small{height:", ";width:", ";}&.k-VerticalStroke--medium{height:", ";width:", ";}&.k-VerticalStroke--large{height:", ";width:", ";}&.k-VerticalStroke--huge{height:", ";width:", ";}"], _colorsConfig.default.font1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(6));
exports.VerticalStroke = VerticalStroke;
VerticalStroke.propTypes = {
  size: _propTypes.default.oneOf(['small', 'medium', 'large', 'huge'])
};
VerticalStroke.defaultProps = {
  size: 'medium'
};