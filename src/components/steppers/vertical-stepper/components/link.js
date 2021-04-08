"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _index = require("../index");

var StyledParagraph = _styledComponents.default.span.withConfig({
  displayName: "link__StyledParagraph",
  componentId: "sc-11s9i6i-0"
})(["margin:0;padding:0;line-height:1;.k-Steppers--VerticalStepper__link{", ";font-size:", ";line-height:normal;color:", ";text-decoration:none;transition:color 0.4s;&:hover,&:focus,&:active{color:", ";}}.k-Steppers--VerticalStepper__link--orion{font-size:", ";@media (min-width:", "px){font-size:", ";}:before{padding:0 ", ";content:'\u25CF';font-size:", ";color:", ";}}"], _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(12), _colorsConfig.default.primary1, _colorsConfig.default.primary3, (0, _typography.stepToRem)(-2), _screenConfig.ScreenConfig.S.min, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(8), _colorsConfig.default.font1);

var Link = function Link(_ref) {
  var variant = _ref.variant,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["variant", "className"]);
  return /*#__PURE__*/_react.default.createElement(StyledParagraph, null, /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)(_index.LINK_CLASSNAME, 'k-Steppers--VerticalStepper__link', "k-Steppers--VerticalStepper__link--".concat(variant), className)
  })));
};

exports.Link = Link;
Link.protoTypes = {
  variant: _propTypes.default.oneOf(['andromeda', 'orion'])
};
Link.defaultProps = {
  variant: 'andromeda'
};