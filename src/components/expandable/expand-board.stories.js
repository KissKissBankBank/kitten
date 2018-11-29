"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _react3 = require("@storybook/addon-knobs/react");

var _radium = require("radium");

var _expandBoard = require("../../components/expandable/expand-board");

var _list = require("../../components/lists/list");

var _grid = require("../../components/grid/grid");

var _text = require("../../components/typography/text");

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

(0, _react2.storiesOf)('Expandable', module).addDecorator(_react3.withKnobs).add('ExpandBoard', (0, _addonInfo.withInfo)('The ExpandBoard is a container that can expand on click. It can accept any content.')(function () {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "10"
  }, _react.default.createElement(_expandBoard.ExpandBoard, null, _react.default.createElement(_expandBoard.ExpandBoard.Button, {
    expandChildren: "Lancez votre projet"
  }, "KissKissBankBank & Co"), _react.default.createElement(_expandBoard.ExpandBoard.Content, null, _react.default.createElement("div", {
    style: styles.expandBoard.defaultContent
  }, "KissKissBankBank et 1 483 037 KissBankers vous aident \xE0 r\xE9aliser vos projets cr\xE9atifs, associatifs et entrepreneuriaux. Participez \xE0 la naissance de projets inspirants."))))));
})).add('ExpandBoard with list of ButtonItem', (0, _addonInfo.withInfo)('This is an example of ExpandBoard composition with a list of buttons as content.')(function () {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "10"
  }, _react.default.createElement(_expandBoard.ExpandBoard, null, _react.default.createElement(_expandBoard.ExpandBoard.Button, {
    expandChildren: "Pr\xE9cisez votre choix"
  }, "Je soutiens"), _react.default.createElement(_expandBoard.ExpandBoard.Content, null, _react.default.createElement(_list.List, null, _react.default.createElement(_list.List.ButtonItem, null, _react.default.createElement("div", {
    style: styles.buttonListItem.wrapper
  }, _react.default.createElement(_text.Text, {
    tag: "p",
    weight: "regular",
    color: "font-1",
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
    color: "font-1",
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
    color: "font-1",
    size: "tiny",
    style: styles.buttonListItem.base
  }, "Taille XXL"), _react.default.createElement(_text.Text, {
    tag: "small",
    color: "font1",
    size: "micro"
  }, "Disponibilit\xE9: 10/30")))))))));
}));
var styles = {
  expandBoard: {
    defaultContent: {
      padding: '1.5em',
      borderLeft: "".concat(_colorsConfig.default.line1, " 0.125rem solid"),
      borderRight: "".concat(_colorsConfig.default.line1, " 0.125rem solid"),
      borderBottom: "".concat(_colorsConfig.default.line1, " 0.125rem solid")
    }
  },
  buttonListItem: {
    base: {
      margin: 0,
      padding: 0,
      lineHeight: '1.2rem'
    },
    wrapper: {
      margin: '1rem 0',
      padding: 0
    }
  }
};