"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _react3 = require("@storybook/addon-knobs/react");

var _grid = require("kitten/components/grid/grid");

var _radium = require("radium");

var _buttonImageWithText = require("kitten/components/buttons/button-image-with-text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('ButtonImageWithText', module).addDecorator(_react3.withKnobs).add('ButtonImageWithText', function () {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "6"
  }, _react.default.createElement(_buttonImageWithText.ButtonImageWithText, {
    title: (0, _react3.text)('Title', 'Owner title'),
    description: (0, _react3.text)('Description', 'description'),
    micro: (0, _react3.boolean)('Micro', false),
    largeGutter: (0, _react3.boolean)('Large gutter', false),
    titleRegular: (0, _react3.boolean)('Regular title', false),
    textRegular: (0, _react3.boolean)('Regular text', false)
  }))));
});