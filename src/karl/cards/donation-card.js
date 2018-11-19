"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlDonationCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _donationCard = require("kitten/components/cards/donation-card");

var _title = require("kitten/karl/examples/title");

var _container = require("kitten/components/grid/container");

var _marger = require("kitten/components/layout/marger");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var KarlDonationCard = function KarlDonationCard() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_title.KarlExampleTitle, null, "Donation card"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(_donationCard.DonationCard, {
    title: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    donationForm: {
      buttonLabel: 'To contribute',
      inputId: 'donation-amount-1',
      inputLabel: 'Enter your amount',
      inputPlaceholder: 'Your amount',
      inputUnit: '€'
    }
  }))), _react.default.createElement(_title.KarlExampleTitle, null, "Donation card disabled"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(_donationCard.DonationCard, {
    title: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    donationForm: {
      buttonLabel: 'To contribute',
      inputId: 'donation-amount-2',
      inputLabel: 'Enter your amount',
      inputPlaceholder: 'Your amount',
      inputUnit: '€'
    },
    isDisabled: true
  }))), _react.default.createElement(_title.KarlExampleTitle, null, "Donation card with error"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(_donationCard.DonationCard, {
    title: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    donationForm: {
      buttonLabel: 'To contribute',
      inputId: 'donation-amount-3',
      inputLabel: 'Enter your amount',
      inputPlaceholder: 'Your amount',
      inputUnit: '€',
      inputIsOnError: true,
      errorMessage: 'lorem ipsum dolor sit amet consectetur.'
    }
  }))), _react.default.createElement(_title.KarlExampleTitle, null, "Donation card tiny version"), _react.default.createElement(_container.Container, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(_donationCard.DonationCard, {
    title: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    donationForm: {
      buttonLabel: 'To contribute',
      inputId: 'donation-amount-4',
      inputLabel: 'Enter your amount',
      inputPlaceholder: 'Your amount',
      inputUnit: '€'
    },
    version: "tiny"
  }))));
};

exports.KarlDonationCard = KarlDonationCard;