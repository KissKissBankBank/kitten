"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContributionCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _rewardCard = require("kitten/components/cards/reward-card");

var _deprecated = require("kitten/helpers/utils/deprecated");

var ContributionCard = function ContributionCard(props) {
  var message = "You can use the RewardComponent instead.\n    For more information: https://github.com/KissKissBankBank/kitten/blob/master/assets/javascripts/kitten/components/cards/reward-card.js";
  return _react.default.createElement(_deprecated.Deprecated, {
    warningMessage: message
  }, _react.default.createElement(_rewardCard.RewardCard, props));
};

exports.ContributionCard = ContributionCard;