"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TeamCardButtonWithTooltip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _buttonIcon = require("../../../buttons/button-icon");

var _phoneIcon = require("../../../icons/phone-icon");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var StyledTeamCardButtonWithTooltip = _styledComponents.default.a.withConfig({
  displayName: "button-with-tooltip__StyledTeamCardButtonWithTooltip",
  componentId: "kafbae-0"
})(["position:relative;display:inline-block;&[href]:focus{outline:", " solid ", ";outline-offset:", ";}.k-TeamCardButtonWithTooltip__tooltip{position:absolute;top:", ";padding:", ";margin-left:", ";font-size:", ";line-height:normal;font-weight:regular;color:", ";white-space:nowrap;opacity:0;visibility:hidden;transition:opacity 0.2s,visibility 0.2s;background-color:", ";border:", " solid ", ";}&:hover .k-TeamCardButtonWithTooltip__tooltip,&:focus .k-TeamCardButtonWithTooltip__tooltip{visibility:visible;opacity:1;}.k-TeamCardButtonWithTooltip__tooltipArrow{position:absolute;left:50%;bottom:102%;height:0;width:0;margin-left:", ";border-width:", ";border-top-color:transparent;border-left-color:transparent;border-right-color:transparent;border-bottom-color:", ";border-style:solid;pointer-events:none;}"], _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(55), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(-50), (0, _typography.stepToRem)(-1), _colorsConfig.default.background1, function (_ref) {
  var tooltipColor = _ref.tooltipColor;
  return tooltipColor;
}, (0, _typography.pxToRem)(2), function (_ref2) {
  var tooltipColor = _ref2.tooltipColor;
  return tooltipColor;
}, (0, _typography.pxToRem)(-8), (0, _typography.pxToRem)(10), function (_ref3) {
  var tooltipColor = _ref3.tooltipColor;
  return tooltipColor;
});

var TeamCardButtonWithTooltip = function TeamCardButtonWithTooltip(_ref4) {
  var phoneNumber = _ref4.phoneNumber,
      tooltipColor = _ref4.tooltipColor,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["phoneNumber", "tooltipColor"]);
  return /*#__PURE__*/_react.default.createElement(StyledTeamCardButtonWithTooltip, (0, _extends2.default)({
    href: "tel:".concat(phoneNumber),
    tooltipColor: tooltipColor
  }, props), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-TeamCardButtonWithTooltip__tooltip"
  }, phoneNumber, /*#__PURE__*/_react.default.createElement("span", {
    className: "k-TeamCardButtonWithTooltip__tooltipArrow"
  })), /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, {
    modifier: "hydrogen",
    className: "k-ButtonIcon--phone",
    tag: "span"
  }, /*#__PURE__*/_react.default.createElement(_phoneIcon.PhoneIcon, {
    className: "k-ButtonIcon__svg"
  })));
};

exports.TeamCardButtonWithTooltip = TeamCardButtonWithTooltip;
TeamCardButtonWithTooltip.propTypes = {
  phoneNumber: _propTypes.default.string.isRequired
};