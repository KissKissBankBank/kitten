"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TeamCardButtonWithTooltip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = require("../../../../action/button");

var _phoneIcon = require("../../../../graphics/icons/phone-icon");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../../helpers/utils/typography");

const StyledTeamCardButtonWithTooltip = _styledComponents.default.a.withConfig({
  displayName: "button-with-tooltip__StyledTeamCardButtonWithTooltip",
  componentId: "sc-zeirji-0"
})(["position:relative;display:inline-block;.k-TeamCardButtonWithTooltip__tooltip{position:absolute;top:", ";padding:", ";margin-left:", ";font-size:", ";line-height:normal;font-weight:500;color:var(--color-grey-000);white-space:nowrap;opacity:0;visibility:hidden;transition:opacity 0.2s,visibility 0.2s;background-color:", ";border:", " solid ", ";}&:hover .k-TeamCardButtonWithTooltip__tooltip,&:focus .k-TeamCardButtonWithTooltip__tooltip{visibility:visible;opacity:1;}.k-TeamCardButtonWithTooltip__tooltipArrow{position:absolute;left:50%;bottom:102%;height:0;width:0;margin-left:", ";border-width:", ";border-top-color:transparent;border-left-color:transparent;border-right-color:transparent;border-bottom-color:", ";border-style:solid;pointer-events:none;}"], (0, _typography.pxToRem)(55), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(-50), (0, _typography.stepToRem)(-1), _ref => {
  let {
    tooltipColor
  } = _ref;
  return tooltipColor;
}, (0, _typography.pxToRem)(2), _ref2 => {
  let {
    tooltipColor
  } = _ref2;
  return tooltipColor;
}, (0, _typography.pxToRem)(-8), (0, _typography.pxToRem)(10), _ref3 => {
  let {
    tooltipColor
  } = _ref3;
  return tooltipColor;
});

const TeamCardButtonWithTooltip = _ref4 => {
  let {
    phoneNumber,
    tooltipColor,
    ...props
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement(StyledTeamCardButtonWithTooltip, (0, _extends2.default)({
    href: "tel:" + phoneNumber,
    tooltipColor: tooltipColor
  }, props), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-TeamCardButtonWithTooltip__tooltip"
  }, phoneNumber, /*#__PURE__*/_react.default.createElement("span", {
    className: "k-TeamCardButtonWithTooltip__tooltipArrow"
  })), /*#__PURE__*/_react.default.createElement(_button.Button, {
    fit: "icon",
    size: "small",
    modifier: "hydrogen",
    tag: "span",
    "aria-label": phoneNumber
  }, /*#__PURE__*/_react.default.createElement(_phoneIcon.PhoneIcon, null)));
};

exports.TeamCardButtonWithTooltip = TeamCardButtonWithTooltip;
TeamCardButtonWithTooltip.propTypes = {
  phoneNumber: _propTypes.default.string.isRequired
};