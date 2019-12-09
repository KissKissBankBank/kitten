"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconBadge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../helpers/utils/typography");

var StyledBadge = _styledComponents.default.span.withConfig({
  displayName: "icon-badge__StyledBadge",
  componentId: "sc-13mitia-0"
})(["display:flex;justify-content:center;align-items:center;padding:0;min-width:", ";min-height:", ";border-radius:", ";background-color:", ";", " ", " ", " ", ""], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), _colorsConfig.default.primary1, function (_ref) {
  var valid = _ref.valid;
  return valid && (0, _styledComponents.css)(["background-color:", ";"], _colorsConfig.default.valid);
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && (0, _styledComponents.css)(["background-color:", ";"], _colorsConfig.default.line2);
}, function (_ref3) {
  var big = _ref3.big;
  return big && (0, _styledComponents.css)(["min-width:", ";min-height:", ";border-radius:", ";"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40));
}, function (_ref4) {
  var huge = _ref4.huge;
  return huge && (0, _styledComponents.css)(["min-width:", ";min-height:", ";border-radius:", ";"], (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50));
});

var StyledContent = _styledComponents.default.span.withConfig({
  displayName: "icon-badge__StyledContent",
  componentId: "sc-13mitia-1"
})(["flex-basis:", ";fill:", ";color:", ";text-align:center;font-weight:bold;font-size:", ";line-height:0;", ""], (0, _typography.pxToRem)(11), _colorsConfig.default.background1, _colorsConfig.default.background1, (0, _typography.stepToRem)(-2), function (_ref5) {
  var big = _ref5.big,
      huge = _ref5.huge;
  return (big || huge) && (0, _styledComponents.css)(["font-size:", ";"], (0, _typography.stepToRem)(-1));
});

var IconBadge = function IconBadge(_ref6) {
  var children = _ref6.children,
      disabled = _ref6.disabled,
      valid = _ref6.valid,
      big = _ref6.big,
      huge = _ref6.huge,
      others = (0, _objectWithoutProperties2.default)(_ref6, ["children", "disabled", "valid", "big", "huge"]);
  return _react.default.createElement(StyledBadge, (0, _extends2.default)({
    disabled: disabled,
    valid: valid,
    big: big,
    huge: huge
  }, others), _react.default.createElement(StyledContent, {
    big: big,
    huge: huge
  }, children));
};

exports.IconBadge = IconBadge;
IconBadge.defaultProps = {
  disabled: false,
  valid: false,
  big: false,
  huge: false
};
IconBadge.propTypes = {
  disabled: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  big: _propTypes.default.bool,
  huge: _propTypes.default.bool
};