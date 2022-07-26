"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StatusWithBullet = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var _deprecated = require("../../../helpers/utils/deprecated");

const StyledStatus = _styledComponents.default.span.withConfig({
  displayName: "status-with-bullet__StyledStatus",
  componentId: "sc-jelywm-0"
})(["color:currentColor;display:inline-flex;align-items:center;line-height:1.2;.k-StatusWithBullet__bullet{background-color:currentColor;border-radius:var(--border-radius-rounded);margin-top:", ";flex:0 0 auto;}.k-StatusWithBullet__status{flex:0 1 auto;}&.k-StatusWithBullet--danger{color:", ";}&.k-StatusWithBullet--success{color:", ";}&.k-StatusWithBullet--warning{color:", ";}&.k-StatusWithBullet--neutral{color:", ";}&.k-StatusWithBullet--medium{font-size:", ";.k-StatusWithBullet__bullet{width:", ";height:", ";margin-right:", ";}}&.k-StatusWithBullet--small{font-size:", ";.k-StatusWithBullet__bullet{width:", ";height:", ";margin-right:", ";}}&.k-StatusWithBullet--micro{font-size:", ";.k-StatusWithBullet__bullet{width:", ";height:", ";margin-right:", ";}}&.k-StatusWithBullet--light,&.k-StatusWithBullet--400{", "}&.k-StatusWithBullet--regular,&.k-StatusWithBullet--500{", "}&.k-StatusWithBullet--bold,&.k-StatusWithBullet--700{", "}"], (0, _typography.pxToRem)(2), _colorsConfig.default.error, _colorsConfig.default.valid, _colorsConfig.default.orange, _colorsConfig.default.primary1, (0, _typography.stepToRem)(0), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(11), (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(8), _typographyConfig.default.fontStyles['400'], _typographyConfig.default.fontStyles['500'], _typographyConfig.default.fontStyles['700']);

const StatusWithBullet = _ref => {
  let {
    statusMessage,
    statusType,
    bulletProps,
    size,
    className,
    children,
    weight,
    ...props
  } = _ref;
  (0, _deprecated.checkDeprecatedWeights)(weight);
  return /*#__PURE__*/_react.default.createElement(StyledStatus, (0, _extends2.default)({
    className: (0, _classnames.default)('k-StatusWithBullet', className, "k-StatusWithBullet--" + statusType, "k-StatusWithBullet--" + size, "k-StatusWithBullet--" + weight)
  }, props), /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({
    "aria-hidden": "true"
  }, bulletProps, {
    className: (0, _classnames.default)('k-StatusWithBullet__bullet', bulletProps == null ? void 0 : bulletProps.className)
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-StatusWithBullet__status"
  }, statusMessage || children));
};

exports.StatusWithBullet = StatusWithBullet;
StatusWithBullet.propTypes = {
  statusMessage: _propTypes.default.node,
  statusType: _propTypes.default.oneOf(['danger', 'success', 'warning', 'neutral', 'none']),
  size: _propTypes.default.oneOf(['micro', 'small', 'medium']),
  weight: _propTypes.default.oneOf(['400', '500', '700']),
  bulletProps: _propTypes.default.object
};
StatusWithBullet.defaultProps = {
  statusType: 'success',
  size: 'small',
  weight: '500',
  bulletProps: {}
};