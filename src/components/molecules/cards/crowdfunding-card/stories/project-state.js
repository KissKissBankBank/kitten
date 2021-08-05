"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STATE_CHOICES = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../../../../..");

var StateContainer = _styledComponents.default.span.withConfig({
  displayName: "project-state__StateContainer",
  componentId: "sc-9lbbn-0"
})(["display:flex;align-items:center;color:", ";font-size:", ";font-weight:500;svg{margin-right:", ";}"], _.COLORS.background1, (0, _.stepToRem)(-2), (0, _.pxToRem)(10));

var DefaultedState = function DefaultedState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_.WarningCircleIcon, {
    circleColor: _.COLORS.error,
    warningColor: _.COLORS.background1
  }), "D\xE9faut de paiement");
};

var EligibleState = function EligibleState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_.FlashCircleIcon, {
    circleColor: _.COLORS.primary1,
    flashColor: _.COLORS.background1
  }), "\xC9ligible");
};

var FailedState = function FailedState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_.CrossCircleIcon, {
    circleColor: _.COLORS.font2,
    crossColor: _.COLORS.background1
  }), "Projet \xE9chou\xE9");
};

var FraudulentState = function FraudulentState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_.WarningCircleIcon, {
    circleColor: _.COLORS.error,
    warningColor: _.COLORS.background1
  }), "Projet Frauduleux");
};

var InvestedState = function InvestedState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_.CheckedCircleIcon, {
    circleColor: _.COLORS.primary1,
    checkedColor: _.COLORS.background1
  }), "500\xA0\u20AC investis");
};

var InvestedReimbursingState = function InvestedReimbursingState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_.CheckedCircleIcon, {
    circleColor: _.COLORS.valid,
    checkedColor: _.COLORS.background1
  }), "500\xA0\u20AC investis");
};

var PostponedState = function PostponedState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_.WarningCircleIcon, {
    circleColor: _.COLORS.orange,
    warningColor: _.COLORS.background1
  }), "Retard de paiement");
};

var ReimbursedState = function ReimbursedState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_.CheckedCircleIcon, {
    circleColor: _.COLORS.valid,
    checkedColor: _.COLORS.background1
  }), "Rembours\xE9");
};

var RestrictedState = function RestrictedState() {
  return /*#__PURE__*/_react.default.createElement(StateContainer, null, /*#__PURE__*/_react.default.createElement(_.LockIcon, null), "R\xE9serv\xE9");
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