"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _radium = require("radium");

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _react3 = require("@storybook/addon-knobs/react");

var _commentForm = require("./comment-form");

var _grid = require("../../components/grid/grid");

(0, _react2.storiesOf)('Form/CommentForm', module).addDecorator(_react3.withKnobs).add('default', (0, _addonInfo.withInfo)('common info')(function () {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "8"
  }, _react.default.createElement(_commentForm.CommentForm, {
    avatarImgProps: (0, _react3.object)('Src/Alt', {
      src: 'https://placehold.it/80x80/caf4fe/caf4fe',
      alt: ''
    }),
    placeholder: (0, _react3.text)('placeholder', 'Leave a comment on the project'),
    commentButton: (0, _react3.text)('Comment button', 'Comment'),
    error: (0, _react3.boolean)('Is error', false),
    errorMessage: (0, _react3.text)('Error message', 'Cum sociis natoque penatibus et magnis')
  }))));
}));