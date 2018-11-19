"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlHorizontalStrokes = exports.KarlHorizontalStrokesWithContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _grid = require("kitten/components/grid/grid");

var _radium = _interopRequireDefault(require("radium"));

var _marger = require("kitten/components/layout/marger");

var _horizontalStroke = require("kitten/components/layout/horizontal-stroke");

var _text = require("kitten/components/typography/text");

var _title = require("kitten/karl/examples/title");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = (0, _radium.default)(_text.Text);

var KarlHorizontalStrokesWithContentBase = function KarlHorizontalStrokesWithContentBase() {
  return _react.default.createElement("div", {
    style: styles.content
  }, _react.default.createElement(_horizontalStroke.HorizontalStroke, {
    size: "tiny"
  }), _react.default.createElement(Text, {
    size: "tiny",
    weight: "regular",
    style: styles.content.text,
    color: "font1"
  }, "Lorem"));
};

var styles = {
  content: {
    display: 'flex',
    alignItems: 'center',
    text: {
      marginLeft: '10px'
    }
  }
};
var KarlHorizontalStrokesWithContent = (0, _radium.default)(KarlHorizontalStrokesWithContentBase);
exports.KarlHorizontalStrokesWithContent = KarlHorizontalStrokesWithContent;

var KarlHorizontalStrokes = function KarlHorizontalStrokes() {
  return _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    col: "4"
  }, _react.default.createElement(_title.KarlExampleTitle, null, "Default"), _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "3"
  }, _react.default.createElement(_horizontalStroke.HorizontalStroke, null)), _react.default.createElement(_title.KarlExampleTitle, null, "Tiny"), _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "3"
  }, _react.default.createElement(_horizontalStroke.HorizontalStroke, {
    size: "tiny"
  }))), _react.default.createElement(_grid.GridCol, {
    col: "4"
  }, _react.default.createElement(_title.KarlExampleTitle, null, "Big"), _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "3"
  }, _react.default.createElement(_horizontalStroke.HorizontalStroke, {
    size: "big"
  })), _react.default.createElement(_title.KarlExampleTitle, null, "Huge"), _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "3"
  }, _react.default.createElement(_horizontalStroke.HorizontalStroke, {
    size: "huge"
  }))), _react.default.createElement(_grid.GridCol, {
    col: "4"
  }, _react.default.createElement(_title.KarlExampleTitle, null, "With content"), _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "3"
  }, _react.default.createElement(KarlHorizontalStrokesWithContent, null))));
};

exports.KarlHorizontalStrokes = KarlHorizontalStrokes;