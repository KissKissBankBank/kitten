"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _react3 = require("@storybook/addon-knobs/react");

var _radium = require("radium");

var _list = require("kitten/components/lists/list");

var _grid = require("kitten/components/grid/grid");

var _text = require("kitten/components/typography/text");

var _marger = require("kitten/components/layout/marger");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

(0, _react2.storiesOf)('List', module).addDecorator(_react3.withKnobs).add('Simple list', (0, _addonInfo.withInfo)('This is a simple list component')(function () {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "10"
  }, _react.default.createElement(_marger.Marger, {
    top: "1"
  }, _react.default.createElement(_list.List, null, _react.default.createElement("div", null, "Item 1"), _react.default.createElement("div", null, "Item 2"), _react.default.createElement("div", null, "Item 3"))))));
})).add('List with ButtonItem', (0, _addonInfo.withInfo)('This is an example of List with ButtonItem')(function () {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "10"
  }, _react.default.createElement(_marger.Marger, {
    top: "1"
  }, _react.default.createElement(_list.List, null, _react.default.createElement(_list.List.ButtonItem, {
    withTopBorder: true
  }, _react.default.createElement("div", {
    style: styles.buttonListItem.wrapper
  }, _react.default.createElement(_text.Text, {
    tag: "p",
    weight: "regular",
    color: "font1",
    size: "tiny",
    style: styles.buttonListItem.base
  }, "Taille XS"), _react.default.createElement(_text.Text, {
    tag: "small",
    color: "font1",
    size: "micro"
  }, "Disponibilit\xE9: 10/30"))), _react.default.createElement(_list.List.ButtonItem, {
    disabled: true
  }, _react.default.createElement("div", {
    style: styles.buttonListItem.wrapper
  }, _react.default.createElement(_text.Text, {
    tag: "p",
    weight: "regular",
    color: "font1",
    size: "tiny",
    style: styles.buttonListItem.base
  }, "Taille M"), _react.default.createElement(_text.Text, {
    tag: "small",
    color: "font1",
    size: "micro"
  }, "Disponibilit\xE9: 10/30"))), _react.default.createElement(_list.List.ButtonItem, null, _react.default.createElement("div", {
    style: styles.buttonListItem.wrapper
  }, _react.default.createElement(_text.Text, {
    tag: "p",
    weight: "regular",
    color: "font1",
    size: "tiny",
    style: styles.buttonListItem.base
  }, "Taille XXL"), _react.default.createElement(_text.Text, {
    tag: "small",
    color: "font1",
    size: "micro"
  }, "Disponibilit\xE9: 10/30"))))))));
}));
var styles = {
  buttonListItem: {
    base: {
      margin: 0,
      padding: 0,
      lineHeight: '1.2em'
    },
    wrapper: {
      margin: '1em 0',
      padding: 0
    }
  }
};