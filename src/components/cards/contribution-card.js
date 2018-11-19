"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContributionCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _rewardCard = require("kitten/components/cards/reward-card");

var _deprecated = require("kitten/helpers/utils/deprecated");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ContributionCard = function ContributionCard(props) {
  var message = "You can use the RewardComponent instead.\n    For more information: https://github.com/KissKissBankBank/kitten/blob/master/assets/javascripts/kitten/components/cards/reward-card.js";
  return _react.default.createElement(_deprecated.Deprecated, {
    warningMessage: message
  }, _react.default.createElement(_rewardCard.RewardCard, props));
};

exports.ContributionCard = ContributionCard;