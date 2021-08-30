"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusWithBullet = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var StyledStatus = _styledComponents.default.span.withConfig({
  displayName: "status-with-bullet__StyledStatus",
  componentId: "db70ps-0"
})(["color:currentColor;display:inline-flex;align-items:center;line-height:1.2;.k-StatusWithBullet__bullet{background-color:currentColor;border-radius:50%;margin-top:", ";flex:0 0 auto;}.k-StatusWithBullet__status{flex:0 1 auto;}&.k-StatusWithBullet--danger{color:", ";}&.k-StatusWithBullet--success{color:", ";}&.k-StatusWithBullet--warning{color:", ";}&.k-StatusWithBullet--neutral{color:", ";}&.k-StatusWithBullet--normal{font-size:", ";.k-StatusWithBullet__bullet{width:", ";height:", ";margin-right:", ";}}&.k-StatusWithBullet--tiny{font-size:", ";.k-StatusWithBullet__bullet{width:", ";height:", ";margin-right:", ";}}&.k-StatusWithBullet--micro{font-size:", ";.k-StatusWithBullet__bullet{width:", ";height:", ";margin-right:", ";}}&.k-StatusWithBullet--light{", "}&.k-StatusWithBullet--regular{", "}&.k-StatusWithBullet--bold{", "}"], (0, _typography.pxToRem)(2), _colorsConfig.default.error, _colorsConfig.default.valid, _colorsConfig.default.orange, _colorsConfig.default.primary1, (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(11), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(8), _typographyConfig.default.fontStyles.light, _typographyConfig.default.fontStyles.regular, _typographyConfig.default.fontStyles.bold);

var StatusWithBullet = function StatusWithBullet(_ref) {
  var statusMessage = _ref.statusMessage,
      statusType = _ref.statusType,
      bulletProps = _ref.bulletProps,
      size = _ref.size,
      className = _ref.className,
      children = _ref.children,
      weight = _ref.weight,
      props = (0, _objectWithoutProperties2.default)(_ref, ["statusMessage", "statusType", "bulletProps", "size", "className", "children", "weight"]);
  return /*#__PURE__*/_react.default.createElement(StyledStatus, (0, _extends2.default)({
    className: (0, _classnames.default)('k-StatusWithBullet', className, "k-StatusWithBullet--".concat(statusType), "k-StatusWithBullet--".concat(size), "k-StatusWithBullet--".concat(weight))
  }, props), /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({
    "aria-hidden": "true"
  }, bulletProps, {
    className: (0, _classnames.default)('k-StatusWithBullet__bullet', bulletProps === null || bulletProps === void 0 ? void 0 : bulletProps.className)
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-StatusWithBullet__status"
  }, statusMessage || children));
};

exports.StatusWithBullet = StatusWithBullet;
StatusWithBullet.propTypes = {
  statusMessage: _propTypes.default.node,
  statusType: _propTypes.default.oneOf(['danger', 'success', 'warning', 'neutral', 'none']),
  size: _propTypes.default.oneOf(['normal', 'tiny', 'micro']),
  weight: _propTypes.default.oneOf(['light', 'regular', 'bold']),
  bulletProps: _propTypes.default.object
};
StatusWithBullet.defaultProps = {
  statusType: 'success',
  size: 'tiny',
  weight: 'regular',
  bulletProps: {}
};