"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Title = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _classnames = _interopRequireDefault(require("classnames"));

const StyledTitle = _styledComponents.default.p.withConfig({
  displayName: "title__StyledTitle",
  componentId: "sc-1itzaq4-0"
})(["margin:0 0 ", ";", ";font-size:", ";line-height:1;@media (min-width:", "px){font-size:", ";}"], (0, _typography.pxToRem)(5), _typographyConfig.default.fontStyles['700'], (0, _typography.stepToRem)(-2), _screenConfig.ScreenConfig.S.min, (0, _typography.stepToRem)(-1));

const Title = _ref => {
  let {
    className,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledTitle, {
    className: (0, _classnames.default)('k-Steppers--VerticalStepper__title', className)
  }, children);
};

exports.Title = Title;