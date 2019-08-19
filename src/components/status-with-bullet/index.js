"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusWithBullet = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../constants/typography-config"));

var _typography = require("../../helpers/utils/typography");

var StyledBullet = _styledComponents.default.span.withConfig({
  displayName: "status-with-bullet__StyledBullet",
  componentId: "sc-1kiyplj-0"
})(["background-color:currentColor;display:inline-block;width:0.7em;height:0.7em;line-height:0.7em;margin-right:", ";border-radius:50%;"], (0, _typography.pxToRem)(10));

var StyledStatus = _styledComponents.default.div.withConfig({
  displayName: "status-with-bullet__StyledStatus",
  componentId: "sc-1kiyplj-1"
})(["color:", ";font-family:", ";font-weight:", ";font-size:", ";"], function (_ref) {
  var statusColor = _ref.statusColor;
  return statusColor;
}, _typographyConfig.default.fontStyles.regular.fontFamily, _typographyConfig.default.fontStyles.regular.fontWeight, (0, _typography.stepToRem)(-1));

var StatusWithBullet = function StatusWithBullet(_ref2) {
  var statusMessage = _ref2.statusMessage,
      statusType = _ref2.statusType;
  var statusColor = _colorsConfig.default.valid;

  if (statusType === 'danger') {
    statusColor = _colorsConfig.default.error;
  }

  return _react.default.createElement(StyledStatus, {
    statusColor: statusColor
  }, _react.default.createElement(StyledBullet, {
    "aria-hidden": "true"
  }), statusMessage);
};

exports.StatusWithBullet = StatusWithBullet;
StatusWithBullet.propTypes = {
  statusMessage: _propTypes.default.string.isRequired,
  statusType: _propTypes.default.oneOf(['danger', 'success'])
};
StatusWithBullet.defaultProps = {
  statusType: 'success'
};