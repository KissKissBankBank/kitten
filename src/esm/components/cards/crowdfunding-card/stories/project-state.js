import React from 'react';
import styled from 'styled-components';
import { CheckedCircleIcon } from '../../../../components/icons/checked-circle-icon';
import { WarningCircleIcon } from '../../../../components/icons/warning-circle-icon';
import { CrossCircleIcon } from '../../../../components/icons/cross-circle-icon';
import { FlashCircleIcon } from '../../../../components/icons/flash-circle-icon';
import { LockIcon } from '../../../../components/icons/lock-icon';
import COLORS from '../../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
var StateContainer = styled.span.withConfig({
  displayName: "project-state__StateContainer",
  componentId: "sc-3qqfgf-0"
})(["display:flex;align-items:center;color:", ";font-size:", ";font-weight:500;svg{margin-right:", ";}"], COLORS.background1, stepToRem(-2), pxToRem(10));

var DefaultedState = function DefaultedState() {
  return /*#__PURE__*/React.createElement(StateContainer, null, /*#__PURE__*/React.createElement(WarningCircleIcon, {
    circleColor: COLORS.error,
    warningColor: COLORS.background1
  }), "D\xE9faut de paiement");
};

var EligibleState = function EligibleState() {
  return /*#__PURE__*/React.createElement(StateContainer, null, /*#__PURE__*/React.createElement(FlashCircleIcon, {
    circleColor: COLORS.primary1,
    flashColor: COLORS.background1
  }), "\xC9ligible");
};

var FailedState = function FailedState() {
  return /*#__PURE__*/React.createElement(StateContainer, null, /*#__PURE__*/React.createElement(CrossCircleIcon, {
    circleColor: COLORS.font2,
    crossColor: COLORS.background1
  }), "Projet \xE9chou\xE9");
};

var FraudulentState = function FraudulentState() {
  return /*#__PURE__*/React.createElement(StateContainer, null, /*#__PURE__*/React.createElement(WarningCircleIcon, {
    circleColor: COLORS.error,
    warningColor: COLORS.background1
  }), "Projet Frauduleux");
};

var InvestedState = function InvestedState() {
  return /*#__PURE__*/React.createElement(StateContainer, null, /*#__PURE__*/React.createElement(CheckedCircleIcon, {
    circleColor: COLORS.primary1,
    checkedColor: COLORS.background1
  }), "500\xA0\u20AC investis");
};

var InvestedReimbursingState = function InvestedReimbursingState() {
  return /*#__PURE__*/React.createElement(StateContainer, null, /*#__PURE__*/React.createElement(CheckedCircleIcon, {
    circleColor: COLORS.valid,
    checkedColor: COLORS.background1
  }), "500\xA0\u20AC investis");
};

var PostponedState = function PostponedState() {
  return /*#__PURE__*/React.createElement(StateContainer, null, /*#__PURE__*/React.createElement(WarningCircleIcon, {
    circleColor: COLORS.orange,
    warningColor: COLORS.background1
  }), "Retard de paiement");
};

var ReimbursedState = function ReimbursedState() {
  return /*#__PURE__*/React.createElement(StateContainer, null, /*#__PURE__*/React.createElement(CheckedCircleIcon, {
    circleColor: COLORS.valid,
    checkedColor: COLORS.background1
  }), "Rembours\xE9");
};

var RestrictedState = function RestrictedState() {
  return /*#__PURE__*/React.createElement(StateContainer, null, /*#__PURE__*/React.createElement(LockIcon, null), "R\xE9serv\xE9");
};

export var STATE_CHOICES = {
  None: null,
  Defaulted: /*#__PURE__*/React.createElement(DefaultedState, null),
  Eligible: /*#__PURE__*/React.createElement(EligibleState, null),
  Failed: /*#__PURE__*/React.createElement(FailedState, null),
  Fraudulent: /*#__PURE__*/React.createElement(FraudulentState, null),
  Invested: /*#__PURE__*/React.createElement(InvestedState, null),
  InvestedReimbursing: /*#__PURE__*/React.createElement(InvestedReimbursingState, null),
  Postponed: /*#__PURE__*/React.createElement(PostponedState, null),
  Reimbursed: /*#__PURE__*/React.createElement(ReimbursedState, null),
  Restricted: /*#__PURE__*/React.createElement(RestrictedState, null)
};