"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _react3 = require("@storybook/addon-knobs/react");

var _radium = require("radium");

var _cartRewardCard = require("kitten/components/cards/cart-reward-card");

var _grid = require("kitten/components/grid/grid");

var _marger = require("kitten/components/layout/marger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Cards/CartRewardCard', module).addDecorator(_react3.withKnobs).add('default', (0, _addonInfo.withInfo)('common info')(function () {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "6"
  }, _react.default.createElement(_marger.Marger, {
    top: "5",
    bottom: "5"
  }, _react.default.createElement(_cartRewardCard.CartRewardCard, {
    titleAmount: (0, _react3.text)('Title Amount', 'For 00€'),
    subtitle: (0, _react3.text)('Subtitle', 'Don libre'),
    textDescription: (0, _react3.text)('Text description', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient mont'),
    updateAmountTitle: (0, _react3.text)('Update amount', 'Change donation amount')
  }, _react.default.createElement(_cartRewardCard.CartRewardCard.Information, {
    title: (0, _react3.text)('Shipping Title', 'Shipping:'),
    value: (0, _react3.text)('Shipping Value', 'January 2018')
  }), _react.default.createElement(_cartRewardCard.CartRewardCard.Information, {
    title: (0, _react3.text)('Other information title', 'Variation:'),
    value: (0, _react3.text)('Other information value', 'Size L')
  }))))));
}));