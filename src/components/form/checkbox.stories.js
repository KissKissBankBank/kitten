"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _radium = require("radium");

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _react3 = require("@storybook/addon-knobs/react");

var _addonActions = require("@storybook/addon-actions");

var _checkbox = require("./checkbox");

var _grid = require("kitten/components/grid/grid");

(0, _react2.storiesOf)('Form/Checkbox', module).addDecorator(_react3.withKnobs).add('default', (0, _addonInfo.withInfo)('common info')(function () {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "8"
  }, _react.default.createElement(_checkbox.Checkbox, {
    id: (0, _react3.text)('id', 'checkbox_id'),
    onLabelClick: (0, _addonActions.action)('label-click')
  }, (0, _react3.text)('text', 'Checkbox Label')))));
}));