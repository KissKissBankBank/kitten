"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlLoanSimulatorWithError = exports.KarlLoanSimulatorWithfeesExemption = exports.KarlLoanSimulatorWithCommission = exports.KarlLoanSimulator = void 0;

var _defaultProps = _interopRequireDefault(require("kitten/hoc/default-props"));

var _react = _interopRequireDefault(require("react"));

var _loanSimulator = require("kitten/components/simulators/loan-simulator");

var _card = require("kitten/hoc/card");

var _marger = require("kitten/components/layout/marger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlLoanSimulatorCardComponent = function KarlLoanSimulatorCardComponent(props) {
  return _react.default.createElement("div", props);
};

var KarlLoanSimulatorCard = (0, _card.card)(KarlLoanSimulatorCardComponent, {
  light: true,
  rounded: true,
  padded: true
});
var KarlLoanSimulatorComponent = (0, _defaultProps.default)(_loanSimulator.LoanSimulator, {
  amountLabel: 'I need',
  amountPlaceholder: 'Between $200 and $10,000',
  amountMin: 200,
  amountMax: 10000,
  amountName: 'amount',
  amountOutOfBoundsError: 'Please choose an amount between $200 and $10,000',
  installmentName: 'installment',
  durationName: 'duration',
  sliderPlaceholder: 'Slide to choose',
  actionLabel: 'OK'
});
var KarlLoanSimulatorComponentWithCommission = (0, _defaultProps.default)(_loanSimulator.LoanSimulator, {
  displayCommission: true,
  commissionRules: [{
    durationMax: 9,
    rate: 0.03
  }, {
    durationMax: 18,
    rate: 0.04
  }, {
    durationMax: 24,
    rate: 0.05
  }, {
    rate: 0.06
  }],
  initialAmount: 2500,
  initialInstallment: 150,
  actionLabel: null
});
var KarlLoanSimulatorComponentWithfeesExemption = (0, _defaultProps.default)(_loanSimulator.LoanSimulator, {
  displayCommission: true,
  feesExemption: true,
  commissionRules: [{
    durationMax: 9,
    rate: 0.03
  }, {
    durationMax: 18,
    rate: 0.04
  }, {
    durationMax: 24,
    rate: 0.05
  }, {
    rate: 0.06
  }],
  initialAmount: 2500,
  initialInstallment: 150,
  actionLabel: null
});
var KarlLoanSimulatorComponentWithError = (0, _defaultProps.default)(_loanSimulator.LoanSimulator, {
  initialTouched: true,
  actionLabel: null
});

var KarlLoanSimulator = function KarlLoanSimulator() {
  return _react.default.createElement(KarlLoanSimulatorCard, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(KarlLoanSimulatorComponent, null)));
};

exports.KarlLoanSimulator = KarlLoanSimulator;

var KarlLoanSimulatorWithCommission = function KarlLoanSimulatorWithCommission() {
  return _react.default.createElement(KarlLoanSimulatorCard, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(KarlLoanSimulatorComponentWithCommission, null)));
};

exports.KarlLoanSimulatorWithCommission = KarlLoanSimulatorWithCommission;

var KarlLoanSimulatorWithfeesExemption = function KarlLoanSimulatorWithfeesExemption() {
  return _react.default.createElement(KarlLoanSimulatorCard, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(KarlLoanSimulatorComponentWithfeesExemption, null)));
};

exports.KarlLoanSimulatorWithfeesExemption = KarlLoanSimulatorWithfeesExemption;

var KarlLoanSimulatorWithError = function KarlLoanSimulatorWithError() {
  return _react.default.createElement(KarlLoanSimulatorCard, null, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "2"
  }, _react.default.createElement(KarlLoanSimulatorComponentWithError, null)));
};

exports.KarlLoanSimulatorWithError = KarlLoanSimulatorWithError;