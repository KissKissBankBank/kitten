"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlVerticalCardWithAction = void 0;

var _react = _interopRequireDefault(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _grid = require("kitten/components/grid/grid");

var _verticalCardWithAction = require("kitten/components/cards/vertical-card-with-action");

var _container = require("kitten/components/grid/container");

var _marger = require("kitten/components/layout/marger");

var _title = require("kitten/karl/examples/title");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlVerticalCardWithAction = function KarlVerticalCardWithAction() {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    "col-s": "4"
  }, _react.default.createElement(_title.KarlExampleTitle, null, "Vertical card with action"), _react.default.createElement(_marger.Marger, {
    bottom: "2"
  }, _react.default.createElement(_verticalCardWithAction.VerticalCardWithAction, {
    imageProps: {
      src: 'http://via.placeholder.com/500x500/caf4fe/caf4fe',
      alt: ''
    },
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    button: "Lorem ipsum",
    buttonModifier: "helium"
  }))), _react.default.createElement(_grid.GridCol, {
    "col-s": "4"
  }, _react.default.createElement(_title.KarlExampleTitle, null, "Vertical card with action and text"), _react.default.createElement(_marger.Marger, {
    bottom: "2"
  }, _react.default.createElement(_verticalCardWithAction.VerticalCardWithAction, {
    imageProps: {
      src: 'http://via.placeholder.com/500x500/caf4fe/caf4fe',
      alt: ''
    },
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
    button: "Lorem ipsum",
    buttonModifier: "helium"
  })))));
};

exports.KarlVerticalCardWithAction = KarlVerticalCardWithAction;