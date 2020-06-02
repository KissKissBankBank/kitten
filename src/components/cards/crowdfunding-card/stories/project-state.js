"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STATE_CHOICES = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _checkedCircleIcon = require("../../../../components/icons/checked-circle-icon");

var _warningCircleIcon = require("../../../../components/icons/warning-circle-icon");

var _crossCircleIcon = require("../../../../components/icons/cross-circle-icon");

var _flashCircleIcon = require("../../../../components/icons/flash-circle-icon");

var _lockIcon = require("../../../../components/icons/lock-icon");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var StateContainer = _styledComponents.default.span.withConfig({
  displayName: "project-state__StateContainer",
  componentId: "sc-3qqfgf-0"
})(["display:flex;align-items:center;color:", ";font-size:", ";font-weight:500;svg{margin-right:", ";}"], _colorsConfig.default.background1, (0, _typography.stepToRem)(-2), (0, _typography.pxToRem)(10));

var DefaultedState = function DefaultedState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_warningCircleIcon.WarningCircleIcon, {
    circleColor: _colorsConfig.default.error,
    warningColor: _colorsConfig.default.background1
  }), "D\xE9faut de paiement");
};

var EligibleState = function EligibleState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_flashCircleIcon.FlashCircleIcon, {
    circleColor: _colorsConfig.default.primary1,
    flashColor: _colorsConfig.default.background1
  }), "\xC9ligible");
};

var FailedState = function FailedState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_crossCircleIcon.CrossCircleIcon, {
    circleColor: _colorsConfig.default.font2,
    crossColor: _colorsConfig.default.background1
  }), "Projet \xE9chou\xE9");
};

var FraudulentState = function FraudulentState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_warningCircleIcon.WarningCircleIcon, {
    circleColor: _colorsConfig.default.error,
    warningColor: _colorsConfig.default.background1
  }), "Projet Frauduleux");
};

var InvestedState = function InvestedState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_checkedCircleIcon.CheckedCircleIcon, {
    circleColor: _colorsConfig.default.primary1,
    checkedColor: _colorsConfig.default.background1
  }), "500\xA0\u20AC investis");
};

var InvestedReimbursingState = function InvestedReimbursingState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_checkedCircleIcon.CheckedCircleIcon, {
    circleColor: _colorsConfig.default.valid,
    checkedColor: _colorsConfig.default.background1
  }), "500\xA0\u20AC investis");
};

var PostponedState = function PostponedState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_warningCircleIcon.WarningCircleIcon, {
    circleColor: _colorsConfig.default.orange,
    warningColor: _colorsConfig.default.background1
  }), "Retard de paiement");
};

var ReimbursedState = function ReimbursedState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_checkedCircleIcon.CheckedCircleIcon, {
    circleColor: _colorsConfig.default.valid,
    checkedColor: _colorsConfig.default.background1
  }), "Rembours\xE9");
};

var RestrictedState = function RestrictedState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_lockIcon.LockIcon, null), "R\xE9serv\xE9");
};

var STATE_CHOICES = {
  None: null,
  Defaulted: /*#__PURE__*/_react.default.createElement(DefaultedState, null),
  Eligible: /*#__PURE__*/_react.default.createElement(EligibleState, null),
  Failed: /*#__PURE__*/_react.default.createElement(FailedState, null),
  Fraudulent: /*#__PURE__*/_react.default.createElement(FraudulentState, null),
  Invested: /*#__PURE__*/_react.default.createElement(InvestedState, null),
  InvestedReimbursing: /*#__PURE__*/_react.default.createElement(InvestedReimbursingState, null),
  Postponed: /*#__PURE__*/_react.default.createElement(PostponedState, null),
  Reimbursed: /*#__PURE__*/_react.default.createElement(ReimbursedState, null),
  Restricted: /*#__PURE__*/_react.default.createElement(RestrictedState, null)
};
exports.STATE_CHOICES = STATE_CHOICES;