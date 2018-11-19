"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _react3 = require("@storybook/addon-knobs/react");

var _radium = require("radium");

var _donationCard = require("kitten/components/cards/donation-card");

var _grid = require("kitten/components/grid/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _react2.storiesOf)('Cards/DonationCard', module).addDecorator(_react3.withKnobs).add('default', (0, _addonInfo.withInfo)('common info')(function () {
  var _React$createElement;

  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "10"
  }, _react.default.createElement(_donationCard.DonationCard, (_React$createElement = {
    title: (0, _react3.text)('Title Amount', 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.'),
    buttonLabel: (0, _react3.text)('Button', 'Choose'),
    isDisabled: (0, _react3.boolean)('Is Disabled', false),
    amountLabel: (0, _react3.text)('Label Input', 'Enter your amount'),
    amountPlaceholder: (0, _react3.text)('Placeholder input', 'Your amount')
  }, _defineProperty(_React$createElement, "isDisabled", (0, _react3.boolean)('Is Disabled', false)), _defineProperty(_React$createElement, "isError", (0, _react3.boolean)('Is error', false)), _defineProperty(_React$createElement, "errorTag", (0, _react3.text)('Error tag', 'lorem ipsum dolor sit amet')), _React$createElement)))));
}));