"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardActionOnMOrMore = exports.RewardCardAction = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../../../components/layout/marger");

var _manageContribution = require("./manage-contribution");

var _button = require("./button");

var _deprecated = require("../../../../helpers/utils/deprecated");

var RewardCardAction = function RewardCardAction(_ref) {
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
  return /*#__PURE__*/_react.default.createElement(_deprecated.Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/_react.default.createElement(_react.Fragment, null, manageContributionDescription && /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: topMargin,
    bottom: !manageContributionDescription ? 0 : 2
  }, /*#__PURE__*/_react.default.createElement(_manageContribution.ManageContribution, {
    description: manageContributionDescription,
    linkLabel: manageContributionLinkLabel,
    linkHref: manageContributionLinkHref,
    isDisabled: isDisabled,
    isTinyVersion: isTinyVersion,
    isSOrLessVersion: isSOrLessVersion
  })), /*#__PURE__*/_react.default.createElement(_button.RewardCardButton, {
    label: buttonLabel,
    onMouseEnter: buttonOnMouseEnter,
    onMouseLeave: buttonOnMouseLeave,
    onClick: buttonOnClick,
    isDisabled: isDisabled,
    isTinyVersion: isTinyVersion
  })));
};

exports.RewardCardAction = RewardCardAction;

var RewardCardActionOnMOrMore = function RewardCardActionOnMOrMore(_ref2) {
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
  return /*#__PURE__*/_react.default.createElement(_deprecated.Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: "3"
  }, /*#__PURE__*/_react.default.createElement(_button.RewardCardButton, {
    label: buttonLabel,
    onMouseEnter: buttonOnMouseEnter,
    onMouseLeave: buttonOnMouseLeave,
    onClick: buttonOnClick,
    isDisabled: isDisabled,
    isTinyVersion: isTinyVersion
  }), manageContributionDescription && /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: !manageContributionDescription ? 0 : 2
  }, /*#__PURE__*/_react.default.createElement(_manageContribution.ManageContribution, {
    description: manageContributionDescription,
    linkLabel: manageContributionLinkLabel,
    linkHref: manageContributionLinkHref,
    isDisabled: isDisabled,
    isTinyVersion: isTinyVersion,
    isSOrLessVersion: isSOrLessVersion
  }))));
};

exports.RewardCardActionOnMOrMore = RewardCardActionOnMOrMore;
var commonPropTypes = {
  manageContributionDescription: _propTypes.default.string,
  manageContributionLinkLabel: _propTypes.default.string,
  manageContributionLinkHref: _propTypes.default.string,
  buttonLabel: _propTypes.default.string,
  buttonOnMouseEnter: _propTypes.default.func,
  buttonOnMouseLeave: _propTypes.default.func,
  buttonOnClick: _propTypes.default.func,
  isDisabled: _propTypes.default.bool,
  isTinyVersion: _propTypes.default.bool.isRequired,
  isSOrLessVersion: _propTypes.default.bool.isRequired
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
RewardCardAction.propTypes = (0, _extends2.default)((0, _extends2.default)({}, commonPropTypes), {}, {
  topMargin: _propTypes.default.number
});
RewardCardAction.defaultProps = (0, _extends2.default)({}, commonDefaultProps);
RewardCardActionOnMOrMore.propTypes = (0, _extends2.default)({}, commonPropTypes);
RewardCardActionOnMOrMore.defaultProps = (0, _extends2.default)({}, commonDefaultProps);