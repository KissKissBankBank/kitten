"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _react3 = require("@storybook/addon-knobs/react");

var _radium = require("radium");

var _crowdfundingCard = require("kitten/components/cards/crowdfunding-card");

var _grid = require("kitten/components/grid/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Cards/CrowfundingCard', module).addDecorator(_react3.withKnobs).add('default', (0, _addonInfo.withInfo)('common info')(function () {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "5"
  }, _react.default.createElement(_crowdfundingCard.CrowdfundingCard, {
    ownerTitle: (0, _react3.text)('Owner title', 'Owner title'),
    ownerDescription: (0, _react3.text)('Owner description', 'Owner description'),
    href: (0, _react3.text)('Link', '#'),
    loading: (0, _react3.boolean)('Loading', false),
    cardTitle: (0, _react3.text)('Card title', 'Lorem ipsum…'),
    cardSubTitle: (0, _react3.text)('Card subTitle', 'Sed ut perspiciatis unde omnis iste natus error Lorem'),
    info1: (0, _react3.text)('info1', 'Lorem ipsum…'),
    info2: (0, _react3.text)('info2', 'Lorem ipsum…'),
    info3: (0, _react3.text)('info3', 'Lorem ipsum…'),
    progress: (0, _react3.text)('progress', '42'),
    state: (0, _react3.text)('state', 'Lorem ipsum…')
  }))));
}));