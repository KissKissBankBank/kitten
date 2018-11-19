"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlButtonImageWithText = void 0;

var _react = _interopRequireDefault(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _grid = require("kitten/components/grid/grid");

var _buttonImageWithText = require("kitten/components/buttons/button-image-with-text");

var _title = require("kitten/karl/examples/title");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlButtonImageWithText = function KarlButtonImageWithText() {
  return _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    "col-m": "3"
  }, _react.default.createElement(_title.KarlExampleTitle, null, "With paragraph - micro"), _react.default.createElement(_buttonImageWithText.ButtonImageWithText, {
    tag: "div",
    micro: true,
    titleRegular: true,
    title: "Title",
    description: "Description"
  })), _react.default.createElement(_grid.GridCol, {
    "col-m": "3"
  }, _react.default.createElement(_title.KarlExampleTitle, null, "With paragraph - tiny"), _react.default.createElement(_buttonImageWithText.ButtonImageWithText, {
    tag: "p",
    title: "Title",
    description: "Description",
    titleRegular: true
  })), _react.default.createElement(_grid.GridCol, {
    "col-m": "3"
  }, _react.default.createElement(_title.KarlExampleTitle, null, "With paragraph - large gutter"), _react.default.createElement(_buttonImageWithText.ButtonImageWithText, {
    tag: "div",
    largeGutter: true,
    titleRegular: true,
    title: "Title",
    description: "Description"
  })));
};

exports.KarlButtonImageWithText = KarlButtonImageWithText;