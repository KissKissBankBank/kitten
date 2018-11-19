"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _react3 = require("@storybook/addon-knobs/react");

var _verticalCardWithAction = require("kitten/components/cards/vertical-card-with-action");

var _grid = require("kitten/components/grid/grid");

var _marger = require("kitten/components/layout/marger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Cards/VerticalCardWithAction', module).addDecorator(_react3.withKnobs).add('default', (0, _addonInfo.withInfo)('common info')(function () {
  return _react.default.createElement(_marger.Marger, {
    top: "3",
    bottom: "3"
  }, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    col: "3"
  }, _react.default.createElement(_verticalCardWithAction.VerticalCardWithAction, {
    imageProps: (0, _react3.object)('Src/Alt', {
      src: 'http://via.placeholder.com/500x500/caf4fe/caf4fe',
      alt: ''
    }),
    title: (0, _react3.text)('Title description', 'Lorem ipsum dolor sit amet'),
    description: (0, _react3.text)('Text description', 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem'),
    button: (0, _react3.text)('Button', 'Lorem ipsum'),
    buttonModifier: (0, _react3.text)('Button modifier', 'helium')
  }))));
}));