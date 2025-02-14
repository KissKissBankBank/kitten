"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Link = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _index = require("../index");

const StyledParagraph = _styledComponents.default.span.withConfig({
  displayName: "link__StyledParagraph",
  componentId: "sc-kwm1tk-0"
})(["margin:0;padding:0;line-height:1;.k-Steppers--VerticalStepper__link{", ";font-size:", ";line-height:normal;color:", ";text-decoration:none;transition:color 0.4s;@media (min-width:", "px){font-size:", ";}:before{padding:0 ", ";content:'\u25CF';font-size:", ";color:", ";}&:hover,&:focus,&:active{color:", ";}}"], _typographyConfig.default.fontStyles['500'], (0, _typography.stepToRem)(-2), _colorsConfig.default.primary1, _screenConfig.ScreenConfig.S.min, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), _colorsConfig.default.font1, _colorsConfig.default.primary3);

const Link = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledParagraph, null, /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)(_index.LINK_CLASSNAME, 'k-Steppers--VerticalStepper__link', className)
  })));
};

exports.Link = Link;