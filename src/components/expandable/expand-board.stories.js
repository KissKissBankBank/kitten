"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _react3 = require("@storybook/addon-knobs/react");

var _radium = require("radium");

var _expandBoard = require("../../components/expandable/expand-board");

var _grid = require("../../components/grid/grid");

var _text = require("../../components/typography/text");

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _typography = require("../../helpers/utils/typography");

(0, _react2.storiesOf)('Expandable', module).addDecorator(_react3.withKnobs).add('ExpandBoard', (0, _addonInfo.withInfo)('The ExpandBoard is a container that can expand on click. It can accept any content.')(function () {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement("div", {
    style: styles.container
  }, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "10"
  }, _react.default.createElement(_expandBoard.ExpandBoard, {
    withAnimation: (0, _react3.boolean)('withAnimation', true)
  }, _react.default.createElement(_expandBoard.ExpandBoard.Button, {
    expandChildren: (0, _react3.text)('Expanded button text', 'Lancez votre projet')
  }, (0, _react3.text)('Button text', 'KissKissBankBank & Co')), _react.default.createElement(_expandBoard.ExpandBoard.Content, null, _react.default.createElement("div", {
    style: styles.expandBoard.defaultContent
  }, (0, _react3.text)('Board content', "KissKissBankBank et 1 483 037 KissBankers vous aident \xE0\n                        r\xE9aliser vos projets cr\xE9atifs, associatifs et\n                        entrepreneuriaux. Participez \xE0 la naissance de projets\n                        inspirants."))))))));
})).add('ExpandBoard with a List of ButtonItem', (0, _addonInfo.withInfo)('This is an example of ExpandBoard composition with a list of buttons as content.')(function () {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement("div", {
    style: styles.container
  }, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    offset: "1",
    col: "10"
  }, _react.default.createElement(ExpandBoardWithButtonItemList, {
    expandedButtonText: (0, _react3.text)('Expanded button text', 'Précisez votre choix'),
    buttonText: (0, _react3.text)('Button text', 'Je soutiens'),
    withAnimation: (0, _react3.boolean)('With animation', true)
  })))));
}));
var styles = {
  container: {
    margin: (0, _typography.pxToRem)(30),
    paddingBottom: (0, _typography.pxToRem)(30),
    borderBottom: "2px solid ".concat(_colorsConfig.default.line2)
  },
  expandBoard: {
    defaultContent: {
      padding: '1.5em',
      borderLeft: "".concat(_colorsConfig.default.line1, " 0.125rem solid"),
      borderRight: "".concat(_colorsConfig.default.line1, " 0.125rem solid"),
      borderBottom: "".concat(_colorsConfig.default.line1, " 0.125rem solid")
    }
  }
};