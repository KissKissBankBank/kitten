import React from 'react';
import { RewardCard } from '../../components/cards/reward-card';
import { Deprecated } from '../../helpers/utils/deprecated';
export var ContributionCard = function ContributionCard(props) {
  var message = "You can use the RewardComponent instead.\n    For more information: https://github.com/KissKissBankBank/../../blob/master/assets/javascripts/../../components/cards/reward-card.js";
  return /*#__PURE__*/React.createElement(Deprecated, {
    warningMessage: message
  }, /*#__PURE__*/React.createElement(RewardCard, props));
};