"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var StyledTag = _styledComponents.default.span.withConfig({
  displayName: "tag__StyledTag",
  componentId: "sc-1dt82ne-0"
})(["height:", ";box-sizing:border-box;display:inline-block;padding:0 ", ";white-space:nowrap;line-height:", ";", " font-size:", ";border-radius:", ";&.k-Tag--info{background-color:", ";}&.k-Tag--warning{background-color:", ";}&.k-Tag--success{background-color:", ";}&.k-Tag--error{background-color:", ";}&.k-Tag--disabled{background-color:", ";}"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(30), _typographyConfig.default.fontStyles.light, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(4), _colorsConfig.default.primary5, _colorsConfig.default.orange1, _colorsConfig.default.valid1, _colorsConfig.default.error2, _colorsConfig.default.line1);

var Tag = function Tag(_ref) {
  var type = _ref.type,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["type", "className"]);
  return /*#__PURE__*/_react.default.createElement(StyledTag, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Tag', className, "k-Tag--".concat(type))
  }, props));
};

exports.Tag = Tag;
Tag.propTypes = {
  type: _propTypes.default.oneOf(['info', 'warning', 'success', 'error', 'disabled'])
};
Tag.defaultProps = {
  type: 'info'
};