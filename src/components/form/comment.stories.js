"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _radium = require("radium");

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _react3 = require("@storybook/addon-knobs/react");

var _comment = require("./comment");

var _grid = require("kitten/components/grid/grid");

(0, _react2.storiesOf)('Form/Comment', module).addDecorator(_react3.withKnobs).add('default', (0, _addonInfo.withInfo)('common info')(function () {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "8"
  }, _react.default.createElement(_comment.Comment, {
    avatarImgProps: (0, _react3.object)('Src/Alt', {
      src: 'https://placehold.it/80x80/caf4fe/caf4fe',
      alt: ''
    }),
    commentDate: (0, _react3.text)('Comment date', '2 min'),
    text: (0, _react3.text)('Text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'),
    ownerName: (0, _react3.text)('Owner name', 'Lorem ipsum')
  }))));
}));