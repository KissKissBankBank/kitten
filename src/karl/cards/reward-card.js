"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlRewardCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _rewardCard = require("kitten/components/cards/reward-card");

var _container = require("kitten/components/grid/container");

var _marger = require("kitten/components/layout/marger");

var _title = require("kitten/karl/examples/title");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlRewardCard = function KarlRewardCard() {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_title.KarlExampleTitle, null, "Reward card"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    bottom: "2"
  }, _react.default.createElement(_rewardCard.RewardCard, {
    titleAmount: "For 00\u20AC",
    subtitle: "Lorem ipsumn, consectetuer adipiscing elit.",
    description: "In enim justo.",
    infos: [{
      label: 'Contributors:',
      value: '35'
    }, {
      label: 'Delivery:',
      value: 'January 2018'
    }],
    buttonLabel: "Choose"
  }))), _react.default.createElement(_title.KarlExampleTitle, null, "Disabled Reward card"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(_rewardCard.RewardCard, {
    titleAmount: "For 00\u20AC",
    subtitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    description: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.",
    infos: [{
      label: 'Contributors:',
      value: '35'
    }, {
      label: 'Delivery:',
      value: 'January 2018'
    }, {
      label: 'Availability:',
      value: '200'
    }],
    buttonLabel: "Choose",
    manageContributionDescription: "You contributed to this project",
    manageContributionLinkLabel: "Manage my contribution",
    isDisabled: true
  }))), _react.default.createElement(_title.KarlExampleTitle, null, "Completed Reward card"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(_rewardCard.RewardCard, {
    titleAmount: "For 00\u20AC",
    subtitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    description: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.",
    infos: [{
      label: 'Contributors:',
      value: '35'
    }, {
      label: 'Delivery:',
      value: 'January 2018'
    }, {
      label: 'Availability:',
      value: '200'
    }],
    manageContributionDescription: "You contributed to this project",
    manageContributionLinkLabel: "Manage my contribution",
    imageProps: {
      src: 'http://via.placeholder.com/200x350/caf4fe/caf4fe',
      alt: ''
    }
  }))), _react.default.createElement(_title.KarlExampleTitle, null, "Without Image Reward card"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(_rewardCard.RewardCard, {
    titleAmount: "For 00\u20AC",
    subtitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    description: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.",
    infos: [{
      label: 'Contributors:',
      value: '35'
    }, {
      label: 'Delivery:',
      value: 'January 2018'
    }, {
      label: 'Availability:',
      value: '200'
    }],
    manageContributionDescription: "You contributed to this project",
    manageContributionLinkLabel: "Manage my contribution"
  }))), _react.default.createElement(_title.KarlExampleTitle, null, "Without Image Reward card"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(_rewardCard.RewardCard, {
    titleAmount: "For 00\u20AC",
    subtitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    description: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.",
    infos: [{
      label: 'Contributors:',
      value: '35'
    }, {
      label: 'Delivery:',
      value: 'January 2018'
    }, {
      label: 'Availability:',
      value: '200'
    }],
    manageContributionDescription: "You contributed to this project",
    manageContributionLinkLabel: "Manage my contribution",
    buttonLabel: "Choose"
  }))), _react.default.createElement(_title.KarlExampleTitle, null, "Small Image Reward card"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(_rewardCard.RewardCard, {
    titleAmount: "For 00\u20AC",
    subtitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    description: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.",
    infos: [{
      label: 'Contributors:',
      value: '35'
    }, {
      label: 'Delivery:',
      value: 'January 2018'
    }, {
      label: 'Availability:',
      value: '200'
    }],
    manageContributionDescription: "You contributed to this project",
    manageContributionLinkLabel: "Manage my contribution",
    buttonLabel: "Choose",
    imageProps: {
      src: 'http://via.placeholder.com/200x200/caf4fe/caf4fe',
      alt: ''
    }
  }))), _react.default.createElement(_title.KarlExampleTitle, null, "Small Image Reward card (tiny version)"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(_rewardCard.RewardCard, {
    titleAmount: "For 00\u20AC",
    subtitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    description: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.",
    infos: [{
      label: 'Contributors:',
      value: '35'
    }, {
      label: 'Delivery:',
      value: 'January 2018'
    }, {
      label: 'Availability:',
      value: '200'
    }],
    manageContributionDescription: "You contributed to this project",
    manageContributionLinkLabel: "Manage my contribution",
    buttonLabel: "Choose",
    imageProps: {
      src: 'http://via.placeholder.com/200x200/caf4fe/caf4fe',
      alt: ''
    },
    version: "tiny"
  }))));
};

exports.KarlRewardCard = KarlRewardCard;