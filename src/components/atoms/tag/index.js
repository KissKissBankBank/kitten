"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Tag = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _excluded = ["type", "size", "className"];

var StyledTag = _styledComponents.default.span.withConfig({
  displayName: "tag__StyledTag",
  componentId: "sc-1dt82ne-0"
})(["height:", ";box-sizing:border-box;display:inline-block;padding:0 ", ";white-space:nowrap;line-height:", ";", " font-size:", ";border-radius:var(--border-radius-xs);&.k-Tag--info{background-color:var(--color-primary-100);color:var(--color-primary-700);}&.k-Tag--warning{background-color:var(--color-warning-100);color:var(--color-warning-700);}&.k-Tag--success{background-color:var(--color-success-100);color:var(--color-success-700);}&.k-Tag--error{background-color:var(--color-danger-100);color:var(--color-danger-700);}&.k-Tag--disabled{background-color:var(--color-grey-100);color:var(--color-grey-700);}&.k-Tag--small{height:", ";padding:0 ", ";font-size:", ";line-height:", ";}"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(30), _typographyConfig.default.fontStyles.regular, (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(20));

var Tag = function Tag(_ref) {
  var type = _ref.type,
      size = _ref.size,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledTag, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Tag', className, "k-Tag--" + type, "k-Tag--" + size)
  }, props));
};

exports.Tag = Tag;
Tag.propTypes = {
  type: _propTypes.default.oneOf(['info', 'warning', 'success', 'error', 'disabled']),
  size: _propTypes.default.oneOf(['regular', 'small'])
};
Tag.defaultProps = {
  type: 'info',
  size: 'regular'
};