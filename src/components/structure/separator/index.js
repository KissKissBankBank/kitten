"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Separator = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

const Separator = (0, _styledComponents.default)(_ref => {
  let {
    darker,
    className,
    ...props
  } = _ref;
  const separatorClassName = (0, _classnames.default)('k-Separator', {
    'k-Separator--darker': darker
  }, className);
  return /*#__PURE__*/_react.default.createElement("hr", (0, _extends2.default)({
    className: separatorClassName
  }, props));
}).withConfig({
  displayName: "separator__Separator",
  componentId: "sc-1tybzjh-0"
})(["margin:0;border:none;background:", ";height:", ";&.k-Separator--darker{background:", ";}"], _colorsConfig.default.line1, (0, _typography.pxToRem)(1), _colorsConfig.default.line2);
exports.Separator = Separator;
Separator.propTypes = {
  darker: _propTypes.default.bool
};
Separator.defaultProps = {
  className: null,
  darker: false
};