"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlLegoGrid12Items = exports.KarlLegoGrid = void 0;

var _react = _interopRequireDefault(require("react"));

var _grid = require("kitten/components/grid/grid");

var _legoGrid = require("kitten/components/grid/lego-grid");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var masonryProps = {
  options: {
    transitionDuration: 0
  }
};
var karlLegoGridClassName = (0, _classnames.default)('k-DevGrid__container', 'k-DevGrid__container--withoutOutline');

var KarlLegoGrid = function KarlLegoGrid() {
  var cards = [{
    key: 'card-1',
    height: '100px'
  }, {
    key: 'card-2',
    height: '200px'
  }, {
    key: 'card-3',
    height: '340px'
  }, {
    key: 'card-4',
    height: '140px'
  }, {
    key: 'card-5',
    height: '240px'
  }, {
    key: 'card-6',
    height: '400px'
  }, {
    key: 'card-7',
    height: '190px'
  }, {
    key: 'card-8',
    height: '330px'
  }, {
    key: 'card-9',
    height: '330px'
  }, {
    key: 'card-10',
    height: '280px'
  }];
  return _react.default.createElement("div", {
    className: karlLegoGridClassName
  }, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    col: "12"
  }, _react.default.createElement(_legoGrid.LegoGrid, {
    masonryProps: masonryProps
  }, cards.map(function (card) {
    return _react.default.createElement(_legoGrid.LegoGrid.Item, {
      key: card.key
    }, _react.default.createElement("div", {
      className: "karl-ProjectCard",
      style: {
        height: card.height
      }
    }));
  })))));
};

exports.KarlLegoGrid = KarlLegoGrid;

var KarlLegoGrid12Items = function KarlLegoGrid12Items() {
  var cards = Array.apply(null, {
    length: 12
  }).map(function (_, index) {
    return index;
  });
  return _react.default.createElement("div", {
    className: karlLegoGridClassName
  }, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    col: "12"
  }, _react.default.createElement(_legoGrid.LegoGrid, {
    masonryProps: masonryProps,
    "items-xxs-up": "1",
    "items-xs-up": "3",
    "items-s-up": "4",
    "items-m-up": "6",
    "items-l-up": "12"
  }, cards.map(function (index) {
    return _react.default.createElement(_legoGrid.LegoGrid.Item, {
      key: index
    }, _react.default.createElement("div", {
      className: "karl-ProjectCard",
      style: {
        height: '200px'
      }
    }));
  })))));
};

exports.KarlLegoGrid12Items = KarlLegoGrid12Items;