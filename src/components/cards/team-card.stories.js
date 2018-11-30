"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _react3 = require("@storybook/addon-knobs/react");

var _container = require("kitten/components/grid/container");

var _grid = require("kitten/components/grid/grid");

var _teamCard = require("kitten/components/cards/team-card");

var _marger = require("kitten/components/layout/marger");

(0, _react2.storiesOf)('Cards', module).addDecorator(_react3.withKnobs).add('TeamCard', function () {
  return _react.default.createElement(_container.Container, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    col: "3"
  }, _react.default.createElement(_marger.Marger, {
    top: "5",
    bottom: "5"
  }, _react.default.createElement(_teamCard.TeamCard, null, _react.default.createElement(_teamCard.TeamCard.Image, {
    src: (0, _react3.text)('Image url', 'http://via.placeholder.com/500x500/caf4fe/caf4fe'),
    title: (0, _react3.text)('Image title', 'Title')
  }), _react.default.createElement(_teamCard.TeamCard.Title, {
    children: (0, _react3.text)('children', 'Lorem Ipsum'),
    subTitle: (0, _react3.text)('Subtitle', 'Consectetur')
  }), _react.default.createElement(_teamCard.TeamCard.Icons, {
    email: (0, _react3.text)('Email', 'example@kisskissbankbank.com'),
    phoneNumber: (0, _react3.text)('Phone number', '06 00 00 00 00'),
    socialLink: (0, _react3.text)('Social link', 'https://www.linkedin.com')
  }))))));
});