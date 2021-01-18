import _extends from "@babel/runtime/helpers/esm/extends";
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Marger } from '../../../../components/layout/marger';
import { ManageContribution } from './manage-contribution';
import { RewardCardButton } from './button';
import { Deprecated } from '../../../../helpers/utils/deprecated';
export var RewardCardAction = function RewardCardAction(_ref) {
  var manageContributionDescription = _ref.manageContributionDescription,
      manageContributionLinkLabel = _ref.manageContributionLinkLabel,
      manageContributionLinkHref = _ref.manageContributionLinkHref,
      buttonLabel = _ref.buttonLabel,
      buttonOnMouseEnter = _ref.buttonOnMouseEnter,
      buttonOnMouseLeave = _ref.buttonOnMouseLeave,
      buttonOnClick = _ref.buttonOnClick,
      isDisabled = _ref.isDisabled,
      isTinyVersion = _ref.isTinyVersion,
      isSOrLessVersion = _ref.isSOrLessVersion,
      topMargin = _ref.topMargin;
  var hasActionContent = buttonLabel || manageContributionDescription;
  if (!hasActionContent) return null;
  return /*#__PURE__*/React.createElement(Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/React.createElement(Fragment, null, manageContributionDescription && /*#__PURE__*/React.createElement(Marger, {
    top: topMargin,
    bottom: !manageContributionDescription ? 0 : 2
  }, /*#__PURE__*/React.createElement(ManageContribution, {
    description: manageContributionDescription,
    linkLabel: manageContributionLinkLabel,
    linkHref: manageContributionLinkHref,
    isDisabled: isDisabled,
    isTinyVersion: isTinyVersion,
    isSOrLessVersion: isSOrLessVersion
  })), /*#__PURE__*/React.createElement(RewardCardButton, {
    label: buttonLabel,
    onMouseEnter: buttonOnMouseEnter,
    onMouseLeave: buttonOnMouseLeave,
    onClick: buttonOnClick,
    isDisabled: isDisabled,
    isTinyVersion: isTinyVersion
  })));
};
export var RewardCardActionOnMOrMore = function RewardCardActionOnMOrMore(_ref2) {
  var manageContributionDescription = _ref2.manageContributionDescription,
      manageContributionLinkLabel = _ref2.manageContributionLinkLabel,
      manageContributionLinkHref = _ref2.manageContributionLinkHref,
      buttonLabel = _ref2.buttonLabel,
      buttonOnMouseEnter = _ref2.buttonOnMouseEnter,
      buttonOnMouseLeave = _ref2.buttonOnMouseLeave,
      buttonOnClick = _ref2.buttonOnClick,
      isDisabled = _ref2.isDisabled,
      isTinyVersion = _ref2.isTinyVersion,
      isSOrLessVersion = _ref2.isSOrLessVersion;
  var hasActionContent = buttonLabel || manageContributionDescription;
  if (!hasActionContent) return null;
  return /*#__PURE__*/React.createElement(Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/React.createElement(Marger, {
    top: "3"
  }, /*#__PURE__*/React.createElement(RewardCardButton, {
    label: buttonLabel,
    onMouseEnter: buttonOnMouseEnter,
    onMouseLeave: buttonOnMouseLeave,
    onClick: buttonOnClick,
    isDisabled: isDisabled,
    isTinyVersion: isTinyVersion
  }), manageContributionDescription && /*#__PURE__*/React.createElement(Marger, {
    top: !manageContributionDescription ? 0 : 2
  }, /*#__PURE__*/React.createElement(ManageContribution, {
    description: manageContributionDescription,
    linkLabel: manageContributionLinkLabel,
    linkHref: manageContributionLinkHref,
    isDisabled: isDisabled,
    isTinyVersion: isTinyVersion,
    isSOrLessVersion: isSOrLessVersion
  }))));
};
var commonPropTypes = {
  manageContributionDescription: PropTypes.string,
  manageContributionLinkLabel: PropTypes.string,
  manageContributionLinkHref: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonOnMouseEnter: PropTypes.func,
  buttonOnMouseLeave: PropTypes.func,
  buttonOnClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isTinyVersion: PropTypes.bool.isRequired,
  isSOrLessVersion: PropTypes.bool.isRequired
};
var commonDefaultProps = {
  manageContributionDescription: '',
  manageContributionLinkLabel: '',
  manageContributionLinkHref: '',
  buttonLabel: '',
  buttonOnMouseEnter: function buttonOnMouseEnter() {},
  buttonOnMouseLeave: function buttonOnMouseLeave() {},
  buttonOnClick: function buttonOnClick() {},
  isDisabled: false,
  topMargin: 0
};
RewardCardAction.propTypes = _extends({}, commonPropTypes, {
  topMargin: PropTypes.number
});
RewardCardAction.defaultProps = _extends({}, commonDefaultProps);
RewardCardActionOnMOrMore.propTypes = _extends({}, commonPropTypes);
RewardCardActionOnMOrMore.defaultProps = _extends({}, commonDefaultProps);