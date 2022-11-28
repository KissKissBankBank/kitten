"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Step = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _status = require("./status");

const StyledItem = _styledComponents.default.li.withConfig({
  displayName: "step__StyledItem",
  componentId: "sc-hcrd93-0"
})(["margin:", " 0 ", " 0;display:flex;flex-direction:column;padding-right:", ";&:first-of-type{margin-top:0;padding-top:0;}&:last-of-type{margin-bottom:0;padding-bottom:0;}& li:not(:last-of-type){margin:0 !important;&::after{display:none;}}.k-VerticalProgress__step--content{padding-left:", ";}"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(50));

const Step = _ref => {
  let {
    statusType,
    statusProps,
    progressTitle,
    children,
    ...other
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledItem, (0, _extends2.default)({
    className: "k-VerticalProgress__item"
  }, other), /*#__PURE__*/_react.default.createElement(_status.Status, (0, _extends2.default)({
    statusType: statusType,
    progressTitle: progressTitle
  }, statusProps)), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-VerticalProgress__step--content"
  }, children));
};

exports.Step = Step;