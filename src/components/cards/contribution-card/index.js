"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContributionCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _rewardCard = require("../../../components/cards/reward-card");

var _deprecated = require("../../../helpers/utils/deprecated");

var ContributionCard = function ContributionCard(props) {
  var message = "You can use the RewardComponent instead.\n    For more information: https://github.com/KissKissBankBank/../../blob/master/assets/javascripts/../../components/cards/reward-card.js";
  return /*#__PURE__*/_react.default.createElement(_deprecated.Deprecated, {
    warningMessage: message
  }, /*#__PURE__*/_react.default.createElement(_rewardCard.RewardCard, props));
};

exports.ContributionCard = ContributionCard;