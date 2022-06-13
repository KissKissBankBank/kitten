"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Badge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _excluded = ["className", "spaced", "Icon", "a11yText", "color", "withBorder", "style"];

var StyledBadge = _styledComponents.default.span.withConfig({
  displayName: "badge__StyledBadge",
  componentId: "sc-1t6h9lv-0"
})(["--Badge-background-color:", ";display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;padding:", " ", ";line-height:1;min-height:", ";min-width:", ";border-radius:var(--border-radius-rounded);color:", ";", ";font-size:", ";line-height:1.2;border:var(--border-width) solid white;background-color:var(--Badge-background-color);&.k-Badge--spaced{margin:0 ", ";}&.k-Badge--no-border{min-height:", ";min-width:", ";border:0;}&.k-Badge--hasIcon{position:relative;left:", ";top:", ";}"], _colorsConfig.default.primary1, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(18 + 2), (0, _typography.pxToRem)(18 + 2), _colorsConfig.default.background1, _typographyConfig.default.fontStyles['500'], (0, _typography.stepToRem)(-4), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(-8), (0, _typography.pxToRem)(-8));

var Badge = function Badge(_ref) {
  var className = _ref.className,
      spaced = _ref.spaced,
      Icon = _ref.Icon,
      a11yText = _ref.a11yText,
      color = _ref.color,
      withBorder = _ref.withBorder,
      style = _ref.style,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Icon ? /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Badge__wrapper k-u-flex k-u-flex-alignItems-center"
  }, /*#__PURE__*/_react.default.createElement(Icon, null), /*#__PURE__*/_react.default.createElement(StyledBadge, (0, _extends2.default)({
    title: a11yText,
    className: (0, _classnames.default)('k-Badge', 'k-Badge--hasIcon', className, {
      'k-Badge--spaced': spaced,
      'k-Badge--no-border': !withBorder
    }),
    style: (0, _extends2.default)({
      '--Badge-background-color': color
    }, style)
  }, others))) : /*#__PURE__*/_react.default.createElement(StyledBadge, (0, _extends2.default)({
    title: a11yText,
    className: (0, _classnames.default)('k-Badge', className, {
      'k-Badge--spaced': spaced,
      'k-Badge--no-border': !withBorder
    }),
    style: (0, _extends2.default)({
      '--Badge-background-color': color
    }, style)
  }, others)));
};

exports.Badge = Badge;
Badge.propTypes = {
  spaced: _propTypes.default.bool,
  withBorder: _propTypes.default.bool,
  color: _propTypes.default.string,
  Icon: _propTypes.default.func,
  a11yText: _propTypes.default.string
};
Badge.defaultProps = {
  spaced: false,
  withBorder: true,
  Icon: null,
  color: null,
  a11yText: null
};