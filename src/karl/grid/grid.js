"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlGridWithOffset = exports.KarlGridSmall = exports.KarlGridInGrid = exports.KarlGridTwelveColumns = void 0;

var _react = _interopRequireDefault(require("react"));

var _grid = require("kitten/components/grid/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlGridTwelveColumns = function KarlGridTwelveColumns() {
  return _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })));
};

exports.KarlGridTwelveColumns = KarlGridTwelveColumns;

var KarlGridInGrid = function KarlGridInGrid() {
  return _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    col: "6"
  }, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    col: "1"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })))), _react.default.createElement(_grid.GridCol, {
    col: "6"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })));
};

exports.KarlGridInGrid = KarlGridInGrid;

var KarlGridSmall = function KarlGridSmall() {
  return _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    "col-s": "2"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    "col-s": "4"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    "col-s": "6"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })));
};

exports.KarlGridSmall = KarlGridSmall;

var KarlGridWithOffset = function KarlGridWithOffset() {
  return _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    "col-l": "6"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })), _react.default.createElement(_grid.GridCol, {
    "col-l": "4",
    "offset-l": "2"
  }, _react.default.createElement("div", {
    className: "karl-GridBox"
  })));
};

exports.KarlGridWithOffset = KarlGridWithOffset;