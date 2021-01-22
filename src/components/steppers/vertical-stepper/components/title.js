"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _classnames = _interopRequireDefault(require("classnames"));

var StyledTitle = _styledComponents.default.p.withConfig({
  displayName: "title__StyledTitle",
  componentId: "zdw2ns-0"
})(["margin:0;", ";font-size:", ";line-height:normal;&.k-Stepepers-VerticalStepper__title--orion{font-size:", ";font-weight:bold;line-height:1;margin-bottom:", ";@media (min-width:", "px){font-size:", ";}}"], _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(0), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(5), _screenConfig.ScreenConfig.S.min, (0, _typography.stepToRem)(-1));

var Title = function Title(_ref) {
  var variant = _ref.variant,
      className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(StyledTitle, {
    className: (0, _classnames.default)("k-Stepepers-VerticalStepper__title--".concat(variant), className)
  }, children);
};

exports.Title = Title;
Title.protoTypes = {
  variant: _propTypes.default.oneOf(['andromeda', 'orion'])
};
Title.defaultProps = {
  variant: 'andromeda'
};