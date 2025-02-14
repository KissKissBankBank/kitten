"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Tag = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

const StyledTag = _styledComponents.default.span.withConfig({
  displayName: "tag__StyledTag",
  componentId: "sc-t9jrs5-0"
})(["display:inline-block;height:", ";box-sizing:border-box;padding:0 ", ";white-space:nowrap;line-height:", ";", " font-size:", ";border-radius:var(--border-radius-rounded);text-transform:uppercase;letter-spacing:0.1em;&.k-Tag--flex{display:inline-flex;align-items:center;gap:", ";}&.k-Tag--small{gap:", ";height:", ";padding:0 ", ";font-size:", ";line-height:", ";}&{svg{&,path{fill:currentColor;}}}&.k-Tag--light.k-Tag--info{background-color:var(--color-primary-100);color:var(--color-grey-900);}&.k-Tag--light.k-Tag--warning{background-color:var(--color-warning-100);color:var(--color-grey-900);}&.k-Tag--light.k-Tag--success{background-color:var(--color-success-100);color:var(--color-grey-900);}&.k-Tag--light.k-Tag--error{background-color:var(--color-danger-100);color:var(--color-grey-900);}&.k-Tag--light.k-Tag--disabled{background-color:var(--color-grey-300);color:var(--color-grey-900);}&.k-Tag--status.k-Tag--info{background-color:var(--color-primary-100);color:var(--color-primary-700);}&.k-Tag--status.k-Tag--warning{background-color:var(--color-warning-100);color:var(--color-warning-900);}&.k-Tag--status.k-Tag--success{background-color:var(--color-success-100);color:var(--color-success-700);}&.k-Tag--status.k-Tag--error{background-color:var(--color-danger-100);color:var(--color-danger-700);}&.k-Tag--status.k-Tag--disabled{background-color:var(--color-grey-300);color:var(--color-grey-800);}&.k-Tag--dark.k-Tag--info{background-color:var(--color-primary-500);color:var(--color-grey-000);}&.k-Tag--dark.k-Tag--warning{background-color:var(--color-warning-700);color:var(--color-grey-000);}&.k-Tag--dark.k-Tag--success{background-color:var(--color-success-500);color:var(--color-grey-000);}&.k-Tag--dark.k-Tag--error{background-color:var(--color-danger-500);color:var(--color-grey-000);}&.k-Tag--dark.k-Tag--disabled{background-color:var(--color-grey-800);color:var(--color-grey-000);}"], (0, _typography.pxToRem)(24), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(24), _typographyConfig.default.fontStyles['500'], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(18));

const Tag = _ref => {
  let {
    type,
    size,
    variant,
    className,
    flex,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledTag, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Tag', className, "k-Tag--" + type, "k-Tag--" + size, "k-Tag--" + variant, {
      'k-Tag--flex': flex
    })
  }, props), children);
};

exports.Tag = Tag;
Tag.propTypes = {
  type: _propTypes.default.oneOf(['info', 'warning', 'success', 'error', 'disabled']),
  size: _propTypes.default.oneOf(['small', 'medium']),
  variant: _propTypes.default.oneOf(['light', 'status', 'dark']),
  flex: _propTypes.default.bool
};
Tag.defaultProps = {
  type: 'info',
  size: 'medium',
  variant: 'status',
  flex: false
};