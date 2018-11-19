"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _grid = require("kitten/components/grid/grid");

var _react3 = require("@storybook/addon-knobs/react");

var _radium = require("radium");

var _linkBox = require("kitten/components/box/link-box");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Box/LinkBox', module).addDecorator(_react3.withKnobs).add('default', (0, _addonInfo.withInfo)('common info')(function () {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "6"
  }, _react.default.createElement(_linkBox.LinkBox, {
    title: (0, _react3.text)('Title', 'Lorem ipsum'),
    text: (0, _react3.text)('Text', 'Aenean leo ligula, porttitor eu'),
    displayIcon: (0, _react3.boolean)('displayIcon', false)
  }))));
}));