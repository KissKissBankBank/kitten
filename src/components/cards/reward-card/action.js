"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardActionOnMOrMore = exports.RewardCardAction = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("kitten/components/layout/marger");

var _manageContribution = require("kitten/components/cards/reward-card/manage-contribution");

var _button = require("kitten/components/cards/reward-card/button");

var _deprecated = require("kitten/helpers/utils/deprecated");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  return _react.default.createElement(_deprecated.Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/kitten/"
  }, _react.default.createElement(_react.Fragment, null, manageContributionDescription && _react.default.createElement(_marger.Marger, {
    top: topMargin,
    bottom: !manageContributionDescription ? 0 : 2
  }, _react.default.createElement(_manageContribution.ManageContribution, {
    description: manageContributionDescription,
    linkLabel: manageContributionLinkLabel,
    linkHref: manageContributionLinkHref,
    isDisabled: isDisabled,
    isTinyVersion: isTinyVersion,
    isSOrLessVersion: isSOrLessVersion
  })), _react.default.createElement(_button.RewardCardButton, {
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
  return _react.default.createElement(_deprecated.Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/kitten/"
  }, _react.default.createElement(_marger.Marger, {
    top: "3"
  }, _react.default.createElement(_button.RewardCardButton, {
    label: buttonLabel,
    onMouseEnter: buttonOnMouseEnter,
    onMouseLeave: buttonOnMouseLeave,
    onClick: buttonOnClick,
    isDisabled: isDisabled,
    isTinyVersion: isTinyVersion
  }), manageContributionDescription && _react.default.createElement(_marger.Marger, {
    top: !manageContributionDescription ? 0 : 2
  }, _react.default.createElement(_manageContribution.ManageContribution, {
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
RewardCardAction.propTypes = _objectSpread({}, commonPropTypes, {
  topMargin: _propTypes.default.number
});
RewardCardAction.defaultProps = _objectSpread({}, commonDefaultProps);
RewardCardActionOnMOrMore.propTypes = _objectSpread({}, commonPropTypes);
RewardCardActionOnMOrMore.defaultProps = _objectSpread({}, commonDefaultProps);