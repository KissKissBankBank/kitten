"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _react3 = require("@storybook/addon-knobs/react");

var _backerCard = require("./backer-card");

var _container = require("kitten/components/grid/container");

var _grid = require("kitten/components/grid/grid");

var _marger = require("kitten/components/layout/marger");

var _text = require("kitten/components/typography/text");

var Description = function Description() {
  return _react.default.createElement(_react.Fragment, null, "Lorem", ' ', _react.default.createElement(_text.Text, {
    color: "primary1",
    weight: "regular"
  }, "ipsum"), ' ', "dolor sit amet, ", _react.default.createElement("br", null), _react.default.createElement(_text.Text, {
    weight: "regular"
  }, "consectetur adipiscing elit"), "\u2026");
};

(0, _react2.storiesOf)('Cards/BackerCard', module).addDecorator(_react3.withKnobs).add('default', (0, _addonInfo.withInfo)('common info')(function () {
  return _react.default.createElement(_marger.Marger, {
    top: "4"
  }, _react.default.createElement(_container.Container, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    col: "3"
  }, _react.default.createElement(_backerCard.BackerCard, {
    title: (0, _react3.text)('Backer title', 'Backer name'),
    subtitle: (0, _react3.text)('Backer subtitle', 'Backer subtitle'),
    imgProps: {
      src: 'https://placeimg.com/80/80/any'
    },
    description: _react.default.createElement(Description, null)
  })))));
}));