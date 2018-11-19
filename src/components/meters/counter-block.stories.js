"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _react3 = require("@storybook/addon-knobs/react");

var _counterBlock = require("kitten/components/meters/counter-block");

var _grid = require("kitten/components/grid/grid");

var _marger = require("kitten/components/layout/marger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createMockMediaMatcher = function createMockMediaMatcher(matches) {
  return function () {
    return {
      matches: matches,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  };
};

(0, _react2.storiesOf)('metrics/CounterBlock', module).addDecorator(_react3.withKnobs).add('default', (0, _addonInfo.withInfo)('common info')(function () {
  return _react.default.createElement(_marger.Marger, {
    top: "3",
    bottom: "3"
  }, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    "offset-l": "1",
    "col-l": "10"
  }, _react.default.createElement(_counterBlock.CounterBlock, {
    title: (0, _react3.text)('Title', 'Total validated amount'),
    subTitle: (0, _react3.text)('Sub Title', 'euro collected since Novembre 19th 2014'),
    counter: (0, _react3.text)('Counter', '13 106 700')
  }))));
}));